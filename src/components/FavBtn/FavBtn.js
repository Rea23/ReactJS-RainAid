import React, { Component } from "react";
import "./FavBtn.css";

export class FavBtn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      status: this.props.status
    };
  }
  ChangeFav(prod) {
    this.setState({status: !this.state.status});
    if(this.state.status)
      this.props.favAdd(prod);
    else
      this.props.favRmv(prod.id);
  };
  render() {
    let content = "";
    if (!this.state.status)
      content = (
        <i onClick={() => this.ChangeFav(this.props.obj)} class="material-icons" title="Favourite" id="fav-btn1">
          favorite
        </i>
      );
    else
      content = (
        <i onClick={() => this.ChangeFav(this.props.obj)} class="material-icons" title="Favourite" id="fav-btn2">
          favorite
        </i>
      );
    return <div id="fav-div">{content}</div>;
  }
}

export default FavBtn;
