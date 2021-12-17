import topBarStyle from  './topBar.module.css'
const TopBar = ()=>{

    return (
        <div className={topBarStyle.topBar}>
            <div>
                <input type="text" placeholder="search....."  className={topBarStyle.isSeach} />
                <i className="bx bx-search" />
            </div>         
            <div>
                Dropwdon 1
                Dropwdon 2 
            </div>

        </div>

    )

}

export default TopBar