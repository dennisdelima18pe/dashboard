import React from 'react'
import {GiHamburgerMenu} from 'react-icons/gi'
import {VscChromeClose} from 'react-icons/vsc'
import menuMobileStyle from './menuMobile.module.css'
import SideBar from '../SideBar'
import sidebar_itens from '../../assets/JsonData/sidebar_routes.json'

const menuMobile = ()=>{

    const [toggle,setToggle] = React.useState(false)


    return (
        <div className={menuMobileStyle.menuMobile}>
                <div onClick={()=> setToggle(!toggle)}>
                  {toggle ? <VscChromeClose size={28}/>:<GiHamburgerMenu size={28}  />}
                </div>
                <div className={toggle ? menuMobileStyle.toggleContent:menuMobileStyle.toggleContent_none}>
                        {sidebar_itens.map((item)=> (

                                <div className={menuMobileStyle.menu}>
                                    <i className={item.icon}></i>
                                    {item.display_name}
                                 </div> 


                                ))
                                                          
}
                </div>


        </div>

        
        
        )

}


export default menuMobile