import React,{Component}from "react";
import Link from "next/link";
import img from '../../../public/images/product-img-1.jpg';
import cart from '../../../public/images/icons8-shopping-cart-40.png';
import cartFill from '../../../public/images/alter.png';
export default class Product extends Component{
    state = {
        added:false,
    }
    fillCart = function (){
        this.setState({
            added:true,
        })
    }
    componentDidMount() {

        var productObj = {
            "id":this.props.id,
            "title":this.props.pr_name,
            "price":this.props.price,
            "description":this.props.desc,
            "image":this.props.img,
        }
        if(localStorage.cartArr){
            var cartCond = false;
            var cartObj = JSON.parse(localStorage.cartArr);
            for (let i=0; i < cartObj.length; i++){
                if (cartObj[i]['id'] == Number(productObj['id'])){
                    cartCond = true;
                    console.log('hhdh')
                }else{
                    console.log("papapa")
                }
            }
            if(!cartCond){

            }else{
                this.setState({
                    added:true
                })
            }
        }else{
            localStorage.cartArr = []
        }



    }

    addCart = function(e){

        var productObj = {
            "id":this.props.id,
            "title":this.props.pr_name,
            "price":this.props.price,
            "description":this.props.desc,
            "image":this.props.img,
        }
        // if(e.target.className = "notFilled"){
        //     e.target.nextSibling.style.display = "inline-block";
        //     e.target.style.display = "none";
        // }

        if(localStorage.cartArr){

            var cartCond = false;
            var cartObj = JSON.parse(localStorage.cartArr);
            for (let i=0; i < cartObj.length; i++){
                if (cartObj[i]['id'] == Number(productObj['id'])){
                    cartCond = true;
                    console.log('hhdh')
                }else{
                    console.log("papapa")
                }
            }
            if(!cartCond){
                var cart = JSON.parse(localStorage.cartArr);
                cart.unshift(productObj)
                localStorage.cartArr = JSON.stringify(cart);
            }

        }else{
            var cart = [];
            cart.unshift(productObj)
            localStorage.cartArr = JSON.stringify(cart);
        }
        // console.log(JSON.parse(localStorage.cartArr))
        // localStorage.cartArr = [""]
        var cartNumber = document.getElementsByClassName("cart_num")[0];
        cartNumber.innerHTML =  Number(JSON.parse(localStorage.cartArr).length)
    }
    render(){
        return(
            <div className={'product'} id={this.props.id}>
                <div className={'imgCont flex'}>
                    <Link href={'/product/'+this.props.id}>
                        <img src={this.props.img} />
                    </Link>
                    <button className={"add_to_cart"} onClick={this.addCart.bind(this)}>
                        {!this.state.added ?
                            <img src={cart} className={"notFilled"} onClick={this.fillCart.bind(this)}/> : <img src={cartFill}  />
                        }

                    </button>
                </div>
                <Link href={"/product/"+this.props.id}>
                    <span className={"productName"}>
                        {this.props.pr_name}
                    </span>
                </Link>
                <span className={"price"}>
                    {this.props.price}$
                </span>
                <p className={"desc"}>
                    {this.props.desc}
                </p>
                <style jsx lang={"scss"}>
                    {`
                      .product {
                        border: 1px solid #ededed;
                        text-align: center;
                        width: 270px;
                        margin-right: 5px;
                        margin-top: 30px;
                        color: #4a4642;
                        @media(max-width:660px){
                        width: 100%;
                        }
                        box-shadow: 0px 0px 2em rgba(#000, .1);
                        .imgCont {
                          background: #fff;
                          height: 250px;
                          padding: 20px;
                          border-bottom: 1px solid #ededed;
                          position: relative;
                          cursor: pointer;
                          align-items: center;
                          justify-content: center;
                          .add_to_cart {
                            position: absolute;
                            top: 10px;
                            right: 10px;
                            background: transparent;
                            border: 0px;
                            outline: 0px;
                            cursor: pointer;
                            .hide{
                            display: none;
                            }
                            img {
                              width: 30px;
                            }

                            &:focus {
                              outline: 0px;
                            }

                          }

                          img {
                            width: 100%;
                            max-height: 100%;
                            object-fit: contain;
                          }
                        }

                        .productName {
                          padding: 5px 10px;
                          display: block;
                          margin-top: 10px;
                          cursor: pointer;
                        }

                        .price {
                          margin-bottom: 0px;
                          display: block;
                          color: #bf8c3d;
                          font-size:20px;
                        }
                        .desc{
                        color: #aaa;
                        padding: 10px;
                        margin: 0px;
                        padding-top: 5px;
                        font-weight: lighter;
                        line-height: 30px;
                        height: 100px;
                        overflow: hidden;
                        }
                      }
                    `}
                </style>
            </div>
        )
    }
}