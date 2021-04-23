import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});
export const CatalogItem = (itemsToDrow) => {
  const items = itemsToDrow.itemsToDrow;
  const classes = useStyles();
  return (
    <>
      {items.map((element) => (
        <div>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Contemplative Reptile"
                height="500px"
                image={element.image_url}
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {element.name}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {element.description}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions></CardActions>
          </Card>
        </div>
      ))}
    </>
  );
};
