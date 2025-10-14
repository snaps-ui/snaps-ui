'use client'

import { useState } from 'react'

export function CopyButton({ code }: { code?: string }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    if (!code) return
    await navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <button onClick={handleCopy} className="copy-btn" aria-label="Copy code">
      {copied ? 'Copied!' : 'Copy'}
    </button>
  )
}
