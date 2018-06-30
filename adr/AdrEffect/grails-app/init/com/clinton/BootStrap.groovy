package com.clinton

class BootStrap {

    def init = { servletContext ->
        /*User user = new User(username: 'clinton@gmail.com', password: 'password',
                fullName: 'clinton', mobile: '7837405699', organization: 'GHS', enabled: true).save(flush: true)
        Role role = Role.findOrSaveByAuthority('ROLE_USER')
        UserRole.create(user, role, true)

        Report report = Report.findOrSaveByClientId(Long.valueOf('1'))
        report.patientName = 'Don'
        report.patientId = 'saaa'
        if (!report.save()){
            println(report.errors.allErrors)
        }

        assert User.count > 0
        assert Report.count > 0*/

        new Role("ROLE_USER").save()
        new Role("ROLE_ADMIN").save()
    }
    def destroy = {
    }
}
