package com.wora.restaurant.common.exception;

import java.time.LocalDateTime;

public record ErrorResponse(int code, LocalDateTime timestamp, String message, String description, Object errors) {
}

