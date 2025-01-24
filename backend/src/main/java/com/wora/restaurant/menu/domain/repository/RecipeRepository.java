package com.wora.restaurant.menu.domain.repository;

import com.wora.restaurant.menu.domain.entity.Recipe;
import com.wora.restaurant.menu.domain.vo.RecipeId;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface RecipeRepository extends JpaRepository<Recipe, RecipeId> {

    List<Recipe> findAllByAvailableTrue();
}
