import React from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActions,
} from '@mui/material';

const SkCard = ({ title, image, children, actions, sx, onClick }) => {
  return (
    <Card
      onClick={onClick} 
      sx={{
        maxWidth: 300,
        margin: 2,
        borderRadius: 6,
        cursor: onClick ? "pointer" : "default", 
        ...sx,
      }}
    >
      {image && (
        <CardMedia component="img" height="140" image={image} alt={title} />
      )}
      <CardContent>
        {title && (
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
        )}
        <Typography variant="body2" color="text.secondary">
          {children}
        </Typography>
      </CardContent>
      {actions && <CardActions>{actions}</CardActions>}
    </Card>
  );
};

export default SkCard;
