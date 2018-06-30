package com.clinton

class UrlMappings {

    static mappings = {

        "/api/users"(resources: "user")
        "/api/users"(resources: "email")
        "/api/guests/users"(resources: "user")
        "/api/reports"(resources: "report")

        "/"(controller: 'application', action:'index')
        "500"(view: '/error')
        "404"(view: '/notFound')
    }
}
