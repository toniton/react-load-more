import React from "react";
import ReactDOM from "react-dom";
import { LoadMorePage } from './src/load-more-page'
// import { useLoadMore } from 'react-load-more';


const title = 'Example React App';
// const [isL, setL ] = useLoadMore(()=>{});
ReactDOM.render(
    (<LoadMorePage/>),
    document.getElementById('app')
);