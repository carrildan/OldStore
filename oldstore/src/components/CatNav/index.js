import "./_cat-nav.scss";

const CatNav = () =>{
    return(
        <>
            <div className="cat-nav-container container">
                <ul>
                    <li className="list-items"><a href="#">Men</a></li>
                    <li className="list-items"><a href="#">Women</a></li>
                    <li className="list-items"><a href="#">Boys</a></li>
                    <li className="list-items"><a href="#">Girls</a></li>
                </ul>
            </div>
        </>
    )
}
export default CatNav;