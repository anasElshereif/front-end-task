import React, {Component} from 'react';
import facebook from '../../../public/images/icons8-facebook-40.png'
import twitter from '../../../public/images/icons8-twitter-40.png'
import insta from '../../../public/images/icons8-instagram-40.png'
export default class Footer extends Component{
    render(){
        return(
            <footer className={"footer"}>
                <div className={"container flex_row_btw"}>
                    <ul className={'footer_list'}>
                        <li>
                            list title
                        </li>
                        <li>list one</li>
                        <li>list two</li>
                        <li>list three</li>
                        <li>list four</li>
                    </ul>
                    <ul className={'footer_list'}>
                        <li>
                            list title
                        </li>
                        <li>list one</li>
                        <li>list two</li>
                        <li>list three</li>
                        <li>list four</li>
                    </ul><ul className={'footer_list'}>
                        <li>
                            list title
                        </li>
                        <li>list one</li>
                        <li>list two</li>
                        <li>list three</li>
                        <li>list four</li>
                    </ul>
                    <div className={"social_media"}>
                        <h3 className={"socialTitle"}>
                            Social media
                        </h3>
                        <div className={'social'}>
                            <img src={facebook} />
                            <img src={twitter} />
                            <img src={insta} />
                        </div>
                    </div>
                </div>
                <style jsx lang={"scss"}>
                    {`
                      footer{
                      background: #cca575;
                      color: #fff;
                       .container{
                      align-items: flex-start;
                      padding-top: 50px;
                    padding-bottom: 50px;
                    flex-wrap: wrap;
                    .social_media{
                    @media(max-width:550px){
                      width: 50%;
                      margin-bottom: 30px;
                      }
                    }
                      ul{
                      @media(max-width:550px){
                      width: 50%;
                      margin-bottom: 30px;
                      }
                      @media(max-width:450px){
                      width: 100%;
                      }
                      li{
                      padding: 5px 0;
                      &:first-of-type{
                      font-weight: bolder;
                      font-size: 20px;
                      }
                      }
                      }
                      }
                      }
                    `}
                </style>
            </footer>
        )
    }
}