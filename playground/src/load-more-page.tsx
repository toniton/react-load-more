import React, { useEffect } from'react'
// @ts-ignore
import Hook, { useLoadMore } from 'react-load-more-hook';

export const LoadMorePage: React.FC<{}> = () => {
    console.log(React)
    console.log(Hook)
    const [isL, setL ] = useLoadMore(()=>{});
    useEffect(()=>{
        setL(false)
    }, [isL])
    return <div>Loading more items</div>
}
