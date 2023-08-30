import { useSelector } from "react-redux";
import "./_cat-nav.scss";
import CategorySlice from "../../store/slices/CategorySlice";

const CatNav = () =>{
    const categories = useSelector(CategorySlice.getInitialState)
    return(
        <>
            <div className="cat-nav-container container">
                <ul>
                    {
                        categories.map((category,index)=>{
                            return(
                                <li className="list-items" key={index}><a href="#">{category}</a></li>
                            )
                        })
                    }
                </ul>
            </div>
        </>
    )
}
export default CatNav;