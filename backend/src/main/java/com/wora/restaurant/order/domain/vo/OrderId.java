package com.wora.restaurant.order.domain.vo;

import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;

@Embeddable
public record OrderId(@Column(name = "order_id") Long value) {

    public static OrderId of(Long value) {
        return new OrderId(value);
    }
}
