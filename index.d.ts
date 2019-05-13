/// <reference types="typescript" />

import { useState, useEffect,  Dispatch, SetStateAction, MutableRefObject } from 'react'

declare module 'react-load-more-hook' {
  export type UseLoadMore = [boolean, Dispatch<SetStateAction<boolean>>]
  export type useLoadMore = (callback: () => void, ref: MutableRefObject<HTMLElement>) => UseLoadMore
}