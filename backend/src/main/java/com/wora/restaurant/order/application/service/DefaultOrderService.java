package com.wora.restaurant.order.application.service;

import com.wora.restaurant.common.exception.ResourceNotFoundException;
import com.wora.restaurant.menu.application.service.RecipeService;
import com.wora.restaurant.menu.domain.entity.Recipe;
import com.wora.restaurant.menu.domain.vo.RecipeId;
import com.wora.restaurant.order.application.dto.request.OrderItemRequestDto;
import com.wora.restaurant.order.application.dto.request.OrderRequestDto;
import com.wora.restaurant.order.application.dto.response.OrderResponseDto;
import com.wora.restaurant.order.application.mapper.OrderMapper;
import com.wora.restaurant.order.domain.Order;
import com.wora.restaurant.order.domain.OrderItem;
import com.wora.restaurant.order.domain.OrderRepository;
import com.wora.restaurant.order.domain.vo.OrderId;
import com.wora.restaurant.order.domain.vo.OrderStatus;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class DefaultOrderService implements OrderService {

    private final OrderRepository repository;
    private final OrderMapper mapper;
    private final RecipeService recipeService;

    @Override
    public OrderResponseDto createOrder(OrderRequestDto dto) {
        final Order order = mapper.toEntity(dto)
                .setStatus(OrderStatus.PENDING);

        dto.items()
                .stream().map(item -> getOrderItem(item, order))
                .forEach(order::addItem);

        Order savedOrder = repository.save(order);
        return mapper.toResponseDto(savedOrder);
    }

    private OrderItem getOrderItem(OrderItemRequestDto item, Order order) {
        final Recipe recipe = recipeService.getEntityById(new RecipeId(item.recipeId()));
        return new OrderItem(recipe, order, item.quantity());
    }

    @Override
    public void cancelOrder(OrderId id) {
        repository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("order", id.value()))
                .cancleOrder();
    }

    @Override
    public void cookOrder(OrderId id) {
        repository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("order", id.value()))
                .cookOrder();
    }

    @Override
    public void progressOrder(OrderId id) {
        repository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("order", id.value()))
                .inProgressOrder();
    }

    @Override
    public void serveOrder(OrderId id) {
        repository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("order", id.value()))
                .serveOrder();
    }

    @Override
    public List<OrderResponseDto> getAllOrders() {
        return repository.findAll().stream()
                .map(mapper::toResponseDto)
                .toList();
    }

    @Override
    public OrderResponseDto getOrderById(OrderId id) {
        return repository.findById(id)
                .map(mapper::toResponseDto)
                .orElseThrow(() -> new ResourceNotFoundException("order", id.value()));
    }

    @Override
    public void deleteOrder(OrderId id) {
        repository.deleteById(id);
    }

    @Override
    public List<OrderResponseDto> getOrdersByStatus(OrderStatus status) {
        return repository.findAllByStatus(status).stream()
                .map(mapper::toResponseDto)
                .toList();
    }
}