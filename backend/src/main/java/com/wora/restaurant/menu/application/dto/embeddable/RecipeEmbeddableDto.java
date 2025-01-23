package com.wora.restaurant.menu.application.dto.embeddable;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

import java.math.BigDecimal;

public record RecipeEmbeddableDto(@NotNull Long id,
                                  @NotBlank String name,
                                  @NotBlank String description,
                                  @NotNull BigDecimal price,
                                  @NotBlank String image
) {
}
