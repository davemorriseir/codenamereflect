import { useState } from 'react'

/**
 * Hook to Manage navigationg through survey sections and questions
 * in the Survey System
 * @param {*} list
 * @param {*} setInitialIndexValue
 * @param {*} completeCallback
 */
const useActiveSurveyItem = (setInitialIndexValue = true, completeCallback) => {
  const [currentIndex, setCurrentIndex] = useState(
    setInitialIndexValue ? 0 : null
  )

  const setCurrentActiveItem = (index, list) => {
    if (list[index]) {
      setCurrentIndex(index)
    } else {
      completeCallback()
      setCurrentIndex(setInitialIndexValue ? 0 : null)
    }
  }

  return [currentIndex, setCurrentActiveItem]
}

export default useActiveSurveyItem
