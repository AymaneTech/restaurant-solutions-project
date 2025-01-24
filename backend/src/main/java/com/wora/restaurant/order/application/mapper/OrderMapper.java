package com.wora.restaurant.order.application.mapper;

import com.wora.restaurant.common.application.mapper.BaseMapper;
import com.wora.restaurant.order.application.dto.request.OrderRequestDto;
import com.wora.restaurant.order.application.dto.response.OrderResponseDto;
import com.wora.restaurant.order.domain.Order;
import com.wora.restaurant.order.domain.vo.TableId;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Named;

@Mapper(config = BaseMapper.class)
public interface OrderMapper extends BaseMapper<Order, OrderRequestDto, OrderResponseDto> {

    @Mapping(source = "tableId", target = "tableId", qualifiedByName = "mapToTableId")
    Order toEntity(OrderRequestDto dto);

    @Named("mapToTableId")
    default TableId mapToTableId(Long tableId) {
        return TableId.of(tableId);
    }
}
