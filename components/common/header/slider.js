import React, {Component} from 'react';
import Glider from '../../../public/glider/glider.min';
class Slider extends Component {
    componentDidMount() {
        new Glider(document.querySelector('.glider'), {
            slidesToShow: 1,
            dots: '.dots',
            draggable: true,
            scrollLock:true,
            rewind:true,
            loop:true,
            duration:1.5,
            autoplay:true,
            arrows: {
                prev: '.glider-prev',
                next: '.glider-next'
            }
        });
    }
    render(){
        return(
        <div className={'main_header'}>
            <div className={'text_overlay'}>
                <div className={'container'}>
                    <h2>
                        {this.props.header_text}
                    </h2>
                </div>
            </div>
            <div className="glider">
                {this.props.slides ? this.props.slides.map((slide, index) => {
                        return (
                            <div key={index}>
                                <img src={slide} />
                            </div>

                        )
                }) : <h1>loading ...</h1>}

            </div>
            <div role="tablist" className="dots"></div>
            <style jsx lang={"scss"}>
                {`
                    .main_header{
                    height: 490px;
                    position: relative;
                    @media(max-width:900px){
                    height: 300px;
                    }
                    .text_overlay{
                    position: absolute;
                    height: 100%;
                    width: calc(100% - 250px);
                    
                    float: left;
                    margin-left: 250px;
                    background: rgba(0, 0, 0, .4);
                    z-index: 3;
                    padding-top: 100px;
                    @media(max-width:900px){
                    width: 100%;
                    margin-left: 0px;
                    }
                    @media(max-width:500px){
                    padding-top: 30px;
                    }
                    h2{
                    color: #fff;
                    font-size: 70px;
                    margin-left: 50px;
                    @media(max-width:1100px){
                    font-size: 50px;
                    }
                    @media(max-width:950px){
                    font-size: 30px;
                    }
                }
                }
                    .glider{
                    height:100%;
                    div{
                    height: 100%;
                    img{
                    width: 100%;
                    object-fit: cover;
                    height: 490px;
                }
                }
                }
                    .glider-dots{
                    position: absolute;
                    bottom: 50px;
                    z-index: 9;
                    text-align: right;
                    right: 50px;
                }

                }

                `}
            </style>
        </div>
        )
    }
}
export default Slider