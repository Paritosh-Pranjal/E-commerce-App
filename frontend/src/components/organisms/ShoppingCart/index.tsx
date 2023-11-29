import React, { useEffect, useState } from 'react';
import ItemCard from '../../molecules/ItemCard';
import { getItems, getItemsById } from '../../../services/calls';
import {
  Badge,
  BadgeProps,
  Box,
  IconButton,
  Modal,
  styled,
} from '@mui/material';
import Typography from '../../atoms/Typography';
import TextField from '../../atoms/Textfield';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));

const CustomStyledHeaderBox = styled(Box)({
  display: 'flex',
  flexDirection: 'row',
  gap: '5rem',
  padding: '20px',
  width: '80%',
  justifyContent: 'space-between',
});

const CustomStyledItemBox = styled(Box)({
    display: 'flex',
    flexDirection:'row' ,
    gap:'20px',
    padding: '10px',
    width: '80%',
    justifyContent: 'space-between',
  });

  
const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const ShoppingCart = () => {
  const [items, setItems] = useState([]);
  const [cardItem, setCartItem] = useState([]);
  const [selectedItem, setSelectedItem] = useState(0);
  const [searchInput, setSearchInput] = useState('');
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await getItems();
        setItems(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchItems();
  }, []);

  const handleItemButton = async (id: number) => {
    try {
      const response = await getItemsById(id);
      setCartItem((prevCardItem) => [...prevCardItem, response.data]); // important line
      setSelectedItem(cardItem.length + 1);
    } catch (error) {
      console.log(error);
    }
  };

  const filteredItems = items.filter((item) =>
    item.itemName.toLowerCase().includes(searchInput.toLowerCase())
  );

  return (
    <>
      <CustomStyledHeaderBox>
        <Typography variant="h4">E-Commerce App</Typography>
        <TextField
          type="Search"
          placeholder="Search Items"
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <IconButton aria-label="cart" onClick={handleOpen}>
          <StyledBadge badgeContent={selectedItem} color="secondary">
            <ShoppingCartIcon />
          </StyledBadge>
        </IconButton>
      </CustomStyledHeaderBox>

      <CustomStyledItemBox>
        {filteredItems.map((item) => (
          <ItemCard
            key={item.id}
            img={item.src}
            itemName={item.itemName}
            itemPrice={`Price:  ${item.Price}`}
            onClick={() => handleItemButton(item.id)} // most inmportant line
          />
        ))}
      </CustomStyledItemBox>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {cardItem.map((item) => {
            return (
              <Box display={'flex'} flexDirection={'row'} gap="20px">
                <Typography>{`Item: ${item.itemName}`}</Typography>
                <Typography>{`Price: ${item.Price}`}</Typography>
              </Box>
            );
          })}
        </Box>
      </Modal>
    </>
  );
};

export default ShoppingCart;
