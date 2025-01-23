package com.wora.restaurant.menu.application.mapper;

import com.wora.restaurant.common.application.mapper.BaseMapper;
import com.wora.restaurant.menu.application.dto.request.CategoryRequestDto;
import com.wora.restaurant.menu.application.dto.response.CategoryResponseDto;
import com.wora.restaurant.menu.domain.entity.Category;
import org.mapstruct.Mapper;

@Mapper(config = BaseMapper.class)
public interface CategoryMapper extends BaseMapper<Category, CategoryRequestDto, CategoryResponseDto> {

}
