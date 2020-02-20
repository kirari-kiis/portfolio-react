import React from 'react';
import SSS from '../images/sss.png'
import THIS from '../images/portfolio.png'
import HIMA from '../images/hima.png'
import './works.css';

const Works = () =>{
    return(
        <div id="works">
            <div id="sss">
                <a href="https://sss-pycara.herokuapp.com/"><img src={SSS} alt='' width='300' height='180'/></a>
                <p>SSS(Student Support System)</p>
                <p>チャレンジキャラバンで制作。学生の定期試験対策のために画像を共有できるアプリ。フロントエンドを担当し、
                主にjQueryを使用している。そのほかにflaskを使用している。</p>
                
            </div>
            <div id="hima">
                <a href="https://secure-fjord-93185.herokuapp.com/"><img src={HIMA} alt='' width='250' height='320'/></a>
                <p>暇人（ひまんちゅ）</p>
                <p>チャレンジキャラバンで制作。『暇な日をshare』するカレンダーアプリ。フロントエンドを担当し、主にjQueryを使用している。
                    ボタンで切り替えができるダークモードを実装した。
                </p>
                
            </div>
            <div id="this">
                <a href="https://infinite-garden-59697.herokuapp.com/"><img src={THIS} alt='' width='300' height='180'/></a>
                <p>Portfolio</p>
                <p>ポートフォリオをReactで制作。随時更新中。</p>
                
            </div>
        </div>
    )
}

export default Works;