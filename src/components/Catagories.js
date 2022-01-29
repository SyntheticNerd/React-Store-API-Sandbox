import React from "react";
import { getProducts } from "../utils/utils";

class Catagories extends React.Component {
  constructor(props) {
    super(props);
    this.state = { categories: [], products: [] };
  }
  componentDidMount() {
    getProducts("products/categories").then((res) =>
      this.setState({ categories: res })
    );
  }
  onClick = (category) => {
    let url = `products/category/${category}`;
    this.props.setUrl(url);
  };

  getPicture = (category) => {
    getProducts(`products/category/${category}`);
  };
  render() {
    return (
      <>
        <div style={{ display: "flex", justifyContent: "center" }}>
          {this.state.categories.map((category, index) => (
            <div key={index}>
              <button
                style={{ margin: "16px 8px" }}
                onClick={() => this.onClick(category)}
              >
                {category}
              </button>
            </div>
          ))}
        </div>
      </>
    );
  }
}

export default Catagories;
