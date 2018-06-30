package com.clinton


import grails.rest.*
import grails.converters.*
import grails.plugin.springsecurity.annotation.Secured

@Secured(['ROLE_ADMIN'])
class AuthorController extends RestfulController {
    static responseFormats = ['json', 'xml']
    AuthorController() {
        super(Author)
    }
}
