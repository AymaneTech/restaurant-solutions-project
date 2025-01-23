package com.wora.restaurant.order.infrastructure.web;

import com.wora.restaurant.order.application.dto.request.OrderRequestDto;
import com.wora.restaurant.order.application.dto.response.OrderResponseDto;
import com.wora.restaurant.order.application.service.OrderService;
import com.wora.restaurant.order.domain.vo.OrderId;
import com.wora.restaurant.order.domain.vo.OrderStatus;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.List;

@RestController
@RequestMapping("/api/v1/orders")
@RequiredArgsConstructor
public class OrderController {

    private final OrderService orderService;

    @PostMapping
    public ResponseEntity<OrderResponseDto> createOrder(@RequestBody OrderRequestDto dto) {
        OrderResponseDto order = orderService.createOrder(dto);
        return ResponseEntity.created(getUri(order))
                .body(order);
    }

    @GetMapping("/{id}")
    public ResponseEntity<OrderResponseDto> getOrderById(@PathVariable Long id) {
        return ResponseEntity.ok(orderService.getOrderById(OrderId.of(id)));
    }

    @GetMapping
    public ResponseEntity<List<OrderResponseDto>> getAllOrders() {
        return ResponseEntity.ok(orderService.getAllOrders());
    }

    @GetMapping("/status/{status}")
    public ResponseEntity<List<OrderResponseDto>> getOrdersByStatus(@PathVariable OrderStatus status) {
        return ResponseEntity.ok(orderService.getOrdersByStatus(status));
    }

    @PatchMapping("/{id}/cancel")
    public ResponseEntity<Void> cancelOrder(@PathVariable Long id) {
        orderService.cancelOrder(OrderId.of(id));
        return ResponseEntity.noContent().build();
    }

    @PatchMapping("/{id}/cook")
    public ResponseEntity<Void> cookOrder(@PathVariable Long id) {
        orderService.cookOrder(OrderId.of(id));
        return ResponseEntity.noContent().build();
    }

    @PatchMapping("/{id}/progress")
    public ResponseEntity<Void> progressOrder(@PathVariable Long id) {
        orderService.progressOrder(OrderId.of(id));
        return ResponseEntity.noContent().build();
    }

    @PatchMapping("/{id}/serve")
    public ResponseEntity<Void> serveOrder(@PathVariable Long id) {
        orderService.serveOrder(OrderId.of(id));
        return ResponseEntity.noContent().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteOrder(@PathVariable Long id) {
        orderService.deleteOrder(OrderId.of(id));
        return ResponseEntity.noContent().build();
    }

    private URI getUri(OrderResponseDto order) {
        return URI.create("/api/v1/orders/" + order.id());
    }
}