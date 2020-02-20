import React from 'react';
import './about.css';
import HTML from '../images/html.png'
import RAILS from '../images/rails.png'
import REACT from '../images/react.png'
import FLASK from '../images/flask.png'
const About = () =>{
    return(
        <div id="about">
            <div id="proc">
            <div id="profile">
                <h2 id="prologo">PROFILE</h2>
                <p>Name:   稲岡希良梨</p>
                <p>Univercity:  九州情報大学</p>
                <p>Birthday:  1998/07/09</p>
                <br />
                <p>2017/03  熊本北高校卒業</p>
                <p>2017/03  九州情報大学　経営情報学部　情報ネットワーク学科  入学</p>
                <p>2018/09  プログラミングを始める（php）</p>
                <p>2019/08〜12  チャレンジキャラバンに参加（2チームでフロントエンドを担当）</p>
            </div>
            </div>
            <div id="skill">
                <h2 id="skilllogo">SKILL</h2>
                
                <div id="list"><img src={HTML} alt='' width='100' height='100'/>
                <h4>HTML/CSS</h4>
                <p>基本的なHTML/CSSは開発において使用。</p></div>
                <div id="list"><img src={RAILS} alt='' width='130' height='100'/>
                <h4>Ruby/Ruby on rails</h4>
                <p>チャレンジキャラバンに参加した際に学習した。1つのチームでRuby on Railsを使用してアプリを制作した。</p></div>
                <div id="list"><img src={FLASK} alt='' width='150' height='100'/>
                <h4>Python/Flask</h4>
                <p>機械学習に興味を持ち、Pythonを学習した。現在は卒業研究でFlaskを使用したLINEのチャットボットを開発中。</p></div>
                <div id="list"><img src={REACT} alt='' width='100' height='100'/>
                <h4>Javascript/React</h4>
                <p>チャレンジキャラバンに参加した際にフロントエンドを担当したことをきっかけに学習を開始。
                現在はReactを学習中。Reactを使用してポートフォリオサイトを制作</p></div>
            </div>
        </div>
    )
}

export default About;