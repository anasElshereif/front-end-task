import React, {Component} from 'react';
import Slider from '../common/header/slider';
import slider2 from '../../public/images/slider1.jpg'
import slider3 from '../../public/images/slider2.jpg'
import slider1 from '../../public/images/slider3.jpg'
import Loader from '../../public/images/loading.65978728.gif'
import Link from "next/link";
import Product from '../common/product/product';
import Footer from '../../components/common/footer/footer';
export default class Home extends Component{
    state = {
        cats:['one'],
        catsLoading:true,
        products:[],
        prLoading:true,
    }
    componentDidMount() {
        fetch('https://fakestoreapi.com/products/categories')
            .then(res=>res.json())
            .then(json=>this.setState({
                cats:json.concat(json),
                catsLoading:false
            }))
        fetch('https://fakestoreapi.com/products?limit=30')
            .then(res=>res.json())
            .then(json=>this.setState({
                products:json.slice(0, 16),
                prLoading:false,
            }))
    }
    getPage = function (num1,num2){
        console.log(num1, num2)
        this.setState({
            prLoading:true
        })
        fetch('https://fakestoreapi.com/products?limit=30')
            .then(res=>res.json())
            .then(json=>this.setState({
                products:json.slice(num1, num2),
                prLoading:false,
            }))
    }
    render(){
        return(
            <div>
                <header className={"main_header container"}>
                    <div className={'side_menue'}>
                        {this.state.catsLoading ? <span className={"loading"}>Loading categories ...</span> : this.state.cats.map((cat, index) =>{
                            return (
                                <div className={"catsCont"} key={index+cat}>
                                    <Link href={"/"}>
                                        {cat}
                                    </Link>
                                </div>


                            )
                        })}
                    </div>
                    <Slider className={"slider"} header_text={['Get the best products.', <br />, 'From the fresh resocurces']} slides={[slider1, slider2,slider3]}></Slider>

                </header>
                <section className={'products container'}>
                    <div className={'pr_title flex'}>
                        <h2 className={'bold upper'}>
                            all products
                        </h2>
                        <span className={'right_line'}></span>
                    </div>
                    <section className={'products_cont flex_row_btw'}>
                        {this.state.prLoading ? <div className={"loader"}><img src={Loader} /> </div> : this.state.products.map(pr =>{
                            return (
                                    <Product id={pr.id} img={pr.image} pr_name={pr.title} price={pr.price} desc={pr.description}></Product>
                            )
                        }) }
                    </section>
                    {this.state.prLoading ? null : <div className={'paging'}>
                        <div className={'one activepage'} onClick={this.getPage.bind(this, 0,16)}>
                            1
                        </div>
                        <div className={'two'} onClick={this.getPage.bind(this, 15,30)}>
                            2
                        </div>
                    </div>}

                </section>
                <Footer></Footer>
                <style jsx lang={"scss"}>
                    {`
                      //start main header
                      .main_header{
                      margin-top: 106px;
                      }
                      .side_menue{
                      float: left;
                      width: 250px;
                      position: relative;
                      z-index: 9;
                      height: 490px;
                      border: 1px solid #eee;
                      border-top: 0px;
                      border-right: 0px;
                      @media(max-width:900px){
                      float: none;
                      }
                          .loading{
                          width: 100%;
                          text-align: center;
                          display: block;
                          padding-top: 230px;
                          }
                          .catsCont{
                          padding: 20px;
                          border-bottom: 1px solid #eee;
                          &:last-of-type{
                          border-bottom: 0px;
                          }
                          }
                      }
                      .slider{
                      float: right;
                      width: calc(100% - 250px);
                      }
                    //  end main header
                    //start products
                    .products{
                    padding-top: 50px;
                    padding-bottom: 50px;
                    .loader{
                    height: 500px;
                    line-height: 500px;
                    text-align: center;
                    padding-top: 100px;
                    width: 100%;
                    }
                    .pr_title{
                    align-items: center;
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
                    .products_cont{
                    flex-wrap: wrap;
                    align-items: flex-start;
                    }
                    }
                    .paging{
                    width: 100%;
                    text-align: center;
                    padding: 20px 0;
                    margin-top:40px;
                    div{
                    display: inline-block;
                    padding: 10px 20px;
                    border: 1px solid #cca575;
                    color: #cca575;
                    margin: 0px 10px;
                    cursor: pointer;
                    transition: all .2s ease-in-out;
                    &:hover{
                    background: #cca575;
                    color: #fff;
                    }
                   
                    }
                    }
                    //end products
                    `}
                </style>
            </div>

        )
    }
}