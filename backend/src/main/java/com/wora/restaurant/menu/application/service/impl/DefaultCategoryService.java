package com.wora.restaurant.menu.application.service.impl;

import com.wora.restaurant.config.annotation.ApplicationService;
import com.wora.restaurant.menu.application.dto.request.CategoryRequestDto;
import com.wora.restaurant.menu.application.dto.response.CategoryResponseDto;
import com.wora.restaurant.menu.application.service.CategoryService;
import com.wora.restaurant.menu.application.service.FileUploader;
import com.wora.restaurant.menu.domain.entity.Category;
import com.wora.restaurant.menu.domain.repository.CategoryRepository;
import com.wora.restaurant.menu.domain.vo.CategoryId;
import lombok.RequiredArgsConstructor;

import java.util.List;

@ApplicationService
@RequiredArgsConstructor
public class DefaultCategoryService implements CategoryService {
    private final CategoryRepository repository;
    private final FileUploader fileUploader;

    @Override
    public CategoryResponseDto createCategory(CategoryRequestDto dto) {
        final String imageUrl = fileUploader.upload(dto.image());
        final Category category = Category.create(dto.name(), imageUrl);
        Category savedCategory = repository.save(category);

        return new CategoryResponseDto(savedCategory.id().value(), savedCategory.name(), savedCategory.image(), List.of());
    }

    @Override
    public CategoryResponseDto updateCategory(CategoryId id, CategoryRequestDto dto) {
        return null;
    }

    @Override
    public List<CategoryResponseDto> getAllCategories() {
        return List.of();
    }

    @Override
    public CategoryResponseDto getCategoryById(CategoryId id) {
        return null;
    }

    @Override
    public void deleteCategory(CategoryId id) {

    }
}
