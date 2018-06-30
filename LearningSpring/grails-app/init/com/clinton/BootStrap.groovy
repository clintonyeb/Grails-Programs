package com.clinton

import com.auth.Role
import com.auth.User
import com.auth.UserRole

class BootStrap {

    def init = { servletContext ->
        new Book(title: 'John The Great Baptist').save()
        new Author(name: 'clinton yeboah').save()
        User user  = new User(username: 'clinton', password: 'mypass').save()
        Role role = new Role(authority: "ROLE_ADMIN").save()
        UserRole.create(user, role, true)
    }
    def destroy = {
    }
}
