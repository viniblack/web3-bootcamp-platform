import { contextOrder } from '../../lib/utils/constants'

export const filteredSortbar = (filters) => {
  const keysToKeep = ['Amount', 'Context Depth']

  return Object.keys(filters).reduce((sortBar, key) => {
    if (keysToKeep.includes(key)) {
      sortBar[key] = filters[key]
    }
    return sortBar
  }, {})
}

export const sortIssues = (sortBy, issues) => {
  return [...issues].sort((a, b) => {
    if (sortBy === 'Amount') {
      const amountA = a.fields.find((f) => f.field === 'Amount')?.value
      const amountB = b.fields.find((f) => f.field === 'Amount')?.value
      return amountA - amountB
    } else if (sortBy === 'contextDepth') {
      const contextA = contextOrder[a.fields.find((f) => f.field === 'Context Depth')?.value] || 0
      const contextB = contextOrder[b.fields.find((f) => f.field === 'Context Depth')?.value] || 0
      return contextA - contextB
    }
    return 0
  })
}
