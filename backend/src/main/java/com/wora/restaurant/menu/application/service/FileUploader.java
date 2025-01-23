package com.wora.restaurant.menu.application.service;

import org.springframework.web.multipart.MultipartFile;

public interface FileUploader {
    String upload(MultipartFile multipartFile);
}
