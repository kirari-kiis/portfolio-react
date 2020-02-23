import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './index.css'
import homeUrl from './images/HOME.png'
import aboutUrl from './images/ABOUT.png'
import worksUrl from './images/WORKS.png'
import contactUrl from './images/CONTACT.png'
import About from './about/about';
import Works from './works/works';
import Contact from './contact/contact';

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
        } else if (this.state.slide === 0) {
            return null
        } else if (this.state.slide === 1) {
            return 'about'
        } else if (this.state.slide === 2) {
            return 'works'
        } else if (this.state.slide === 3) {
            return 'contact'

        }
    }

    

    render() {
        return (
            <div >
            <div id='top'>
            <p id='name'>KIRARI INAOKA</p>
            <div id="mark-top">
            <a id="facebook" href="#"><i className="fab fa-facebook fa-2x"></i></a>
                <a id="twitter" href="https://twitter.com/ral08652385"><i className="fab fa-twitter fa-2x"></i></a>
                <a id="github" href="https://github.com/kirari-kiis"><i className="fab fa-github fa-2x"></i></a>
            </div>
            <h1>Portfolio</h1>
            <p　id="topp">エンジニアを目指す学生のポートフォリオです。
            </p>
            <p id="topright">I'm in The Kyushu Institute of Information Sciences</p>
            <div id='btn_wrapper'><a href="#profile" className="btn-gradient-simple">Scroll</a></div>
            <LinkButton actionSlide={(entry) => this.slide(entry)} />
            
                <div className='wrapper_about' id='inline'>
                    {this.judge() == 'about' ? (<h3 className={this.judge()} id="aboutlogo">About</h3>
                    ):(<h3 id="aboutlogo">About</h3>)
                    }
                    <About />
                </div>
                <div className="parallax-bg img-bg-01" id="inline"></div>
                <div className='wrapper_work' id='inline'>
                    {this.judge() == 'works' ? (<h3 className={this.judge()}  id="workslogo">Works</h3>
                    ):(<h3 id="workslogo">Works</h3>)
                    }
                    <Works />
                </div>
                <div className="parallax-bg img-bg-02" id="inline"></div>
                <div className='wrapper_contact' id='inline'>
                    {this.judge() == 'contact' ? (<h3 className={this.judge()} id="contactlogo">Contact</h3>
                    ):(<h3 id="contactlogo">Contact</h3>)
                    }   
                    
                    <Contact />
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
            <a id='aboutlink' href='#profile' onClick={() => props.actionSlide(1)}><img src={aboutUrl} alt='' /></a><br/>
            <a id='workslink' href='#works' onClick={() => props.actionSlide(2)}><img src={worksUrl} alt='' /></a><br/>
            <a id='contactlink' href='#contact' onClick={() => props.actionSlide(3)}><img src={contactUrl} alt='' /></a><br/>
        </div>
    )
}
LinkButton.propTypes = {
    actionSlide: PropTypes.func
}






export default Portfolio;
