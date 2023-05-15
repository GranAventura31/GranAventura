import React from 'react'

export const Nombre = ({style,content}) => {
  return (
    <div>
        <h1 className={style}>{content}</h1>
    </div>
  )
}
