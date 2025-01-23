package com.wora.restaurant.menu.application.service.impl;

import com.wora.restaurant.common.application.ApplicationService;
import com.wora.restaurant.common.exception.ResourceNotFoundException;
import com.wora.restaurant.menu.application.dto.request.CategoryRequestDto;
import com.wora.restaurant.menu.application.dto.response.CategoryResponseDto;
import com.wora.restaurant.menu.application.mapper.CategoryMapper;
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
    private final CategoryMapper mapper;
    private final FileUploader fileUploader;

    @Override
    public CategoryResponseDto createCategory(CategoryRequestDto dto) {
        final String imageUrl = fileUploader.upload(dto.image());
        final Category category = Category.create(dto.name(), imageUrl);
        Category savedCategory = repository.save(category);

        return mapper.toResponseDto(savedCategory);
    }

    @Override
    public CategoryResponseDto updateCategory(CategoryId id, CategoryRequestDto dto) {
        final Category category = repository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Category", id.value()));

        final String imageUrl = fileUploader.upload(dto.image());
        category.setImage(imageUrl)
                .setName(dto.name());

        Category savedCategory = repository.save(category);
        return mapper.toResponseDto(savedCategory);
    }

    @Override
    public List<CategoryResponseDto> getAllCategories() {
        return repository.findAll()
                .stream().map(mapper::toResponseDto)
                .toList();
    }

    @Override
    public CategoryResponseDto getCategoryById(CategoryId id) {
        return repository.findById(id)
                .map(mapper::toResponseDto)
                .orElseThrow(() -> new ResourceNotFoundException("Category", id.value()));
    }

    @Override
    public void deleteCategory(CategoryId id) {
        if (!repository.existsById(id))
            throw new ResourceNotFoundException("Category", id.value());

        repository.deleteById(id);
    }

    @Override
    public Category findEntityById(CategoryId id) {
        return repository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Category", id.value()));
    }
}