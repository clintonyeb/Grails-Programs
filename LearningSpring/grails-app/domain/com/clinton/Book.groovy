package com.clinton


import grails.rest.*

@Resource(readOnly = false, formats = ['json', 'xml'])
class Book {
    String title
}