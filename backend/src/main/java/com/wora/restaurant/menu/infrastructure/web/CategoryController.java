package com.wora.restaurant.menu.infrastructure.web;

import com.wora.restaurant.menu.application.dto.request.CategoryRequestDto;
import com.wora.restaurant.menu.application.dto.response.CategoryResponseDto;
import com.wora.restaurant.menu.application.service.CategoryService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.net.URI;

@RestController
@RequestMapping("/api/v1/categories")
@RequiredArgsConstructor
public class CategoryController {
    private final CategoryService service;

    @PostMapping
    public ResponseEntity<CategoryResponseDto> saveCategory(@ModelAttribute @Valid CategoryRequestDto request) {
        CategoryResponseDto category = service.createCategory(request);

        return ResponseEntity.created(getUri(category))
                .body(category);
    }

    private URI getUri(CategoryResponseDto category) {
        return URI.create("/api/v1/categories/" + category.id());
    }
}
