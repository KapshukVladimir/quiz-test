import React, {Component} from "react";
import classes from './Layout.module.css'
import MenuToogle from "../../components/Navigation/MenuToogle/MenuToogle";
import Drawer from "../../components/Navigation/Drawer/Drawer";

class Layout extends Component {

  state = {
    menu: false
  }
  toogleMenuHandler = () => {
    this.setState({
      menu: !this.state.menu
    })
  }
  menuCloseHandler = () => {
    this.setState({
      menu: false
    })
  }

  render() {
    return (
      <div className={classes.Layout}>
      <Drawer
    isOpen={this.state.menu}
    onClose={this.menuCloseHandler}
    />
    <MenuToogle
      onToogle={this.toogleMenuHandler}
      isOpen={this.state.menu}
    />
    <main>
    {this.props.children}
  </main>
  </div>
    )
  }
}

export default Layout
