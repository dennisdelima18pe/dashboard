import React from 'react'
import topBarStyle from  './topBar.module.css'
import dropdown_items from '../../assets/JsonData/notification.json'
import users_menu from '../../assets/JsonData/user_menus.json'
import { imageConfigDefault } from 'next/dist/server/image-config'
interface DropDownProps {
    buttonToggle?:Function
    DropwdonItens:Array<any> 
    footer?:any 
}

interface DropDownItensProps {

    icon:string 
    description:string 
}

const DropDownItens:React.FC<DropDownItensProps> = ({icon,description})=> {


    return (
        <div className={topBarStyle.dropdown_itens}>
            <i className={icon}></i>
            <p>{description}</p> 
        </div>

    )
}


const notificationCustoms = ()=> {


    return (
        <div>
            <i className='bx bx-bell'></i>
            <div className={topBarStyle.numberNotification}>{dropdown_items.length}</div>
        </div>
    )
}

const profileCustoms = ()=>{



    return (
            <img src="images/tuat.jpg" className={topBarStyle.img}/>
    )

}


const DropDown:React.FC<DropDownProps> = ({DropwdonItens,footer,buttonToggle})=> {

    const [active,setActive] = React.useState(false)


    return (
        <div>
            <div onClick={()=> setActive(!active)} className={topBarStyle.buttonToggle}>
                {buttonToggle()}
            </div>
            <div className={active ? topBarStyle.dropdown_content:topBarStyle.dropdown_content_none}>
                    {
                    DropwdonItens.map((item) => (
                        <DropDownItens 
                          icon={item.icon}
                          description={item.content}
                        />

                        ))
                    }
            </div>
        </div>

    )


}



const TopBar = ()=>{

    return (
        <div className={topBarStyle.topBar}>
            <div className={topBarStyle.topBar_search}>
                <input type="text" placeholder="search....."  />
                <i className="bx bx-search" id="teste"/>
            </div>         
            <div className={topBarStyle.dropdwon}>
              <DropDown 
                buttonToggle={notificationCustoms}
                DropwdonItens={dropdown_items}
                footer=""
                />
               <DropDown 
                buttonToggle={profileCustoms}
                DropwdonItens={users_menu}
                footer=""
                />
            </div>

        </div>

    )

}

export default TopBar