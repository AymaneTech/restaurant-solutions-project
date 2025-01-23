package com.wora.restaurant.menu.application.service.impl;

import com.wora.restaurant.config.annotation.ApplicationService;
import com.wora.restaurant.menu.application.dto.request.RecipeRequestDto;
import com.wora.restaurant.menu.application.dto.response.RecipeResponseDto;
import com.wora.restaurant.menu.application.service.RecipeService;
import com.wora.restaurant.menu.domain.repository.RecipeRepository;
import com.wora.restaurant.menu.domain.vo.RecipeId;
import lombok.RequiredArgsConstructor;

import java.util.List;

@ApplicationService
@RequiredArgsConstructor
public class DefaultRecipeService implements RecipeService {
    private final RecipeRepository repository;

    @Override
    public RecipeResponseDto createRecipe(RecipeRequestDto dto) {
        return null;
    }

    @Override
    public RecipeResponseDto updateRecipe(RecipeId id, RecipeRequestDto dto) {
        return null;
    }

    @Override
    public List<RecipeResponseDto> getAllRecipes() {
        return List.of();
    }

    @Override
    public RecipeResponseDto getRecipeById(RecipeId id) {
        return null;
    }

    @Override
    public void deleteRecipe(RecipeId id) {

    }
}
