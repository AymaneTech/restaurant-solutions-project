package com.wora.restaurant.menu.domain.vo;

import jakarta.persistence.GeneratedValue;

public record CategoryId(@GeneratedValue Long value) {
    public static CategoryId of(Long id) {
        return new CategoryId(id);
    }
}
