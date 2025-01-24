package com.wora.restaurant.menu.application.mapper;

import com.wora.restaurant.common.application.mapper.BaseMapper;
import com.wora.restaurant.menu.application.dto.request.RecipeRequestDto;
import com.wora.restaurant.menu.application.dto.response.RecipeResponseDto;
import com.wora.restaurant.menu.domain.entity.Recipe;
import org.mapstruct.Mapper;
import org.mapstruct.MappingTarget;

@Mapper(config = BaseMapper.class)
public interface RecipeMapper extends BaseMapper<Recipe, RecipeRequestDto, RecipeResponseDto> {

    void updateRecipe(@MappingTarget Recipe recipe, RecipeRequestDto dto);
}
