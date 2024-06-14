import { mount } from 'marketing/marketingApp'
import React, { useRef, useState, useEffect } from 'react'

export default  () => {
    const ref = useRef(null);

    useEffect(() => {
        mount(ref.current)
    },[])

    return (
        <div ref={ref}></div>
    )
}
