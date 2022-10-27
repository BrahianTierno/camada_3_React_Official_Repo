import React from 'react'
import Welcome from './components/welcome/Welcome'
import { Header } from './components/week_1/class_3/Header'
import PersonalInfromation from './components/week_1/class_3/PersonalInfromation'
import WorkLife from './components/week_1/class_3/WorkLife'
import Footer from './components/week_1/class_3/Footer'
import ClassComponent from './components/week_2/class_1/ClassComponent'
import FunctionalCompoenet from './components/week_2/class_1/FunctionalComponent'
import { MockComponent } from './components/week_2/class_1/MockComponent'

const App = () => {
    const greeting = {
        hello : "Soy componente de clase",
        subText: "Soy el hijo de class component"
    }
    return (<div><Header />
            <PersonalInfromation/><WorkLife/><Footer/><ClassComponent saludo ={greeting}/>
            <FunctionalCompoenet/> <MockComponent message="Soy el hijo, pero desde app"/> </div>)
}

export default App