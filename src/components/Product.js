import React, { Component } from "react";
import formatCurrency from "../util";
import Fade from "react-reveal/Fade";
import Modal from "react-modal";
import Zoom from "react-reveal/Zoom";

export default class Product extends Component {
  state= {
    product:null,
  }
  openModal = (product) => {
    this.setState({product});
  }
  closeModal = ()=> {
    this.setState({ product:null});
  }
  render() {
    const {product} = this.state;
    return (
      <div>
        <Fade bottom cascade={true}>
        <ul className="products">
          {this.props.products.map((product) => (
            <li key={product._id}>
              <div className="product">
                <a href={"#" + product._id} onClick={() => this.openModal(product)}>
                  <img src={product.image} alt={product.title}></img>
                  <p>{product.title}</p>
                </a>
                <div className="product-price">
                  <div>{formatCurrency(product.price)}</div>
                  <button className="button primary" onClick={() => this.props.addToCart(product)}>Add To Cart</button>
                </div>
              </div>
            </li>
          ))}
        </ul>
        </Fade>

        {
          product && (
          <Modal isOpen={true} onRequestClose={this.closeModal}>
            <Zoom>
              <div>
              <button className="close-modal" onClick={this.closeModal}>X</button>
              <div className="product-details">
                <img src={product.image} alt={product.name}/>
                <div className="product-details-description">
                  <p>
                   <strong>{product.title}</strong> 
                   <p>{product.description}</p>
                   <p>Avlaiable sizes : {" "} 
                     {product.availableSizes.map(x =>(<span>
                     {" "}
                     <button className="button">{x}</button>

                   </span>))}</p>
                  </p>
                 <div className="product-price">
                    <div>  {product.price}</div>
                    <button className="button" onClick={ () => {
                      this.props.addToCart(product); 
                      this.closeModal()}}>Add to Cart</button>
                 </div>
                </div>
              </div>
              </div>
            </Zoom>
          </Modal>)
        }
      </div>
    );
  }
}
