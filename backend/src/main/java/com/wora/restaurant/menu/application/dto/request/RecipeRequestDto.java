package com.wora.restaurant.menu.application.dto.request;

import com.wora.restaurant.common.application.validation.ReferenceExists;
import com.wora.restaurant.common.application.validation.UniqueField;
import com.wora.restaurant.menu.domain.entity.Category;
import com.wora.restaurant.menu.domain.entity.Recipe;
import com.wora.restaurant.menu.domain.vo.CategoryId;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import org.springframework.web.multipart.MultipartFile;

import java.math.BigDecimal;

public record RecipeRequestDto(@NotBlank
                               @UniqueField(entityClass = Recipe.class, fieldName = "name", message = "category name must not be null")
                               String name,
                               @NotBlank String description,
                               @NotBlank BigDecimal price,
                               @NotBlank MultipartFile image,
                               boolean available,
                               @NotNull
                               @ReferenceExists(entityClass = Category.class, idClass = CategoryId.class, message = "category must exist")
                               Long categoryId
) {
}
