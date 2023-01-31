import React, { useCallback } from 'react'

interface Props {
  children: React.ReactNode
  link?: string
}

const NavPageButton = (props: Props) => {
  const { children, link } = props

  const onClick = useCallback(() => {
    if (link) window.history.pushState({}, '', link)
  }, [link])

  return (
    <div className="nav-button" onClick={onClick}>
      {children}
    </div>
  )
}

export default NavPageButton
