package com.wora.restaurant.menu.domain.entity;

import com.wora.restaurant.menu.domain.vo.RecipeId;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.math.BigDecimal;

@Entity
@Table(name = "recipes")

@Getter
@Setter
@NoArgsConstructor
public class Recipe {

    @EmbeddedId
    @AttributeOverride(name = "value", column = @Column(name = "id"))
    private RecipeId id;

    private String name;

    private String description;

    private BigDecimal price;

    private String image;

    private boolean available;

    @ManyToOne
    private Category category;
}
