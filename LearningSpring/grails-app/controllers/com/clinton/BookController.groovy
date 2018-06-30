package com.clinton

import grails.plugin.springsecurity.SpringSecurityService
import grails.plugin.springsecurity.annotation.Secured
import grails.rest.*
import grails.converters.*


@Secured(['ROLE_ADMIN'])
class BookController extends RestfulController {
    static responseFormats = ['json', 'xml']

    SpringSecurityService springSecurityService

    BookController() {
        super(Book)
    }
}
