package com.wora.restaurant.menu.domain.repository;

import com.wora.restaurant.menu.domain.entity.Category;
import com.wora.restaurant.menu.domain.vo.CategoryId;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CategoryRepository extends JpaRepository<Category, CategoryId> {
}
