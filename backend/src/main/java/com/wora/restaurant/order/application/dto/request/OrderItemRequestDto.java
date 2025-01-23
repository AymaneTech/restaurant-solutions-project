package com.wora.restaurant.order.application.dto.request;

import jakarta.validation.constraints.NotNull;

public record OrderItemRequestDto(@NotNull Long recipeId,
                                  @NotNull Integer quantity
) {
}
