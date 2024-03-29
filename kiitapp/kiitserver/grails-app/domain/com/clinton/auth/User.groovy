package com.clinton.auth

import com.clinton.kiitsocial.Avatar
import com.clinton.kiitsocial.Content
import com.clinton.kiitsocial.Profile
import groovy.transform.EqualsAndHashCode
import groovy.transform.ToString

@EqualsAndHashCode(includes = 'username')
@ToString(includes = 'username', includeNames = true, includePackage = false)
class User implements Serializable {

    private static final long serialVersionUID = 1

    transient springSecurityService

    String username
    String password
    boolean enabled = true
    boolean accountExpired
    boolean accountLocked
    boolean passwordExpired

    //starting custom domain...can touch this
    String nickname
    Date dateCreated
    Date lastUpdated
    Avatar smallAvatar
    String gender

    static hasMany = [contents: Content]

    static hasOne = [profile: Profile]

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

    static constraints = {
        username blank: false, unique: true
        password blank: false
        nickname blank: false, unique: true, size: 4..20
        gender inList: ["1", "0"]

        profile unique: true, nullable: true
        contents nullable: true
        smallAvatar nullable: true
    }

    static mapping = {
        password column: '`password`'
    }
}
