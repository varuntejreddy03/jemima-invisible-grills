import { useEffect, useRef } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import { motion, AnimatePresence } from 'motion/react'

type LightboxImage = { src: string; alt: string }

type LightboxProps = {
  images: LightboxImage[]
  index: number
  onClose: () => void
  onNavigate: (index: number) => void
}

export function Lightbox({ images, index, onClose, onNavigate }: LightboxProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    closeButtonRef.current?.focus()

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') onNavigate((index + 1) % images.length)
      if (e.key === 'ArrowLeft') onNavigate((index - 1 + images.length) % images.length)
    }

    document.addEventListener('keydown', onKeyDown)
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = previousOverflow
    }
  }, [index, images.length, onClose, onNavigate])

  const current = images[index]
  if (!current) return null

  return (
    <AnimatePresence>
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-label="Image viewer"
        className="fixed inset-0 z-50 flex items-center justify-center bg-navy-deep/90 p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <button
          ref={closeButtonRef}
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 rounded-brand bg-white/10 p-2 text-white hover:bg-white/20"
          aria-label="Close image viewer"
        >
          <X className="size-6" aria-hidden="true" />
        </button>

        {images.length > 1 && (
          <>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation()
                onNavigate((index - 1 + images.length) % images.length)
              }}
              className="absolute top-1/2 left-4 -translate-y-1/2 rounded-brand bg-white/10 p-2 text-white hover:bg-white/20"
              aria-label="Previous image"
            >
              <ChevronLeft className="size-6" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation()
                onNavigate((index + 1) % images.length)
              }}
              className="absolute top-1/2 right-4 -translate-y-1/2 rounded-brand bg-white/10 p-2 text-white hover:bg-white/20"
              aria-label="Next image"
            >
              <ChevronRight className="size-6" aria-hidden="true" />
            </button>
          </>
        )}

        <motion.figure
          key={current.src}
          className="max-h-[80vh] max-w-3xl"
          onClick={(e) => e.stopPropagation()}
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.2 }}
        >
          <img
            src={current.src}
            alt={current.alt}
            width={800}
            height={600}
            className="max-h-[70vh] w-full rounded-brand border border-white/10 object-contain"
          />
          <figcaption className="mt-3 text-center text-sm text-white/80">{current.alt}</figcaption>
        </motion.figure>
      </motion.div>
    </AnimatePresence>
  )
}
