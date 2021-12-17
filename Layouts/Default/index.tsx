import SideBar from "../../Components/SideBar"
import TopBar from "../../Components/TopBar"
import LayoutStyle from './layout.module.css'

const index = ({children})=>{



    return (

        <div className={LayoutStyle.layout}> 
                 <SideBar />
            
            <div className={LayoutStyle.layout__content}>
                <TopBar />
                <div className={LayoutStyle.layout__content_main}>
                    {children}
                </div>
            </div>
        </div>


        )

}
export default index