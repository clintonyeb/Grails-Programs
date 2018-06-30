package com.clinton

import grails.transaction.Transactional
import org.springframework.web.multipart.MultipartFile

@Transactional
class ImageService {


    String saveImage(MultipartFile file) {
        if (file.empty) return null
        String path = "/home/clinton/Pictures/"+ file.getOriginalFilename()
        file.transferTo(new File(path))
        return path
    }
}
