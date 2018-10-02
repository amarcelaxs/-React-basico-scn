import React, { Component } from 'react'

class Translate extends Component{
    constructor(props){
        super(props)

        this.state = {
            text_to_translate: '',
            text_translated: ''
        }
        this.handleChangeTextTranslated = this.handleChangeTextTranslated.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }
    handleChangeTextTranslated(e){
            return this.setState({
                text_to_translate:e.target.value
            })
    }
    handleClick(){
        fetch('http://localhost:3000/translate',{
            method: 'POST',
            headers:{
                'Accepts': 'application/json',
                'Content-type':'application/jason'
            }
        })
        .then((response) => response.json())
        .then((data) => {
            this.setState({
				text_translated: data.text
			})
        })

    }

    render(){
        return(
            <div>
				<input type="text" name="text_to_translate" value={ this.state.text_to_translate } onChange={this.handleChangeTextTranslated}/>
				<button type="button" onClick={this.handleClick}>Translate</button>
				<hr/>
				<p>{this.state.text_translated}</p>
			</div>
        )
    }
}

export default Translate