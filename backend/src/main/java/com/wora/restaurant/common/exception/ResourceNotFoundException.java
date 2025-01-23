package com.wora.restaurant.common.exception;

public class ResourceNotFoundException extends RuntimeException {
    public ResourceNotFoundException(String entity, Long value) {
        super("Resource " + entity + " with value " + value + " not found");
    }
}
