import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './index.css'
import homeUrl from './images/HOME.png'
import aboutUrl from './images/ABOUT.png'
import skillUrl from './images/SKILL.png'
import contactUrl from './images/CONTACT.png'

class Portfolio extends Component{
    constructor(props) {
        super(props)
        this.state = {slide: null}
    }
    slide(entry) {
        this.setState({slide: entry})
    }

    judge() {
        if (this.state.slide == null){
            return null
        } else if (this.state.slide == 0) {
            return 'home'
        } else if (this.state.slide == 1) {
            return 'about'
        } else if (this.state.slide == 2) {
            return 'skill'
        } else if (this.state.slide == 3) {
            return 'contact'
        }
    }

    

    render() {
        return (
            <div id='slide'>
            <div id='top'>
            <p id='name'>KIRARI INAOKA</p>
            <h1>Portfolio</h1>
            <div id='btn_wrapper'><button id='topbtn'>Go!</button></div>
            <LinkButton actionSlide={(entry) => this.slide(entry)} />
            
                <div id='about'>
                    <h2>profile</h2>
                    <h3 className={this.judge()}>ABOUT</h3>
                </div>
                <div id='skill'>
                    <h2>skill</h2>
                    <h3 className={this.judge()}>SKILL</h3>
                </div>
                <div id='contact'>
                    <h2>contact</h2>
                    <h3 className={this.judge()}>CONTACT</h3>
                </div>
                </div>
            </div> 
        )
    }
}

const LinkButton = (props) => {
    return (
        <div>
            <a id='homelink' href='#back' onClick={() => props.actionSlide(0)}><img src={homeUrl} alt='' /></a><br/>
            <a id='aboutlink' href='#about' onClick={() => props.actionSlide(1)}><img src={aboutUrl} alt='' /></a><br/>
            <a id='skilllink' href='#skill' onClick={() => props.actionSlide(2)}><img src={skillUrl} alt='' /></a><br/>
            <a id='contactlink' href='#contact' onClick={() => props.actionSlide(3)}><img src={contactUrl} alt='' /></a><br/>
        </div>
    )
}
LinkButton.propTypes = {
    actionSlide: PropTypes.func
}




export default Portfolio;
