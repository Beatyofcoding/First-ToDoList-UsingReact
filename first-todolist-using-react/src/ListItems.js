import React from "react";
import "./ListItems.css"

function ListItems(props){
    const items = props.items;
    const listItems = items.map(item =>
        {
            return <div className="list"></div>
        })
    return(

        )
}
export default ListItems;