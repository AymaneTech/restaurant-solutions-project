package com.wora.restaurant.menu.application.dto.request;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import org.springframework.web.multipart.MultipartFile;

import java.math.BigDecimal;

public record RecipeRequestDto(@NotBlank String name,
                               @NotBlank String description,
                               @NotBlank BigDecimal price,
                               @NotBlank MultipartFile image,
                               @NotNull Long categoryId
) {
}
