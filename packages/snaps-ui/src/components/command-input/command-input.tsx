'use client'

import { forwardRef, useEffect, useState } from 'react'
import { LuSearch } from 'react-icons/lu'

import { Input, type InputProps } from '../input/index'
import { InputGroup } from '../input-group/index'
import { Kbd } from '../kbd/index'

function isMobileDevice() {
  if (typeof navigator === 'undefined') return false
  return /android|bb\d+|meego|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(?:hone|od|pad)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(?:ob|in)i|palm(?: os)?|phone|p(?:ixi|re)\/|plucker|pocket|psp|series(?:4|6)0|symbian|treo|up\.(?:browser|link)|vodafone|wap|windows ce|windows phone|xda|xiino|zte-/i.test(
    navigator.userAgent
  )
}

export interface CommandInputProps extends InputProps {
  shortcut?: string
  onOpen?: () => void
  title?: string
  readOnly?: boolean
}

export const CommandInput = forwardRef<HTMLInputElement, CommandInputProps>(
  function CommandInput(props, ref) {
    const { shortcut, onOpen, title, readOnly = true, ...rest } = props

    const [isMobile, setIsMobile] = useState(false)
    const [resolvedShortcut, setResolvedShortcut] = useState<string | null>(
      null
    )

    useEffect(() => {
      const mobile = isMobileDevice()
      setIsMobile(mobile)

      if (!mobile) {
        const isMac = /Mac|iPod|iPhone|iPad/.test(navigator.userAgent)
        setResolvedShortcut(shortcut ?? (isMac ? '⌘ + K' : 'Ctrl + K'))
      }
    }, [shortcut])

    useEffect(() => {
      if (isMobile || !resolvedShortcut) return

      const parts = resolvedShortcut
        .split('+')
        .map((p) => p.trim().toLowerCase())

      const handleKeyDown = (e: KeyboardEvent) => {
        const pressed: string[] = []
        if (e.metaKey) pressed.push('⌘')
        if (e.ctrlKey) pressed.push('ctrl')
        if (e.shiftKey) pressed.push('shft')
        if (e.altKey) pressed.push('alt')
        pressed.push(e.key.toLowerCase())

        const combo = pressed.join(' ')
        const target = parts.join(' ').toLowerCase()

        if (combo === target) {
          e.preventDefault()
          onOpen?.()
        }
      }

      window.addEventListener('keydown', handleKeyDown)
      return () => window.removeEventListener('keydown', handleKeyDown)
    }, [resolvedShortcut, onOpen, isMobile])

    return (
      <InputGroup
        flex="1"
        startElement={<LuSearch />}
        endElement={
          !isMobile && resolvedShortcut ? (
            <>
              {resolvedShortcut.split('+').map((key, i) => (
                <Kbd key={i}>{key.trim()}</Kbd>
              ))}
            </>
          ) : null
        }
      >
        <Input
          aria-haspopup="dialog"
          aria-expanded={false}
          placeholder={title ?? 'Search...'}
          onClick={onOpen}
          readOnly={readOnly}
          ref={ref}
          {...rest}
        />
      </InputGroup>
    )
  }
)
