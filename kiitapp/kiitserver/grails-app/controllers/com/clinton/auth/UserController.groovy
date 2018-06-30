package com.clinton.auth

import com.clinton.kiitsocial.Rollnumber
import grails.plugin.springsecurity.annotation.Secured
import grails.transaction.Transactional

import static org.springframework.http.HttpStatus.*

@Secured(['ROLE_ANONYMOUS', 'ROLE_USER', 'ROLE_ADMIN'])
@Transactional(readOnly = true)
class UserController {

    static responseFormats = ['json', 'xml']
    static allowedMethods = [save: "POST", update: "PUT", delete: "DELETE"]
    def avatarService

    def search(){
        String type = params.get('type')
        switch (type){
            case 'username':

                String username = params.get('username')

                if (User.findByUsername(username)) {
                    respond username:  username, message: "EXISTS", status: false
                }

                else if (Rollnumber.findByIdentify(username)) {
                    respond username: username, message: "OK", status: true
                }
                else respond username: username, message: "ERROR", status: false
                break

            case 'nickname':
                String nickname = params.get('nickname')
                if (!User.findByNickname(nickname))
                    respond username: nickname, message: "OK", status: true
                else respond username:  nickname, message: "EXISTS", status: false
                break

            case 'list':
                String term = params.get('term')
                def user = User.findAllByUsernameOrNicknameIlike(term, term)
                respond user, [status: OK, view:  'index']
                break
        }
    }

    def index(Integer max) {
        params.max = Math.min(max ?: 10, 100)
        respond User.list(params), model:[userCount: User.count()]
    }

    def show() {
        String username = params.get('username')
        respond User.findByUsername(username)
    }

    @Transactional
    def save(User user) {
        if (user == null) {
            transactionStatus.setRollbackOnly()
            render status: NOT_FOUND
            return
        }

        if (!user.smallAvatar)
            user.smallAvatar = avatarService.createAvatar(user.gender)
        assert user.smallAvatar

        if (user.hasErrors()) {
            transactionStatus.setRollbackOnly()
            respond user.errors, view:'create'
            return
        }

        user.save flush:true
        def userRole = Role.findOrSaveByAuthority("ROLE_USER")
        UserRole.create(user, userRole, true)

        respond user, [status: CREATED, view:"show"]
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
}
