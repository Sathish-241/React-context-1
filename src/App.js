import {Component} from 'react'
import languageContext from './Context/languageContext'
import Header from './components/Header'
import LandingSection from './components/LandingSection'
import FeaturesSection from './components/FeaturesSection'

class App extends Component {
  state = {activeLanguage: 'EN'}

  changeLanguage = activeLanguage => {
    this.setState({activeLanguage})
  }

  render() {
    const {activeLanguage} = this.state
    return (
      <languageContext.Provider
        value={{activeLanguage, changeLanguage: this.changeLanguage}}
      >
        <Header />
        <LandingSection />
        <FeaturesSection />
      </languageContext.Provider>
    )
  }
}

export default App
