import "../../assets/list_menu.css"

function Lmenu({category, num, filterItem}){

    return(
        <div id="list_menu">
            {
                category.map((category, idx)=><button onClick={()=>filterItem(category)}>{category}({num[idx]})</button>)
            }
        </div>
    )
}
export default Lmenu;