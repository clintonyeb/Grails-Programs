package com.clinton

import grails.plugin.springsecurity.annotation.Secured
import grails.transaction.Transactional

import java.security.SecureRandom

import static org.springframework.http.HttpStatus.*

@Secured(['ROLE_ADMIN', 'ROLE_USER', 'ROLE_ANONYMOUS'])
@Transactional(readOnly = true)
class UserController {

    static responseFormats = ['json', 'xml']
    static allowedMethods = [save: "POST", update: "PUT", delete: "DELETE"]

    EmailService emailService

    def index(Integer max) {
        params.max = Math.min(max ?: 10, 100)
        respond User.list(params), model:[userCount: User.count()]
    }

    def show(User user) {
        respond user
    }

    @Transactional
    def save(UserCommand user) {

        if (user == null) {
            transactionStatus.setRollbackOnly()
            render status: NOT_FOUND
            return
        }

        if (user.hasErrors()) {
            transactionStatus.setRollbackOnly()
            respond user.errors, [status: NOT_ACCEPTABLE, view:'create']
            return
        }

        User userToSave = new User(user.properties)

        if(User.findByUsernameOrMobile(userToSave.username, userToSave.mobile)) {

            transactionStatus.setRollbackOnly()
            render status: CONFLICT
            return

        }

        userToSave.password = generatePassword()

        userToSave.save()

        def userRole = Role.findByAuthority("ROLE_USER")
        UserRole.create(userToSave, userRole, true)

        emailService.sendMessage()
        respond userToSave, [status: CREATED, view:"show"]
    }

    @Transactional
    def update(User user) {
        if (user == null) {
            transactionStatus.setRollbackOnly()
            render status: NOT_FOUND
            return
        }

        if (user.hasErrors()) {
            transactionStatus.setRollbackOnly()
            respond user.errors, view:'edit'
            return
        }

        user.save flush:true

        respond user, [status: OK, view:"show"]
    }

    @Transactional
    def delete(User user) {

        if (user == null) {
            transactionStatus.setRollbackOnly()
            render status: NOT_FOUND
            return
        }

        user.delete flush:true

        render status: NO_CONTENT
    }

    private static String generatePassword() {
        final String AB = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        SecureRandom rnd = new SecureRandom();
        StringBuilder sb = new StringBuilder(8);
        for (int i = 0; i < 8; i++)
            sb.append(AB.charAt(rnd.nextInt(AB.length())));
        return sb.toString();

    }
}

class UserCommand {
    String username
    String password

    //Custom props
    String fullName
    String mobile
    String designation
    String organization

    static constraints =  {
        username blank: false, unique: true
        password blank: false
        fullName blank: false, size: 5..20
        mobile blank: false, size: 5..20, unique: true
        designation nullable: true, size: 1..50
        organization blank: false, size: 1..50
    }
}