package com.wora.restaurant.menu.application.service;

import com.wora.restaurant.menu.application.dto.request.RecipeRequestDto;
import com.wora.restaurant.menu.application.dto.response.RecipeResponseDto;
import com.wora.restaurant.menu.domain.entity.Recipe;
import com.wora.restaurant.menu.domain.vo.RecipeId;

import java.util.List;

public interface RecipeService {

    RecipeResponseDto createRecipe(RecipeRequestDto dto);

    RecipeResponseDto updateRecipe(RecipeId id, RecipeRequestDto dto);

    void toggleRecipeAvailability(RecipeId id);

    List<RecipeResponseDto> getAllRecipes();

    RecipeResponseDto getRecipeById(RecipeId id);

    void deleteRecipe(RecipeId id);

    List<RecipeResponseDto> getAvailableRecipes();

    Recipe getEntityById(RecipeId id);
}
