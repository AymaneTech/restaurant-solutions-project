package com.wora.restaurant.menu.application.dto.response;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

import java.math.BigDecimal;

public record RecipeResponseDto(@NotNull Long id,
                                @NotBlank String name,
                                @NotBlank String description,
                                @NotBlank BigDecimal price,
                                @NotBlank String image
) {
}
