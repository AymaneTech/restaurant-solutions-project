package com.wora.restaurant.menu.application.service;

import com.wora.restaurant.menu.application.dto.request.RecipeRequestDto;
import com.wora.restaurant.menu.application.dto.response.RecipeResponseDto;
import com.wora.restaurant.menu.domain.vo.RecipeId;

import java.util.List;

public interface RecipeService {

    RecipeResponseDto createRecipe(RecipeRequestDto dto);

    RecipeResponseDto updateRecipe(RecipeId id, RecipeRequestDto dto);

    List<RecipeResponseDto> getAllRecipes();

    RecipeResponseDto getRecipeById(RecipeId id);

    void deleteRecipe(RecipeId id);
}
