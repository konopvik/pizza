import React from "react";
import ReactPaginate from 'react-paginate';

import Categories from "../components/Categories";
import Sort from "../components/Sort";
import Skeleton from "../components/PizzaBlock/Skeleton";
import PizzaBlock from "../components/PizzaBlock";
import Pagination from "../components/Pagination";

const Home = ({ searchValue }) =>  {
     const [items, setItems] = React.useState([])
     const [isLoading, setIsLoading] = React.useState(true)
     const [categoryId, setCategoryId] = React.useState(0);
     const [currentPage, setCurrentPage] = React.useState(1);
     const [sortType, setSortType] = React.useState(
         {name: "популярности",
             sortProperty: "rating"}
     )

     React.useEffect(() => {
         setIsLoading(true)
         const categoryQuery = categoryId !== 0 ? `category=${categoryId}&` : "";
         const searchQuery = searchValue ? `&search=${searchValue}` : "";
         const sortBy = sortType.sortProperty.replace("-", "");
         const order = sortType.sortProperty.includes("-") ? "asc" : "desc"
         const url = `https://6651c8b520f4f4c44278b5d9.mockapi.io/items?page=${currentPage}&limit=8&${categoryQuery}sortBy=${sortBy}&order=${order}${searchQuery}`;
         fetch(url)
             .then(res => {
             return res.json();
         }).then(arr => {
             setItems(arr)
             setIsLoading(false)
         })
         window.scrollTo(0,0)
     }, [categoryId, sortType, searchValue, currentPage])


        const pizzas = items.filter(obj => {
            return obj.title.toLowerCase() && obj.title.toLowerCase().includes(searchValue.toLowerCase())
        }).map((obj) => <PizzaBlock key={obj.id} {...obj} />)
        const skeletons = [...new Array(6)].map((_, index) => <Skeleton key={index}/>)

    return (
        <div className="container">
            <div className="content__top">
                <Categories value={categoryId} onChangeCategory={(i) => setCategoryId(i)}/>
                <Sort value={sortType} onChangeSort={(i) => setSortType(i)}/>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {
                    isLoading ? skeletons : items.length > 0 ? pizzas : "Not Found"}
            </div>
            <Pagination onChangePage={number => setCurrentPage(number)} />
        </div>
    )
 }

export default Home