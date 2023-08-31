import "./_products.scss";

const Products = () =>{
    const productData = [
        {
            pName: "Jaquetas",
            price: 42,
            img: "shop-1.jpg"
        },
        {
            pName: "Cartera",
            price: 45,
            img: "shop-2.jpg"
        },
        {
            pName: "Vestido",
            price: 38,
            img: "shop-3.jpg"
        },
        {
            pName: "Mezclilla",
            price: 45,
            img: "shop-4.jpg"
        },
        {
            pName: "Botas",
            price: 45,
            img: "shop-5.jpg"
        },
        {
            pName: "Bolsas",
            price: 45,
            img: "shop-6.jpg"
        }
    ]

    return(
        <div className="products-container">
          {
            productData.map((product,index)=>{
                return(
                    <div className="mx-5 p-3 col-lg-3 product-card">
                        <div className="product-image-container">
                            <img src={require("../../assets/images/ProductImages/"+product.img)} />
                        </div>

                        <div className="product-info">
                            <h5><a href="#">{product.pName}</a></h5>
                            <p className="product-price"> ${product.price} </p>
                            <div className="product-rating">
                                <i className="fa fa-star"/>
                                <i className="fa fa-star"/>
                                <i className="fa fa-star"/>
                                <i className="fa fa-star"/>
                                <i className="fa fa-star"/>
                            </div>

                        </div>
                    </div>
                )
            })
          }
            
        </div>
    )
}

export default Products;