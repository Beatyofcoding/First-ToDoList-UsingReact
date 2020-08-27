import React from "react";
import "./ListItems.css";
import  { FontAwesomeIcon} from "@fortawesome/react-fontawesome";


function ListItems(props){
    const items = props.items;
    const listItems = items.map(item =>
        {
            return <div className="list" key="item.key">
                <span>
                    <FontAwesomeIcon className="faicons" icon="trash" />
                </span>
                <p>{item.text}</p>
            </div>
        })
    return(
    <div>{listItems}</div>
        )
}
export default ListItems;