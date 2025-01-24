package com.wora.restaurant.order.domain.vo;

import com.wora.restaurant.menu.domain.vo.RecipeId;
import jakarta.persistence.AttributeOverride;
import jakarta.persistence.Column;

public record OrderItemId(
        @AttributeOverride(name = "value", column = @Column(name = "order_id")) OrderId orderId,
        @AttributeOverride(name = "value", column = @Column(name = "recipe_id")) RecipeId recipeId
) {
}
