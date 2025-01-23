package com.wora.restaurant.order.application.dto.response;

import com.wora.restaurant.menu.application.dto.embeddable.RecipeEmbeddableDto;

public record OrderItemResponseDto(
        RecipeEmbeddableDto recipe,
        int quantity
) {
}
