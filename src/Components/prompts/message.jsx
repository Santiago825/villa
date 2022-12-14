import React from 'react';
import {Modal} from 'react-bootstrap';
import { isNull } from 'util';
import { isUndefined } from 'util';
import "./prompts.css"

export default class MessagePrompts extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            show:false,
         }
    }
    componentWillReceiveProps(nextProps){
        if(nextProps.show){
            this.setState({show:true},this.hideMessage());
        }
    }
    hideMessage(){
        setTimeout(()=>{
            this.setState({show:false});
        },this.props.duration );
    }
    onExited(){
        if(!isUndefined(this.props.onExited) && !isNull(this.props.onExited) ){
            this.props.onExited();
        }
    }
    render() { 
        return ( 
            <Modal id="message prompt" centered show={this.state.show}
            onExited={()=>this.onExited()} >
                <Modal.Body>
                    {
                        this.props.text
                    }
                </Modal.Body>
            </Modal>

         );
    }
}
 
