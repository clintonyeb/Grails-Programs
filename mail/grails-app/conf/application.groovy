
//Mail Configuration
asasynchronous.mail.default.max.attempts.count = 3
asynchronous.mail.persistence.provider='hibernate5'
asynchronous.mail.useFlushOnSave = true
grails {
    mail {
        host = "smtp.gmail.com"
        port = 465
        username = "clintonmethis@gmail.com"
        password = "2i2l43orn4r9090"
        props = ["mail.smtp.auth":"true",
                 "mail.smtp.socketFactory.port":"465",
                 "mail.smtp.socketFactory.class":"javax.net.ssl.SSLSocketFactory",
                 "mail.smtp.socketFactory.fallback":"false"]
    }
}
grails.mail.default.from = "clintonmethis@gmail.com"

