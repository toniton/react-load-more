/// <reference types="typescript" />

import { useState, useEffect,  Dispatch, SetStateAction, MutableRefObject } from 'react'

declare module 'react-load-more-hook' {
  export type LoadMoreHook = [boolean, Dispatch<SetStateAction<boolean>>]
  export function useLoadMore(callback: () => void, ref: MutableRefObject<HTMLElement>) : LoadMoreHook
}