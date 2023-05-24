import { useEffect } from "react"
import { useLayoutEffect, useRef } from "react"
import { useDispatch, useSelector } from 'react-redux'
import type { TypedUseSelectorHook } from 'react-redux'
import { AppDispatch, RootState } from "../redux"

export const useLatest = (value: any) => {
  const valueRef = useRef(value)

  useLayoutEffect(() => {
    valueRef.current = value
  }, [value])

  return valueRef
}



export const useOutsideClick = (elementRef: any, handler: any, attached: boolean) => {
  const latestHandler = useLatest(handler)


  useEffect(() => {
    if (!attached) return;

    
    const handleClick = (e: Event) => {
      if (!elementRef.current) return;
      if (!e.composedPath().includes(elementRef.current)) {
        latestHandler.current();
      }
    }

    setTimeout(() => document.addEventListener('click', handleClick), 0)

    return () => {
      document.removeEventListener('click', handleClick)
    }
  }, [elementRef, handler, attached])
}


export const useAppDispatch: () => AppDispatch = useDispatch

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector