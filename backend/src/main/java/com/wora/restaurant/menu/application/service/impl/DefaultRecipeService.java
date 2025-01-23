package com.wora.restaurant.menu.application.service.impl;

import com.wora.restaurant.common.application.ApplicationService;
import com.wora.restaurant.common.exception.ResourceNotFoundException;
import com.wora.restaurant.menu.application.dto.request.RecipeRequestDto;
import com.wora.restaurant.menu.application.dto.response.RecipeResponseDto;
import com.wora.restaurant.menu.application.mapper.RecipeMapper;
import com.wora.restaurant.menu.application.service.CategoryService;
import com.wora.restaurant.menu.application.service.FileUploader;
import com.wora.restaurant.menu.application.service.RecipeService;
import com.wora.restaurant.menu.domain.entity.Category;
import com.wora.restaurant.menu.domain.entity.Recipe;
import com.wora.restaurant.menu.domain.repository.RecipeRepository;
import com.wora.restaurant.menu.domain.vo.CategoryId;
import com.wora.restaurant.menu.domain.vo.RecipeId;
import lombok.RequiredArgsConstructor;

import java.util.List;

@ApplicationService
@RequiredArgsConstructor
public class DefaultRecipeService implements RecipeService {
    private final RecipeRepository repository;
    private final RecipeMapper mapper;
    private final FileUploader fileUploader;
    private final CategoryService categoryService;

    @Override
    public RecipeResponseDto createRecipe(RecipeRequestDto dto) {
        final Category category = categoryService.findEntityById(CategoryId.of(dto.categoryId()));
        final String image = fileUploader.upload(dto.image());

        final Recipe recipe = mapper.toEntity(dto)
                .setImage(image)
                .setCategory(category);

        final Recipe savedRecipe = repository.save(recipe);
        return mapper.toResponseDto(savedRecipe);
    }

    @Override
    public RecipeResponseDto updateRecipe(RecipeId id, RecipeRequestDto dto) {
        final Recipe recipe = repository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Recipe", id.value()));
        final Category category = categoryService.findEntityById(CategoryId.of(dto.categoryId()));
        final String image = fileUploader.upload(dto.image());

        mapper.updateRecipe(recipe, dto);
        recipe.setImage(image)
                .setCategory(category);

        return mapper.toResponseDto(recipe);
    }

    @Override
    public void toggleRecipeAvailability(RecipeId id) {
        final Recipe recipe = repository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Recipe", id.value()));

        recipe.toggleAvailability();
    }

    @Override
    public List<RecipeResponseDto> getAllRecipes() {
        return repository.findAll()
                .stream().map(mapper::toResponseDto)
                .toList();
    }

    @Override
    public RecipeResponseDto getRecipeById(RecipeId id) {
        return repository.findById(id)
                .map(mapper::toResponseDto)
                .orElseThrow(() -> new ResourceNotFoundException("Recipe", id.value()));
    }

    @Override
    public void deleteRecipe(RecipeId id) {
        if (!repository.existsById(id))
            throw new ResourceNotFoundException("Recipe", id.value());

        repository.deleteById(id);
    }

    @Override
    public List<RecipeResponseDto> getAvailableRecipes() {
        return repository.findAllByAvailableTrue()
                .stream().map(mapper::toResponseDto)
                .toList();
    }

    @Override
    public Recipe getEntityById(RecipeId id) {
        return repository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Recipe", id.value()));
    }
}
