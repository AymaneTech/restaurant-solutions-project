package com.wora.restaurant.menu.domain.entity;

import com.wora.restaurant.menu.domain.vo.RecipeId;
import com.wora.restaurant.order.domain.OrderItem;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

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


    @OneToMany(mappedBy = "recipe", fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    private List<OrderItem> items = new ArrayList<>();

    public void toggleAvailability() {
        this.available = !this.available;
    }
}
