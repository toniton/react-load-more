/// <reference types="typescript" />

import { useState, useEffect,  Dispatch, SetStateAction, MutableRefObject } from 'react'

declare module 'react-load-more' {
  export type UseLoadMore = [boolean, Dispatch<SetStateAction<boolean>>]
  export type useloadMore = (callback: () => void, ref: MutableRefObject<HTMLElement>) => UseLoadMore
}