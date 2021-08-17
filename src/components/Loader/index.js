import React from 'react'

function Loader({ active }) {
    if(active) {
        return (
            <div class="overlayy">
                <div class="overlay__inner">
                    <div class="overlay__content"><span class="spinner"></span></div>
                </div>
            </div>
        )
    }
    return null
    
}

export default Loader