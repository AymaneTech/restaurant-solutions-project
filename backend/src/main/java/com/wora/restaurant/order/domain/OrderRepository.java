package com.wora.restaurant.order.domain;

import com.wora.restaurant.order.domain.vo.OrderId;
import com.wora.restaurant.order.domain.vo.OrderStatus;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface OrderRepository extends JpaRepository<Order, OrderId> {
    List<Order> findAllByStatus(OrderStatus status);
}
