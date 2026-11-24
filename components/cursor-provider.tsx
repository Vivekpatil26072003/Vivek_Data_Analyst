'use client'

import { useEffect, useState } from 'react'

export function CursorProvider() {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY })
    }

    const showCursor = () => setIsVisible(true)
    const hideCursor = () => setIsVisible(false)

    document.addEventListener('mousemove', moveCursor)
    document.addEventListener('mouseenter', showCursor)
    document.addEventListener('mouseleave', hideCursor)

    return () => {
      document.removeEventListener('mousemove', moveCursor)
      document.removeEventListener('mouseenter', showCursor)
      document.removeEventListener('mouseleave', hideCursor)
    }
  }, [])

  return (
    <>
      <style>{`
        * {
          cursor: none;
        }
        a, button, [role="button"], input[type="checkbox"], input[type="radio"] {
          cursor: none;
        }
      `}</style>
      {isVisible && (
        <>
          {/* Outer ring cursor */}
          <div
            className="fixed pointer-events-none z-50 mix-blend-screen"
            style={{
              left: `${cursorPos.x}px`,
              top: `${cursorPos.y}px`,
              width: '32px',
              height: '32px',
              transform: 'translate(-50%, -50%)',
              border: '2px solid #10B981',
              borderRadius: '50%',
              opacity: 0.6,
              transition: 'opacity 0.1s',
            }}
          />
          {/* Inner dot cursor */}
          <div
            className="fixed pointer-events-none z-50"
            style={{
              left: `${cursorPos.x}px`,
              top: `${cursorPos.y}px`,
              width: '8px',
              height: '8px',
              backgroundColor: '#10B981',
              borderRadius: '50%',
              transform: 'translate(-50%, -50%)',
              boxShadow: '0 0 6px rgba(16, 185, 129, 0.8)',
            }}
          />
        </>
      )}
    </>
  )
}
