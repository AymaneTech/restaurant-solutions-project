package com.wora.restaurant.menu.domain.vo;

import jakarta.persistence.Column;

public record RecipeId(@Column(name = "recipe_id") Long value) {
    public static RecipeId of(Long id) {
        return new RecipeId(id);
    }
}
