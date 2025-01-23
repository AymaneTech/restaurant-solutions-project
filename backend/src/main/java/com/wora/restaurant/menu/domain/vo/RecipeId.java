package com.wora.restaurant.menu.domain.vo;

public record RecipeId(Long value) {
    public static RecipeId of(Long id) {
        return new RecipeId(id);
    }
}
