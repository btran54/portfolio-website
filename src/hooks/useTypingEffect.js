import { useState, useEffect, useRef } from 'react'

export function useTypingEffect(words, typingSpeed = 150, deletingSpeed = 100, pauseDuration = 2000) {
  const [text, setText] = useState('')
  const [wordIndex, setWordIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    const currentWord = words[wordIndex]

    const handleTyping = () => {
      if (isPaused) {
        // Wait before starting to delete
        setTimeout(() => {
          setIsPaused(false)
          setIsDeleting(true)
        }, pauseDuration)
        return
      }

      if (isDeleting) {
        // Deleting text
        if (text.length > 0) {
          setText(currentWord.substring(0, text.length - 1))
        } else {
          // Move to next word
          setIsDeleting(false)
          setWordIndex((prev) => (prev + 1) % words.length)
        }
      } else {
        // Typing text
        if (text.length < currentWord.length) {
          setText(currentWord.substring(0, text.length + 1))
        } else {
          // Pause when word is complete
          setIsPaused(true)
        }
      }
    }

    const speed = isDeleting ? deletingSpeed : typingSpeed
    const timer = setTimeout(handleTyping, isPaused ? 0 : speed)

    return () => clearTimeout(timer)
  }, [text, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pauseDuration, isPaused])

  return text
}