import React from 'react';
import {useEffect, useState} from 'react';
import Link from "next/link";
import Logo from '../../../public/images/logo.png';
import Cart from '../../../public/images/icons8-shopping-cart-40.png'
const home = () =>{
    const [cartNum, setCartNum] = useState(0)
    const [links] = useState([{text:'home', href:"/"}, {text:"Products", href:"/"}, {text:"stores", href:"/"}, {text:"about us", href:"/"}, {text:"Contact", href:"/"}])
    var [slideStatus, setSlide] = useState(false);
    useEffect(()=> {
        if(localStorage.cartArr){
            setCartNum(JSON.parse(localStorage.cartArr).length)
        }else{
            setCartNum(0)
        }
    },[cartNum])
    return(
        <header className={"header"}>
            <div className={"container flex_row_btw"}>
                <div className={'logo'}>
                    <Link href={'/'}>
                        <img src={Logo} width={"60px"}/>

                    </Link>
                </div>
                <ul className={[`links flex upper ${slideStatus ? "slide" : "this"}`]}>
                    {links.map((link, index) =>{
                        return (
                            <li key={index} className={"dark"}>
                                <Link href={link.href}>
                                    {link.text}
                                </Link>
                            </li>
                        )
                    })}
                    <Link href={"/cart"}>
                        <div className={'user_cart'}>
                            <img src={Cart} width={"40px"} />
                            <sup className={'cart_num'}>{cartNum}</sup>
                        </div>
                    </Link>
                </ul>

                <img src="https://img.icons8.com/ios/26/000000/menu--v6.png" className={"menu"} onClick={()=>{
                    slideStatus ? setSlide(false) : setSlide(true)
                }}/>
            </div>
            <style jsx lang={"scss"}>
                {
                    `                
                               
                        .header{
                        padding:20px 0px;
                        background: #fff;
                        box-shadow: 0 2px 5px rgba(0,0,0,.08);
                        position: fixed;
                        width: 100%;
                        top: 0px;
                        left: 0px;
                        right: 0px;
                        z-index: 99;
                         .logo{
                         cursor: pointer;
                         }
                            .links{
                            transition: all .3s ease-in-out;
                            align-items: center;
                                li{
                                    margin-left: 25px;
                                    font-size: 16px;
                                    font-weight: bolder;
                                    @media(max-width:600px){
                                    margin-top: 15px;
                                    margin-right: 20px;
                                    }
                                }
                               .user_cart{
                                 margin-left: 30px;
                                 position: relative;
                                 cursor: pointer;
                                 sup{
                                 position: absolute;
                                 top: -5px;
                                 right: -5px;
                                 background: #4a4642;
                                 width: 20px;
                                 line-height: 20px;
                                 text-align: center;
                                 border-radius: 50%;
                                 color: #fff;
                                 height: 20px;
                                 
                                 }
                                 @media(max-width:600px){
                                 margin-left: 0px;
                                 margin-top: 20px;
                                 }
                                } 
                                @media(max-width:600px){
                                    height: 0px;
                                    overflow: hidden;
                                    box-sizing: border-box;
                                    position: absolute;
                                    top: 105px;
                                    width: 100%;
                                    padding: 0px;
                                    background: #fff;
                                    flex-direction: column;
                                    text-align: right;
                                    left: 0px;
                                    right: 0px;  
                                    box-shadow: 0 2px 5px rgba(0,0,0,.13);
                                }
                                &.slide{
                                height: 250px;
                                }
                            }
                            .menu{
                            display: none;
                            cursor: pointer;
                            @media(max-width: 600px){
                            display: inline-block;
                            }
                            }
                        }
                    `
                }
            </style>
        </header>
    )
};
export default home;