package com.wora.restaurant.order.domain;


import com.wora.restaurant.order.domain.vo.OrderId;
import com.wora.restaurant.order.domain.vo.OrderStatus;
import com.wora.restaurant.order.domain.vo.TableId;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import java.time.Duration;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "orders")

@Getter
@Setter
@NoArgsConstructor
@ToString
public class Order {

    @EmbeddedId
    @AttributeOverride(name = "value", column = @Column(name = "id"))
    private OrderId id;

    @Embedded
    private TableId tableId;

    private LocalDateTime orderDate;

    @Enumerated(EnumType.STRING)
    private OrderStatus status;

    private Duration estimatedCookingTime;

    @OneToMany(mappedBy = "order", fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    private List<OrderItem> items = new ArrayList<>();

    public Order cancleOrder() {
        this.status = OrderStatus.CANCELLED;
        return this;
    }

    public Order serveOrder() {
        this.status = OrderStatus.SERVED;
        return this;
    }

    public Order cookOrder() {
        this.status = OrderStatus.COOKED;
        return this;
    }

    public Order inProgressOrder() {
        this.status = OrderStatus.IN_PROGRESS;
        return this;
    }

    public Order pendingOrder() {
        this.status = OrderStatus.PENDING;
        return this;
    }

    public void addItem(OrderItem orderItem) {
        this.items.add(orderItem);
    }
}
