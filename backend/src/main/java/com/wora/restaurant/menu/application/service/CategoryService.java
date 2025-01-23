package com.wora.restaurant.menu.application.service;

import com.wora.restaurant.menu.application.dto.request.CategoryRequestDto;
import com.wora.restaurant.menu.application.dto.response.CategoryResponseDto;
import com.wora.restaurant.menu.domain.vo.CategoryId;

import java.util.List;

public interface CategoryService {
    CategoryResponseDto createCategory(CategoryRequestDto dto);

    CategoryResponseDto updateCategory(CategoryId id, CategoryRequestDto dto);

    List<CategoryResponseDto> getAllCategories();

    CategoryResponseDto getCategoryById(CategoryId id);

    void deleteCategory(CategoryId id);
}
