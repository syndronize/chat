import React from 'react'

const ImageModal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null
    return (
        <div
            onClick={onClose}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: 'rgba(0, 0, 0, 0.7)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            <div
                style={{
                    background: "transparent",
                    margin: "auto",
                    maxHeight: "70%",
                    maxWidth: "70%",
                    padding: "4px solid #000",
                    borderRadius: "10px",
                    boxShadow: "2px solid black",
                }}
            >
                {children}

            </div>
        </div>
    )
}

export default ImageModal