package com.wora.restaurant.order.application.dto.request;

import jakarta.validation.constraints.NotNull;

import java.time.LocalDateTime;
import java.util.List;

public record OrderRequestDto(
        @NotNull Long tableId,
        @NotNull LocalDateTime orderDate,
        List<OrderItemRequestDto> items
) {
}
