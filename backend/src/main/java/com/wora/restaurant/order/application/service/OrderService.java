package com.wora.restaurant.order.application.service;

import com.wora.restaurant.order.application.dto.request.OrderRequestDto;
import com.wora.restaurant.order.application.dto.response.OrderResponseDto;
import com.wora.restaurant.order.domain.vo.OrderId;
import com.wora.restaurant.order.domain.vo.OrderStatus;

import java.util.List;

public interface OrderService {

    OrderResponseDto createOrder(OrderRequestDto dto);

    void cancelOrder(OrderId id);

    void serveOrder(OrderId id);


    void cookOrder(OrderId id);

    void progressOrder(OrderId id);

    List<OrderResponseDto> getAllOrders();

    OrderResponseDto getOrderById(OrderId id);

    void deleteOrder(OrderId id);

    List<OrderResponseDto> getOrdersByStatus(OrderStatus status);
}
