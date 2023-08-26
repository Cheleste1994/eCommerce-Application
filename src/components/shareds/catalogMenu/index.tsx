import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import {
  getClientCategories,
  getClientCategoriesWithId,
  getClientProducts,
  selectCategories,
} from '../../../store/slices/products.slice';

export default function CatalogMenu() {
  const dispatch = useAppDispatch();
  const categories = useAppSelector(selectCategories);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const navigate = useNavigate();

  const handleClose = (ID?: string) => {
    if (ID) {
      dispatch(getClientCategoriesWithId(ID));
    } else {
      dispatch(getClientProducts());
    }
    setAnchorEl(null);
    navigate('/catalog');
  };

  useEffect(() => {
    if (!categories) {
      dispatch(getClientCategories());
    }
  }, [dispatch, categories]);

  const categoriesArray = categories?.results.map((cat) => (
    <MenuItem key={cat.id} onClick={() => handleClose(cat.id)}>
      {cat.name['en-US']}
    </MenuItem>
  ));

  return (
    <div className="header__catalog">
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        Menu
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={() => handleClose()}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        {categoriesArray}
        <MenuItem onClick={() => handleClose()}>All products</MenuItem>
      </Menu>
    </div>
  );
}
