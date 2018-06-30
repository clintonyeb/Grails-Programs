package com.clinton

class Report {
    Date dateCreated
    Date lastUpdated
    Long clientId
    String patientName
    String patientId

    static belongsTo = [user: User]
    static hasMany = [imagePaths: String]

    static constraints = {
        imagePaths  nullable: true
        patientId nullable: true
        patientName nullable: true
        user nullable: true
    }
}
