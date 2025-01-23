package com.wora.restaurant.menu.application.dto.request;

import com.wora.restaurant.common.application.validation.UniqueField;
import com.wora.restaurant.menu.domain.entity.Category;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import org.springframework.web.multipart.MultipartFile;

public record CategoryRequestDto(
        @NotBlank
        @UniqueField(entityClass = Category.class, fieldName = "name", message = "category name must not be null")
        String name,
        @NotNull MultipartFile image
) {
}
