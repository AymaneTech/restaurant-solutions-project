package com.wora.restaurant.menu.infrastructure.web;

import com.wora.restaurant.menu.application.dto.request.RecipeRequestDto;
import com.wora.restaurant.menu.application.dto.response.RecipeResponseDto;
import com.wora.restaurant.menu.application.service.RecipeService;
import com.wora.restaurant.menu.domain.vo.RecipeId;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.List;

@RestController
@RequestMapping("/api/v1/recipes")
@RequiredArgsConstructor
public class RecipeController {

    private final RecipeService service;

    @GetMapping
    public ResponseEntity<List<RecipeResponseDto>> getRecipes() {
        return ResponseEntity.ok(service.getAllRecipes());
    }

    @GetMapping("/available")
    public ResponseEntity<List<RecipeResponseDto>> getAvailableRecipes() {
        return ResponseEntity.ok(service.getAvailableRecipes());
    }

    @GetMapping("/{id}")
    public ResponseEntity<RecipeResponseDto> getRecipeById(@PathVariable Long id) {
        return ResponseEntity.ok(service.getRecipeById(RecipeId.of(id)));
    }

    @PostMapping
    public ResponseEntity<RecipeResponseDto> createRecipe(@RequestBody RecipeRequestDto dto) {
        RecipeResponseDto recipe = service.createRecipe(dto);
        return ResponseEntity.created(getUri(recipe))
                .body(recipe);
    }

    @PutMapping("/{id}")
    public ResponseEntity<RecipeResponseDto> updateRecipe(@PathVariable Long id, @RequestBody RecipeRequestDto dto) {
        return ResponseEntity.ok(service.updateRecipe(RecipeId.of(id), dto));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteRecipe(@PathVariable Long id) {
        service.deleteRecipe(RecipeId.of(id));
        return ResponseEntity.noContent().build();
    }

    private URI getUri(RecipeResponseDto recipe) {
        return URI.create("/api/v1/recipes/" + recipe.id());
    }
}
