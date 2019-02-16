import { useState } from 'react'

/**
 * Hook to Manage navigationg through survey sections and questions
 * in the Survey System
 * @param {*} setInitialIndexValue
 * @param {*} overflowCallback called when the next item in the list does not exist
 */
const useListTracker = (setInitialIndexValue = true, overflowCallback) => {
  const [currentIndex, setCurrentIndex] = useState(
    setInitialIndexValue ? 0 : null
  )

  const setCurrentActiveIndex = (index, list) => {
    if (list[index]) {
      setCurrentIndex(index)
    } else {
      overflowCallback()
      setCurrentIndex(setInitialIndexValue ? 0 : null)
    }
  }

  return [currentIndex, setCurrentActiveIndex]
}

export default useListTracker
