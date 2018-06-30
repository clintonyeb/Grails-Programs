package com.clinton.kiitsocial

class Rollnumber {
    String identify

    static constraints = {
        identify unique: true, nullable: false
    }
}
