/// <reference path="../index.d.ts" />
'use strict';
import { useState, useEffect, Dispatch, SetStateAction, MutableRefObject } from 'react'

export type UseLoadMore = [boolean, Dispatch<SetStateAction<boolean>>]

export const useLoadMore = (
  callback: () => void,
  componentRef?: MutableRefObject<HTMLElement>
): UseLoadMore => {
  const [isLoadingMore, setIsLoadingMore] = useState(false)
  const setIsLoadingMoreOnScroll = (ref: MutableRefObject<HTMLElement>) => () => {
    const { current } = ref
    const { documentElement, body } = document
    const windowOffset = window.innerHeight + documentElement.scrollTop
    const tableOffset = current ? current.scrollHeight : body.offsetHeight
    if (windowOffset < tableOffset || isLoadingMore) {
      return
    }
    setIsLoadingMore(true)
  }

  useEffect(() => {
    const handleScroll = setIsLoadingMoreOnScroll(componentRef)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (!isLoadingMore) {
      return
    }
    callback()
  }, [isLoadingMore])

  return [isLoadingMore, setIsLoadingMore]
}