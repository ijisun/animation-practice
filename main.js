let mainText = document.querySelector("h1")

window.addEventListener('scroll',function() {
  let value = window.scrollY;
  
  /*
  // 스크롤 값 확인용
  console.log("scrollY",value);
  */

  if(value>250) {
    // forwards 를 추가하면 왼쪽으로 이동하고 다시 돌아오지 않음
    mainText.style.animation = 'slideBack 1s ease-out forwards';
  }
  else {
    mainText.style.animation = 'slide 1s ease-out';
  }
})