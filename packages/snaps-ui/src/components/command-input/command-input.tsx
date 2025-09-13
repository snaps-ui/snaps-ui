'use client'

import { forwardRef, useEffect } from 'react'
import { LuSearch } from 'react-icons/lu'

import { Input, type InputProps } from '../input/index'
import { InputGroup } from '../input-group/index'
import { Kbd } from '../kbd/index'

enum KeyList {
  Meta = '⌘',
  Ctrl = 'Ctrl',
  Shift = 'Shft',
  Alt = 'Alt',
  F = 'F',
  K = 'K',
  L = 'L',
  P = 'P',
}

type KeyboardShortcut = `${KeyList} + ${KeyList}`

export interface CommandInputProps extends InputProps {
  shortcut?: KeyboardShortcut
  onOpen?: () => void
  title?: string
  readOnly?: boolean
}

export const CommandInput = forwardRef<HTMLInputElement, CommandInputProps>(
  function CommandInput(props, ref) {
    const {
      shortcut = '⌘ + K',
      onOpen,
      title,
      readOnly = true,
      ...rest
    } = props

    useEffect(() => {
      const parts = shortcut.split('+').map((p) => p.trim().toLowerCase())

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
    }, [shortcut, onOpen])

    return (
      <InputGroup
        flex={'1'}
        startElement={<LuSearch />}
        endElement={
          <>
            {shortcut.split('+').map((key, i) => (
              <Kbd key={i}>{key.trim()}</Kbd>
            ))}
          </>
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
