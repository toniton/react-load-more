import React, { useEffect } from'react'
// @ts-ignore
import { useLoadMore } from 'react-load-more-hook';

export const LoadMorePage: React.FC<{}> = () => {
    console.log(React)
    console.log(useLoadMore)
    const [isL, setL ] = useLoadMore(()=>{});
    useEffect(()=>{
        setL(false)
    }, [isL])
    return <div>Loading more items</div>
}
