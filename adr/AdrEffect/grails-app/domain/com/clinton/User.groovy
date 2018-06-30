package com.clinton

import groovy.transform.EqualsAndHashCode
import groovy.transform.ToString

@EqualsAndHashCode(includes = 'username')
@ToString(includes = 'username', includeNames = true, includePackage = false)
class User implements Serializable {

    private static final long serialVersionUID = 1

    transient springSecurityService

    String username
    String password
    boolean enabled = false
    boolean accountExpired
    boolean accountLocked
    boolean passwordExpired

    //Custom props
	String fullName
    String mobile
    String designation
    String organization
    Date dateCreated
    Date lastUpdated

    //Relationships
    static hasMany = [reports: Report]

    static constraints = {
        username blank: false, unique: true
        password blank: false
        fullName blank: false, size: 5..20
        mobile blank: false, size: 5..20, unique: true
        designation nullable: true, size: 1..50
        organization blank: false, size: 1..50
        reports nullable: true
    }


    User(String username, String password) {
        this()
        this.username = username
        this.password = password
    }

    Set<Role> getAuthorities() {
        UserRole.findAllByUser(this)*.role
    }

    def beforeInsert() {
        encodePassword()
    }

    def beforeUpdate() {
        if (isDirty('password')) {
            encodePassword()
        }
    }

    protected void encodePassword() {
        password = springSecurityService?.passwordEncoder ? springSecurityService.encodePassword(password) : password
    }

    static transients = ['springSecurityService']

    static mapping = {
        password column: '`password`'
    }
}
