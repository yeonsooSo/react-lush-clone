import "../../assets/list_menu.css"

function Lmenu({category, num }){

    return(
        <div id="list_menu">
            {
                category.map((category, idx)=><button onClick={()=>{const Ecate=escape(category); window.location.replace(`/list/?cate=${Ecate}`)}}>{category}({num[idx]})</button>)
            }
        </div>
    )
}
export default Lmenu;