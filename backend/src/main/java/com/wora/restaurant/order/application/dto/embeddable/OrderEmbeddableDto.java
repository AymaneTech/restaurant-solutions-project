package com.wora.restaurant.order.application.dto.embeddable;

import com.wora.restaurant.order.domain.vo.OrderStatus;
import com.wora.restaurant.order.domain.vo.TableId;

import java.time.Duration;
import java.time.LocalDateTime;

public record OrderEmbeddableDto(
        Long id,
        TableId tableId,
        LocalDateTime orderDate,
        OrderStatus status,
        Duration estimatedCookingTime
) {
}
