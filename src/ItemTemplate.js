import "./ItemTemplate.css"
import { useSelector } from 'react-redux'
function ItemTemplate(){
    const items = useSelector(state=>state.itemReducer)

    return(<div>

        { items.map(i=>
        (
        <div className="MainItemTemplateContainer">
            <div className="ItemTemplateContainer">
                <div className="ItemTemplateDescription">{i.description}</div>
                <div className="ItemTemplateSplit"></div>
                <div className="ItemTemplateAmount">{i.amounth}</div>
            </div>
        </div>
        ))}
        </div>
    );
}

export default ItemTemplate