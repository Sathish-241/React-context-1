import React from 'react'

const languageContext = React.createContext({
  activeLanguage: 'EN',
  changeActiveLanguage: () => {},
})

export default languageContext
