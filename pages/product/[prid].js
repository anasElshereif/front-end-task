import Footer from '../../components/common/footer/footer';
import { useRouter } from 'next/router';
import {useEffect, useState} from 'react';
import cart from '../../public/images/icons8-shopping-cart-40.png';
import Loader from "../../public/images/loading.65978728.gif";
const Pr_details = function useQuery()  {
    const [laoding, setLaoding] = useState(true);
    const [PrName, setName] = useState("");
    const [PrImg, setImg] = useState("");
    const [PrPrice, setPrice] = useState("");
    const [PrDesc, setdesc] = useState("");
    const [PrCat, setdCat] = useState("");
    const [PrId, setId] = useState("");
    const router = useRouter();
    const [added, setAdded] = useState(false);

    useEffect(() => {


        if (router.asPath !== router.route) {
            console.log()
            fetch(`https://fakestoreapi.com/products/`+Number(router.query.prid))
                .then(res=>res.json())
                .then(json=>{
                    setName(json.title);
                    setId(json.id);
                    setImg(json.image);
                    setPrice(json.price);
                    setdesc(json.description);
                    setdCat(json.category);
                    setLaoding(false);
                    if(localStorage.cartArr){
                        var cartObj = JSON.parse(localStorage.cartArr);
                        for (let i=0; i < cartObj.length; i++){
                            if (cartObj[i]['id'] == Number(json.id)){
                                console.log('hhdh')
                                setAdded(true)
                                console.log(added)
                            }else{
                                console.log("papapa")
                                console.log(added)
                            }
                        }

                    }else{
                        localStorage.cartArr = []
                    }
                })
        }







    }, [router,added])
    const addTocartFun = function (){
        setAdded(true)
        var productObj = {
            "id":PrId,
            "title":PrName,
            "price":PrPrice,
            "description":PrDesc,
            "image":PrImg,
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
    return (
        <div className={'main_details'}>
            {laoding ? <div className={"loader"}><img src={Loader} /> </div> :
            <div className={'container flex_row_btw'}>
                <div className={'imgCont flex'}>
                    <img src={PrImg} />
                </div>
                <div className={'details'}>
                    <h3 className={'name'}>
                        {PrName}
                    </h3>
                    <span className={'price'}>
                        {PrPrice} $

                    </span>
                    <p className={"desc"}>
                        {PrDesc}
                    </p>
                    <span className={'bold cat'}>
                        Category :
                    </span>
                    <span className={'cat'}>
                        { " " + PrCat}
                    </span>

                    {added ? <button className={'add_to_cart flex'}>
                        <img src={cart} /><span>Product is already added to the cart</span>
                    </button> : <button className={'add_to_cart flex'} onClick={addTocartFun.bind(this)}>
                        <img src={cart} /><span>Add Product To Cart</span>
                    </button>}

                </div>
            </div>}
            <Footer></Footer>
            <style jsx lang={"scss"}>
                {`
                    .loader{
                    height: 500px;
                    line-height: 500px;
                    text-align: center;
                    padding-top: 100px;
                    width: 100%;
                    }
                  .main_details{
                  padding-top: 106px;
                  .container{
                  padding: 80px 0px;
                  align-items: flex-start;
                  @media(max-width:800px){
                  flex-direction: column;
                  }
                  .imgCont{
                  width: 35%;
                  border: 1px solid #eee;
                  box-shadow: 0px 0px 2em rgba(#000, .1);
                  margin-right: 40px;
                  @media(max-width: 800px){
                  margin-right: 0px;
                  margin-bottom: 40px;
                  width: 100%;
                  }
                  img{
                  max-width:98%;
                  max-height:98%;
                  
                  }
                  }
                  .details{
                  width: 65%;
                  @media(max-width: 800px){
                  width: 100%;
                  padding:0px 20px;
                  }
                  .name{
                  color: #4a4642;
                  margin-bottom: 10px;
                  }
                  .price{
                  font-weight: bolder;
                  font-size: 20px;
                  color: #cca575;
                  }
                  .desc{
                  color: #aaa;
                  padding: 10px 0px;
                  line-height: 30px;
                  }
                  .cat{
                  color: #4a4642;
                  }
                  .add_to_cart{
                  align-items: center;
                  display: block;
                  padding: 10px;
                  margin-top: 20px;
                  border: 1px solid #4a4642;
                  color: #4a4642;
                  background: transparent;
                  cursor: pointer;
                  &:focus{
                  outline: 0px;
                  }
                  img{
                  width: 30px;
                  }
                  span{
                  position: relative;
                  top: -7px;
                  margin-left: 10px;
                  }
                  }
                  }
                  }
                  }
                `}
            </style>
        </div>
    )
}
export default Pr_details
