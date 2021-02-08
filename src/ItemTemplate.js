import "./ItemTemplate.css"
function ItemTemplate(){
    return(
        <div className="MainItemTemplateContainer">
            <div className="ItemTemplateContainer">
            <div className="ItemTemplateDescription">Descripcion escrita</div>
            <div className="ItemTemplateSplit"></div>
            <div className="ItemTemplateAmount">1,000,000.00,000</div>
            </div>
        </div>
    );
}

export default ItemTemplate