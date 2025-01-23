package com.wora.restaurant.common.application.mapper;

import org.mapstruct.MapperConfig;
import org.mapstruct.MappingTarget;
import org.mapstruct.ReportingPolicy;

@MapperConfig(
        componentModel = "spring",
        unmappedTargetPolicy = ReportingPolicy.IGNORE,
        uses = {IdValueObjectMapper.class}
)
public interface BaseMapper<E, R, S> {
    E toEntity(R dto);

    void updateEntity(@MappingTarget E entity, R request);

    S toResponseDto(E entity);
}

