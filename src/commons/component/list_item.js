import '../../assets/list_item.css';
import { AiOutlineShoppingCart } from "react-icons/ai";
import Like from "./list_like";


function Litem({items}){

    const setType=(type)=>{
        return(
            type.map((e)=> <img id="img"src={`/img/icon_${e}.png`} alt={e}/> )

        )
    }

    return(
        <div id="items">
            {
                items.map((item)=>{
                    const {id, title, des, price, type, img}=item;
                    return (
                        <div id="item" key={id}>
                            <img id="img" src={img} alt={title} />
                            <div id="icon">
                                <Like />
                                <AiOutlineShoppingCart color="#989898" size="30px" />
                            </div>
                            <div id="des">
                                <span>{setType(type)}</span>
                                <span className="item_title">{title}</span>
                                <span className="item_des">{des}</span>
                                <span className="item_price">₩ {price}</span>
                            </div>
                        </div>
                        
                    )
                })
            }
        </div>
    )

}

export default Litem;