package com.clinton

import com.clinton.auth.Role
import com.clinton.auth.User
import com.clinton.auth.UserRole
import com.clinton.kiitsocial.Rollnumber

class BootStrap {

    def init = { servletContext ->
        def user = new User(username: '111111', password: 'password', nickname: '11111', gender: "1")
                .save(failOnError: true)
        def userRole = Role.findOrSaveByAuthority("ROLE_USER")
        UserRole.create(user, userRole, true)

        assert User.count == 1
        assert UserRole.count == 1

        List rollnumbers = new ArrayList<String>()
        rollnumbers.addAll('1356881')

        rollnumbers.forEach{
            new Rollnumber(identify: it).save()
        }

        assert Rollnumber.count > 0


    }
    def destroy = {
    }
}
