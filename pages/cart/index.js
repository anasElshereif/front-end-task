import React, {Component} from 'react';
import Link from "next/link";
import img from "../../public/images/product-img-1.jpg";
import {useEffect, useState} from 'react';
import Footer from '../../components/common/footer/footer';
import close from '../../public/images/icons8-macos-close-30.png';
export default function Cart(props) {
    const [noCart, setNocart] = useState(false);
    const [cartObj, setCartObj] = useState([]);
    const [quant, setQuant] = useState(1)
    useEffect(()=> {
        if(localStorage.cartArr){
            setCartObj(cartObj.concat(JSON.parse(localStorage.cartArr)));
        }

        if(localStorage.cartArr){
           null
        }else{
            setNocart(true)
        }
    },[])
    const removeItem = function (id){
        console.log(id)
        var cartObj = JSON.parse(localStorage.cartArr);
        for (let i=0; i < cartObj.length; i++){
            if (cartObj[i]['id'] == Number(id)){
                cartObj.splice(i, 1);
                if(cartObj.length == 0){
                    setNocart(true)
                }
                localStorage.cartArr = JSON.stringify(cartObj);
                document.getElementById(id).remove()
            }
        }
        var cartNumber = document.getElementsByClassName("cart_num")[0];
        cartNumber.innerHTML =  Number(JSON.parse(localStorage.cartArr).length)
    }
        return(
            <div className={'cart'}>
                <div className={'pr_title flex container'}>
                    <h2 className={'bold upper'}>
                        cart
                    </h2>
                    <span className={'right_line'}></span>
                </div>

                {noCart ? <div className={'cartMsg container'}>
                        <h3>
                            No products in the cart go and <span> <Link href={"/"}> add some</Link></span>
                        </h3>
                    </div>:null
                }
                <div className={'products flex_row_btw container'}>
                {cartObj.map((pr,index) =>{
                    return(
                            <div className={'product'} id={pr.id} key={index}>
                                <div className={'imgCont flex'}>
                                    <Link href={'/product/'+pr.id}>
                                        <img src={pr.image} />
                                    </Link>
                                    <span className="removeItem" title="remove this item" id={pr.id} onClick={removeItem.bind(this,pr.id)}>
                                        <img src={close} />
                                    </span>
                                </div>

                                <Link href={"/product"+pr.id}>
                                    <span className={"productName"}>
                                        {pr.title}
                                        </span>
                                    </Link>
                                    <span className={"price"}>
                                    {pr.price}$
                                 </span>
                                <div className={'quantity'}>
                                    <span>Quantity : </span>
                                    <input type={"number"} min={1} placeholder={1} onChange={null}/>
                                </div>
                            </div>
                    )
                })}
                </div>
                <Footer></Footer>

                <style jsx lang={"scss"}>
                    {` 
                         .products{
                         flex-wrap: wrap;
                         margin-bottom: 50px;
                         }
                        .product {
                        border: 1px solid #ededed;
                        text-align: center;
                        width: 270px;
                        margin-right: 5px;
                        margin-top: 30px;
                        color: #4a4642;
                        padding-bottom: 20px;
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
                          .removeItem{
                          position: absolute;
                          top: 10px;
                          right: 10px;
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
                          margin-bottom: 10px;
                          display: block;
                          color: #bf8c3d;
                          font-size:20px;
                        }
                        .quantity{
                        span{
                        color: #4a4642;
                        margin-right: 4px;
                        }
                        input{
                        border: 1px solid #ccc;
                        text-align: center;
                        max-width:150px;
                        &:focus{
                        outline: 0px;
                        }
                        }
                        }
                      }
                     .cart{
                     padding-top: 106px;
                     .pr_title{
                        align-items: center;
                        margin-top: 50px;
                        margin-bottom: 20px;
                        h2{
                        color:#4a4642;
                        }
                        .right_line{
                        flex-grow: 1;
                        height: 2px;
                        background: #4a4642;
                        margin-left: 50px;
                        }
                      }
                     }
                      
                    `}
                </style>
            </div>
        )
}