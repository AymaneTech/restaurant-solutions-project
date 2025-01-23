package com.wora.restaurant.menu.application.dto.response;

import com.wora.restaurant.menu.application.dto.embeddable.RecipeEmbeddableDto;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

import java.util.List;

public record CategoryResponseDto(@NotNull Long id,
                                  @NotBlank String name,
                                  @NotNull String image,
                                  List<RecipeEmbeddableDto> recipes
) {
}
