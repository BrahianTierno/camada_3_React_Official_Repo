import React, {Component} from "react";
import { MockComponent } from "./MockComponent";
class ClassComponent extends Component {
    constructor(props){
        super(props)
    }
    //En este espacio

    render(){
        const {saludo}= this.props;
        return(<div>
            <h1>{saludo.hello}</h1>
            <MockComponent message= {saludo.subText}/>
        </div>)
    }

}
 export default ClassComponent;