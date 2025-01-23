package com.wora.restaurant.order.domain.vo;

import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;

@Embeddable
public record TableId(@Column(name = "table_id") Long value) {

    public static TableId of(Long value) {
        return new TableId(value);
    }
}
