import { Card, CardActions, CardContent, CardMedia } from '@mui/material';
import { styled } from '@mui/system';
import React from 'react';
import Button from '../../atoms/Button';
import Typography from '../../atoms/Typography';

interface ItemCardProps {
  img?: string;
  itemName: string;
  itemPrice: string;
  onClick?: (e:any) => void;
}

const CustomStyledCard = styled(Card)({
  border: '1px solid black',
  padding: '10px',
  width: '100%',
});

const ItemCard = (props: ItemCardProps) => {
  return (
    <div>
      <CustomStyledCard>
        <CardMedia sx={{ height: 140 }} image={props.img} />
        <CardContent>
          <Typography>{props.itemName}</Typography>
          <Typography>{props.itemPrice}</Typography>
        </CardContent>
        <CardActions>
          <Button
            style={{
              backgroundColor: 'blue',
              color: 'white'
            }}
            onClick={props.onClick}
          >
            Add
          </Button>
        </CardActions>
      </CustomStyledCard>
    </div>
  );
};

export default ItemCard;
