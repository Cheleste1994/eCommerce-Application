import { CategoryPagedQueryResponse } from '@commercetools/platform-sdk';

const filterCategories = (categories: CategoryPagedQueryResponse) => {
  const parents = categories.results.filter((cat) => !cat.ancestors.length);
  const sortCategories = categories.results.sort((x, y) => y.ancestors.length - x.ancestors.length);
  const par = sortCategories.map((cat) => cat.ancestors);

  console.log(parents);
  console.log(par);
};

export default filterCategories;
