import React from 'react';
import {useNavigate} from 'react-router-dom';
import {useState}from 'react';
import './App.css';
import logo1 from './성수.PNG';


function Home() {
    let [like,likeup] = useState(0);
    let navigate=useNavigate();
    return(
        <div className="App">
            <div className="black-bar">
                <div style={{color:'white', fontSize:'15px'}}>Lee Hyung Kyung</div> 
                
            </div>
            <div className="loginbtn">
                    <button class="float-right" onClick={()=>navigate('/login')}>로그인</button>
            </div>
            <div className="list">
                <h3>성수동 감성 카페<span onClick={()=>{likeup(like+1)}}> 👍</span>{like}</h3>
                <p>작성일:2022.01.16</p>
                <p><img src={logo1} align="left"/> <pre><br/><br/><br/><br/><br/><br/>    🥨성수 커피가 맛있는 곳   <a href = "https://www.google.com/search?q=%EA%B5%AC%EC%9A%B1%ED%9D%AC%EC%94%A8&biw=992&bih=585&tbm=lcl&sxsrf=AOaemvKGZNWIejYMb5wFcbe84ZdPgWGgcw%3A1642339428704&ei=ZBzkYeq1Kpfd2roPmK2VYA&oq=%EA%B5%AC%EC%9A%B1&gs_l=psy-ab.3.0.0i512k1l8j0i512i10k1l2.6406.7730.0.9931.6.6.0.0.0.0.128.246.0j2.3.0....0...1c.1j4.64.psy-ab..3.3.376.10..35i362i39k1j35i39k1j0i512i263i433i131i20k1j0i512i433k1j0i512i433i131k1.130.tWFI91zQdvU#rlfi=hd:;si:;mv:[[37.54723567731903,127.0421529995747],[37.546875722680966,127.0416990004253]]"> 감성카페 바로지도 클릭</a><br/>    🥨성수 케이크 맛있는 곳<br/>    🥨성수 베이커리가 맛있는 곳<br/>    🥨성수 머핀이 맛있는 곳<br/></pre></p>
                <br/><br/><br/><br/><br/><br/>
                <hr/>
            </div>
            <div className="list">
                <h3>망원동 감성 카페<span onClick={()=>{likeup(like+1)}}> 👍</span>{like}</h3>
                <p>작성일:2022.01.16</p>
                <p><img src={logo1} align="left"/> <pre><br/><br/><br/><br/><br/><br/>    🥨망원 커피가 맛있는 곳<br/>    🥨망원 케이크 맛있는 곳<br/>    🥨망원 베이커리가 맛있는 곳<br/>    🥨망원 머핀이 맛있는 곳<br/></pre></p>
                <br/><br/><br/><br/><br/><br/>
                <hr/>
            </div>
            <div className="list">
                <h3>연남동 감성 카페<span onClick={()=>{likeup(like+1)}}> 👍</span>{like}</h3>
                <p>작성일:2022.01.16</p>
                <p><img src={logo1} align="left"/> <pre><br/><br/><br/><br/><br/><br/>    🥨연남 커피가 맛있는 곳<br/>    🥨연남 케이크 맛있는 곳<br/>    🥨연남 베이커리가 맛있는 곳<br/>    🥨연남 머핀이 맛있는 곳<br/></pre></p>
                <br/><br/><br/><br/><br/><br/>
                <hr/>
            </div>
        </div>
    );
}

export default Home;