import React, { useEffect } from'react'
//@ts-ignore
import { useLoadMore } from 'react-load-more';

export const LoadMorePage: React.FC<{}> = () => {
    const [isL, setL ] = useLoadMore(()=>{});
    useEffect(()=>{
        setL(false)
    }, [isL])
    return <div>Loading more items</div>
}
