import React from 'react';
import {
  MouseEvent,
  ReactNode,
  TouchEvent,
  useEffect,
  useRef,
  useState
} from 'react'
import styled, { css, CSSProp } from 'styled-components'

const Wrapper = styled.div<{ isDown: boolean; customStyles?: CSSProp }>`
  display: flex;
  gap: 4.6rem;
  overflow-x: auto;
  overflow-y: hidden;
  -ms-overflow-style: none;
  scrollbar-width: none;
  max-width:100vw;
  overflow-y:scroll;
  cursor: ${props => (props.isDown ? 'grabbing' : 'grab')};
  ${props =>
    props.customStyles &&
    css`
      ${props.customStyles}
    `}

  &::-webkit-scrollbar {
    display: none;
  }

  ${props =>
    props.isDown &&
    `
    user-select: none;
    -webkit-user-drag: none;
  `}
`

interface MouseScrollerProps {
  children: ReactNode
  customStyles?: CSSProp
}

export default function MouseScroller({
  children,
  customStyles
}: MouseScrollerProps) {
  const wrapperRef = useRef<HTMLDivElement>(null)

  const [isDown, setIsDown] = useState<boolean>(false)
  const [startX, setStartX] = useState<number>(0)
  const [scrollLeftState, setScrollLeftState] = useState<number | null>(null)
  const [mouseMoved, setStateMouseMoved] = useState<number>(0)

  // functions
  function handleMouseDown(
    e: MouseEvent<HTMLDivElement> | TouchEvent<HTMLDivElement>
  ) {
    setIsDown(true)

    if ('touches' in e) {
      setStartX(e.touches[0].pageX - (wrapperRef.current?.offsetLeft || 0))
    } else {
      setStartX(e.pageX - (wrapperRef.current?.offsetLeft || 0))
    }
    setScrollLeftState(wrapperRef.current?.scrollLeft || 0)
    setStateMouseMoved(0)
  }

  function handleMouseMove(
    e: MouseEvent<HTMLDivElement> | TouchEvent<HTMLDivElement>
  ) {
    if (!isDown) {
      return
    }

    const currentMousePositionInsideContainer =
      'touches' in e
        ? e.touches[0].pageX - (wrapperRef.current?.offsetLeft || 0)
        : e.pageX - (wrapperRef.current?.offsetLeft || 0)

    setStateMouseMoved(currentMousePositionInsideContainer - startX)
  }

  useEffect(() => {
    if (wrapperRef.current) {
      wrapperRef.current.scrollLeft = (scrollLeftState || 0) - mouseMoved
    }
  }, [scrollLeftState, mouseMoved])

  return (
    <Wrapper
      ref={wrapperRef}
      customStyles={customStyles}
      isDown={isDown}
      onMouseDown={e => handleMouseDown(e)}
      onMouseUp={() => setIsDown(false)}
      onMouseLeave={() => setIsDown(false)}
      onMouseMove={e => handleMouseMove(e)}
      onTouchStart={e => handleMouseDown(e)}
      onTouchEnd={() => setIsDown(false)}
      onTouchCancel={() => setIsDown(false)}
      onTouchMove={e => handleMouseMove(e)}
    >
      {children}
    </Wrapper>
  )
}
