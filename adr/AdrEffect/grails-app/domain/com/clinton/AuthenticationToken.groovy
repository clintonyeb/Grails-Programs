package com.clinton

class AuthenticationToken {

    String tokenValue
    String username
    Date refreshed = new Date()

    static mapping = {
        version false
    }

    static constraints = {
    }


    def afterLoad() {
        if (refreshed < new Date() -1) {
            refreshed = new Date()
            it.save()
        }
    }
}
