package com.wora.restaurant.config.annotation;


import jakarta.transaction.Transactional;
import org.springframework.stereotype.Service;
import org.springframework.validation.annotation.Validated;

import java.lang.annotation.*;

@Target(ElementType.TYPE)
@Retention(RetentionPolicy.RUNTIME)
@Documented
@Service
@Transactional
@Validated
public @interface ApplicationService {
}
