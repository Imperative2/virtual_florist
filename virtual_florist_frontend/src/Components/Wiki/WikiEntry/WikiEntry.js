import React, { Component } from "react";
import { makeStyles } from "@material-ui/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import styleClass from "./WikiEntry.module.css";

class WikiEntry extends Component {
  onClickHandler = () => {
    this.props.history.push("/wiki/" + this.props.id);
  };

  render() {
    const style = {
      maxWidth: 345,
      padding: 20,
      margin: 5
    };

    return (
      <Card style={style}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            height="140"
            image={this.props.mainPhoto}
            title={this.props.name}
            onClick={this.onClickHandler}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {this.props.name} - {this.props.latinName}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {this.props.shortDescription}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary" onClick={this.onClickHandler}>
            Learn More
          </Button>
        </CardActions>
      </Card>
    );
  }
}

export default WikiEntry;
