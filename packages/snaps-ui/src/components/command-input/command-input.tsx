'use client'

import { forwardRef, useEffect, useState } from 'react'
import { LuSearch } from 'react-icons/lu'

import { Input, type InputProps } from '../input/index'
import { InputGroup } from '../input-group/index'
import { Kbd } from '../kbd/index'
import { isMobileDevice } from '../../utils/is-mobile-device'

/**
 * Props for the {@link CommandInput} component.
 */
export interface CommandInputProps extends InputProps {
  /**
   * Optional keyboard shortcut to trigger the command.
   *
   * Example: `"⌘ + K"` or `"Ctrl + K"`.
   *
   * If not provided, the component will detect the platform (Mac or Windows)
   * and default to `⌘ + K` on Mac or `Ctrl + K` on Windows.
   */
  shortcut?: string

  /**
   * Callback fired when the shortcut is pressed or the input is clicked.
   */
  onOpen?: () => void

  /**
   * Placeholder text for the input.
   * Defaults to `"Search..."` if not provided.
   */
  title?: string

  /**
   * If `true` (default), the input is read-only and only serves
   * as a trigger for the command palette.
   */
  readOnly?: boolean
}

/**
 * `CommandInput` is a search-style input designed to act as a trigger
 * for a command palette or modal. It shows a search icon on the left
 * and a keyboard shortcut indicator (like `⌘ + K`) on the right for desktop users.
 *
 * - On mobile devices, the shortcut indicator is hidden.
 * - When the keyboard shortcut is pressed, the `onOpen` callback is invoked.
 * - Clicking the input also triggers the `onOpen` callback.
 *
 * @example
 * ```tsx
 * <CommandInput
 *   shortcut="Ctrl + K"
 *   title="Search commands..."
 *   onOpen={() => console.log('Command palette opened')}
 * />
 * ```
 */
export const CommandInput = forwardRef<HTMLInputElement, CommandInputProps>(
  function CommandInput(props, ref) {
    const { shortcut, onOpen, title, readOnly = true, ...rest } = props

    const [isMobile, setIsMobile] = useState(false)
    const [resolvedShortcut, setResolvedShortcut] = useState<string | null>(
      null
    )

    // Detect device and resolve shortcut on mount
    useEffect(() => {
      const mobile = isMobileDevice()
      setIsMobile(mobile)

      if (!mobile) {
        const isMac = /Mac|iPod|iPhone|iPad/.test(navigator.userAgent)
        setResolvedShortcut(shortcut ?? (isMac ? '⌘ + K' : 'Ctrl + K'))
      }
    }, [shortcut])

    // Handle keyboard shortcut press
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
