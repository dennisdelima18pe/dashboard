import Logo from 'images/logo.png'
import sidebar_itens from '../../assets/JsonData/sidebar_routes.json'
import sidebarStyle from './sidebar.module.css'
import {useRouter} from 'next/router'
import Link from 'next/link'
interface sideBarProps {

    title:String;
    icon:any;
    router:String;
    activeRouter:boolean;
} 

const SibeBarItem:React.FC<sideBarProps> = ({title,icon,router,activeRouter})=>{


    const active = activeRouter ? sidebarStyle.active:""


    return (
            <div className={`${sidebarStyle.sidebar_item} ${active}`}>
                  <i className={icon} />
                <span>
                      {title}    
                </span>
             </div>
    )
}




const SideBar = ()=>{

    const router = useRouter()

    const activeItem = sidebar_itens.findIndex(item => item.route === router.asPath)





    return (
        <aside  id={sidebarStyle.sidebar}>
            <a href="#">
                <img src="images/logo.png" id={sidebarStyle.logo}/>
            </a>
            <nav>
            
                {
                    sidebar_itens.map((item,index)=>(
                        <a href={item.route}>
                        <SibeBarItem 
                            title={item.display_name}
                            icon={item.icon}
                            router={item.route}
                            activeRouter={index === activeItem}
                            />
                         </a>

                        ))
                }
                
            </nav>
        </aside>

    )
}
export default SideBar




