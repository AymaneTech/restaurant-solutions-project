package com.wora.restaurant.menu.application.dto.request;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import org.springframework.web.multipart.MultipartFile;

public record CategoryRequestDto(@NotBlank String name,
                                 @NotNull MultipartFile image
) {
}
