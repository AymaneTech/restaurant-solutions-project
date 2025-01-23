package com.wora.restaurant.menu.domain.entity;

import com.wora.restaurant.menu.domain.vo.CategoryId;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Entity
@Table(name = "categories")

@Getter
@Setter
@NoArgsConstructor
public class Category {

    @EmbeddedId
    @AttributeOverride(name = "value", column = @Column(name = "id"))
    private CategoryId id;

    private String name;

    private String image;

    @OneToMany(mappedBy = "category")
    private List<Recipe> recipes;

    Category(String name, String image) {
        this.name = name;
        this.image = image;
    }

    public static Category create(String name, String image) {
        return new Category(name, image);
    }
}
