export const createContent = () => {
  const root = document.getElementById('root');

  root.innerHTML = `
    <div id="text1">
      <p id="intro">WELCOME TO <span style="color:#F13582;font-family:sans-serif;">빵울</span> PLACE</p>
    </div>

    <div id="sideBtn">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>

    <div id="text2">
      <div id="text2Box1">
        <div>
          <ul id="profile">
            <li><span style="font-size: 25px;">이 름 :</span> 채 빵 울</li>
            <li><span style="font-size: 25px;">나 이 :</span> 미상</li>
            <li><span style="font-size: 25px;">별 명 :</span> 개구리</li>
            <li><span style="font-size: 25px;">취 미 :</span> 수면</li>
            <li><span style="font-size: 25px;">특 기 :</span> 음식섭취</li>
          </ul>
        </div>
        <div id="profileImg">
          <div id="HS"></div>
        </div>
      </div>
      <div id="text2Box2">
        <div>
          적당한 애교와 적당한 난폭함을 겸비함.<br>
          매사 똑부러지는 성격으로 주위의 평판이 좋음.<br>
          집에 있으면 심심해 하지만 집밖으로 나가는걸 싫어하는<br>
          전형적인 집순이.<br>
          음식 솜씨가 꽤 훌륭한 편이며 손이 굉장히 크다.<br>
          음식과 음주를 진심으로 사랑하며 우선순위에서도 남편이 밀려남.<br>
          겁이 굉장히 많으며 '채복치'라는 타이틀과 걸맞는 행동거지를 보임.
        </div>
        <div id="frog">
          <div id="frogImg"></div>
        </div>
      </div>
    </div>

    <div id="text3">
      <div id="text3Box">
        <div id="photo1"></div>
        <div id="photo2"></div>
        <div id="photo3"></div>
        <div id="photo4"></div>
      </div>
    </div>

    <div id="text4Box">
      <div>
        <div id="wed1"></div>
        <div id="wed2"></div>
      </div>
      <div id="text4BoxText">
        <p>2018.11.10♥</p>
      </div>
    </div>

    <div id="text5"></div>
    <div id="footer"></div>
    </div>
  `;
}


////////////////////////////////////////////////////////
const getUrlImagePath = (filename) => {
  const imageTopPath = './assets';
  return `url(${imageTopPath}/${filename})`;
}

export const loadImages = () => {
  const profileImg = document.getElementById('profileImg');
  const childDiv = profileImg.getElementsByTagName('div');
  childDiv[0].style.backgroundImage = getUrlImagePath('메인3.jpg');
  
  const frogDiv = document.getElementById('frog').getElementsByTagName('div');
  frogDiv[0].style.backgroundImage = getUrlImagePath('개구리.png');
  
  const imgList = {
    'photo1': '메인.jpg',
    'photo2': '메인4.jpg',
    'photo3': '메인6.jpg',
    'photo4': '메인2.jpg',
    'wed1': '웨딩.jpg',
    'wed2': '웨딩2.jpg'
  };
  const keyList = Object.keys(imgList);
  keyList.forEach(key => {
    document.getElementById(key).style.backgroundImage = getUrlImagePath(imgList[key]);
  });

  
  const text3 = document.getElementById("text3");
    
  
 

 
  //  document.getElementById('photo1').style.backgroundImage = getUrlImagePath('메인.jpg');
  //  document.getElementById('photo2').style.backgroundImage = getUrlImagePath('메인4.jpg');
  //  document.getElementById('photo3').style.backgroundImage = getUrlImagePath('메인6.jpg');
  //  document.getElementById('photo4').style.backgroundImage = getUrlImagePath('메인2.jpg');

}
