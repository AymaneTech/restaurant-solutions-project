package com.wora.restaurant.menu.infrastructure.web;

import com.wora.restaurant.menu.application.dto.request.CategoryRequestDto;
import com.wora.restaurant.menu.application.dto.response.CategoryResponseDto;
import com.wora.restaurant.menu.application.service.CategoryService;
import com.wora.restaurant.menu.domain.vo.CategoryId;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.List;

@RestController
@RequestMapping("/api/v1/categories")
@RequiredArgsConstructor
public class CategoryController {
    private final CategoryService service;

    @GetMapping
    public ResponseEntity<List<CategoryResponseDto>> getAllCategories() {
        return ResponseEntity.ok(service.getAllCategories());
    }

    @GetMapping("/{id}")
    public ResponseEntity<CategoryResponseDto> getCategoryById(@PathVariable Long id) {
        return ResponseEntity.ok(service.getCategoryById(CategoryId.of(id)));
    }

    @PostMapping
    public ResponseEntity<CategoryResponseDto> saveCategory(@ModelAttribute @Valid CategoryRequestDto request) {
        CategoryResponseDto category = service.createCategory(request);

        return ResponseEntity.created(getUri(category))
                .body(category);
    }

    @PutMapping("/{id}")
    public ResponseEntity<CategoryResponseDto> updateCategory(@PathVariable Long id, @ModelAttribute @Valid CategoryRequestDto request) {
        CategoryResponseDto category = service.updateCategory(CategoryId.of(id), request);

        return ResponseEntity.ok(category);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteCategory(@PathVariable Long id) {
        service.deleteCategory(CategoryId.of(id));

        return ResponseEntity.noContent().build();
    }

    private URI getUri(CategoryResponseDto category) {
        return URI.create("/api/v1/categories/" + category.id());
    }
}
