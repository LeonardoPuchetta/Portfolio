import React from 'react'

export default function TooltipComponent(props) {

    const {left,right,top,bottom,backgroundColor,color,content} = props; 

  return (
    <span>{content}</span>
  )
}
