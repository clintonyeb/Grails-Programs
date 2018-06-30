package com.clinton

import grails.plugin.asyncmail.AsynchronousMailService
import grails.transaction.Transactional

@Transactional
class EmailService {

    AsynchronousMailService asynchronousMailService

    def sendMessage() {
        asynchronousMailService.sendMail {
            // Mail parameters
            to 'clintonmethis@gmail.com'
            subject 'Test';
            html '<body><u>Test</u></body>';
        }
    }
}
