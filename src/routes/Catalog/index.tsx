import { Button } from 'antd';
import React, { useEffect } from 'react';
import ActionAreaCard from '../../components/shareds/cards';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import {
  getClientCategories,
  getClientProducts,
  selectAllProducts,
  selectCategoryProducts,
} from '../../store/slices/products.slice';
import '../../styles/catalog.scss';

const Catalog = () => {
  const dispatch = useAppDispatch();
  const productsAll = useAppSelector(selectAllProducts);
  const productsCategory = useAppSelector(selectCategoryProducts);

  useEffect(() => {
    if (!productsAll && !productsCategory) {
      dispatch(getClientProducts());
    }
  }, [dispatch, productsAll, productsCategory]);

  const cardAllArray = productsAll?.results
    ? Array.from({ length: productsAll.count || 0 }, (_, index) => (
        <ActionAreaCard
          name={productsAll.results[index].masterData.current.name['en-US'] || ''}
          img={productsAll.results[index].masterData.staged.masterVariant.images?.[0]?.url || ''}
          desc={productsAll.results[index].masterData.current.description?.['en-US'] || ''}
          key={`${index}`}
        />
      ))
    : null;
  const cardCategoriesArray = productsCategory?.results
    ? Array.from({ length: productsCategory.count || 0 }, (_, index) => (
        <ActionAreaCard
          name={productsCategory.results[index].name['en-US'] || ''}
          img={productsCategory.results[index].masterVariant.images?.[0]?.url || ''}
          desc={productsCategory.results[index].description?.['en-US'] || ''}
          key={`${index}`}
        />
      ))
    : null;

  return (
    <div className="catalog">
      <div className="catalog__menu">
        <Button
          onClick={() => {
            dispatch(getClientCategories());
          }}
        >
          categories
        </Button>
      </div>
      <div className="catalog__product">{cardAllArray || cardCategoriesArray}</div>
    </div>
  );
};

export default Catalog;
