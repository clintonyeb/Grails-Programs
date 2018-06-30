package com.clinton

import grails.plugin.springsecurity.annotation.Secured
import grails.transaction.Transactional
import org.springframework.web.multipart.MultipartFile
import static org.springframework.http.HttpStatus.*

@Secured(['ROLE_ADMIN'])
@Transactional(readOnly = true)
class ReportController {

    ImageService imageService

    static responseFormats = ['json', 'xml']
    static allowedMethods = [save: "POST", update: "PUT", delete: "DELETE"]

    def index(Integer max) {
        params.max = Math.min(max ?: 10, 100)
        respond Report.list(params), model: [reportCount: Report.count()]
    }

    def show(Report report) {
        respond report
    }

    @Secured(['ROLE_USER'])
    @Transactional
    def save() {

        MultipartFile image = request.getFile("imagedata");
        String path = imageService.saveImage(image)
        if (path) {
            println path
            String clientId = request.getParameter('clientId');

            Report report = Report.findOrSaveByClientId(Long.valueOf(clientId))
            report.patientName = request.getParameter('patientName')
            report.patientId = request.getParameter('patientId') ?: null

            report.addToImagePaths(path)

            if (report.hasErrors()) {
                transactionStatus.setRollbackOnly()
                println('errors dey')
                println(report.errors)
                render status: NOT_FOUND
                return
            }

            if (report.save()) {
                println('saved')
                String userId = request.getParameter('username')
                println userId
                User user = User.findByUsername(userId)
                user.addToReports(report)
                user.save()
            }

            respond report, [status: CREATED, view: "show"]
        } else {
            render status: NOT_FOUND
        }

    }

    @Transactional
    def update(Report report) {
        if (report == null) {
            transactionStatus.setRollbackOnly()
            render status: NOT_FOUND
            return
        }

        if (report.hasErrors()) {
            transactionStatus.setRollbackOnly()
            respond report.errors, view: 'edit'
            return
        }

        report.save flush: true

        respond report, [status: OK, view: "show"]
    }

    @Transactional
    def delete(Report report) {

        if (report == null) {
            transactionStatus.setRollbackOnly()
            render status: NOT_FOUND
            return
        }

        report.delete flush: true

        render status: NO_CONTENT
    }
}