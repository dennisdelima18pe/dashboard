import SideBar from "../../Components/SideBar"
import TopBar from "../../Components/TopBar"
import LayoutStyle from './layout.module.css'
import { useRouter } from "next/router"
import MenuMobile from "../../Components/menuMobile"

const index = ({children})=>{

 

    return (

        <div className={LayoutStyle.layout}> 
                 <SideBar />
                 <MenuMobile />
            <div  className={LayoutStyle.layout__content}>
                <TopBar />
                <div className={LayoutStyle.layout__content_main}>
                    {children}
                </div>
            </div>
        </div>


        )

}
export default index