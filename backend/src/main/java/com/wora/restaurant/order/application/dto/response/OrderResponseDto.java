package com.wora.restaurant.order.application.dto.response;

import com.wora.restaurant.order.domain.vo.OrderStatus;
import jakarta.validation.constraints.NotNull;

import java.time.Duration;
import java.time.LocalDateTime;
import java.util.List;

public record OrderResponseDto(
        @NotNull Long id,
        @NotNull Long tableId,
        @NotNull LocalDateTime orderDate,
        @NotNull OrderStatus status,
        @NotNull Duration estimatedCookingTime,
        @NotNull List<OrderItemResponseDto> items
) {
}
