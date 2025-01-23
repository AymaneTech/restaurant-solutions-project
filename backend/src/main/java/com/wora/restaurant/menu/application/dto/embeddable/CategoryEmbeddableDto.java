package com.wora.restaurant.menu.application.dto.embeddable;

import jakarta.validation.constraints.NotNull;

public record CategoryEmbeddableDto(@NotNull Long id,
                                    @NotNull String name
) {
}