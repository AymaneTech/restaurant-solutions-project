package com.wora.restaurant.order.domain;

import com.wora.restaurant.menu.domain.entity.Recipe;
import com.wora.restaurant.order.domain.vo.OrderItemId;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Map;

@Entity
@Table(name = "order_items")

@Getter
@Setter
@NoArgsConstructor
public class OrderItem {

    @EmbeddedId
    private OrderItemId id;

    @ManyToOne
    @MapsId("orderId")
    private Order order;

    @ManyToOne
    @MapsId("recipeId")
    private Recipe recipe;

    private int quantity;

    public OrderItem(Recipe recipe, Order order, int quantity) {
        this.id = new OrderItemId(order.getId(), recipe.getId());
        this.recipe = recipe;
        this.order = order;
        this.quantity = quantity;
    }
}
