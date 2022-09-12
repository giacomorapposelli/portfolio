import React, { useState } from 'react'

export const OverlayContext = React.createContext()

const Overlay = ({ children }) => {
    const [overlay, setOverlay] = useState(false)

    return (
        <OverlayContext.Provider value={{ overlay, setOverlay }}>
            <div className={overlay ? 'overlay' : ''}></div>
            {children}
        </OverlayContext.Provider>
    )
}

export default Overlay
