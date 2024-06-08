import React from "react";

export const categories = [
    "All",
    "Meat",
    "Vegetarian",
    "Grill",
    "Spicy",
    "Covered",
]

function Categories({ value, onChangeCategory }) {



    return (
        <div className="categories">
            <ul>
                {categories.map((categoryName, i) => {
                    return <li key={i}
                               onClick={() => onChangeCategory(i)}
                               className={value === i ? "active" : ""}>{categoryName}</li>
                })}
            </ul>
        </div>
    )
}

export default Categories