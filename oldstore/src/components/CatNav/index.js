import { useSelector } from "react-redux";
import "./_cat-nav.scss";
import CategorySlice from "../../Redux/Category/categorySlice";

const CatNav = () =>{
    const categories = useSelector(state=>state.categoryReducer.categories)
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