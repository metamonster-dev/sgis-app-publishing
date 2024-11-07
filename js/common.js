
/* .inp 포함된 inp_wrap 기능 */
document.querySelectorAll('.inp_wrap .inp').forEach((el)=>{

    /* remove_btn */
    if(el.querySelector('.remove_btn')){
        el.querySelector('input').addEventListener('input', (e)=>{
            if(e.target.value != ''){
                el.querySelector('.remove_btn').style.display = 'block'
            }else{
                el.querySelector('.remove_btn').style.display = 'none'
            }
        })
        el.querySelector('input').addEventListener('focusin', (e)=>{
            if(e.target.value != ''){
                el.querySelector('.remove_btn').style.display = 'block'
            }else{
                el.querySelector('.remove_btn').style.display = 'none'
            }
        })
        el.querySelector('input').addEventListener('focusout', (e)=>{
            setTimeout(()=>{
                el.querySelector('.remove_btn').style.display = 'none'
            }, 100)
        })
        el.querySelector('.remove_btn').addEventListener('click', (e)=>{
            el.querySelector('input').value = ''
            el.querySelector('input').focus()
            e.target.style.display = 'none'
        })
    }

    /* eye_icon */
    if(el.querySelector('.eye_icon')){
        el.querySelector('input').addEventListener('input', (e)=>{
            if(e.target.value != ''){
                el.querySelector('.eye_icon').style.display = 'block'
            }else{
                el.querySelector('.eye_icon').style.display = 'none'
            }
        })
        el.querySelector('.eye_icon').addEventListener('click', (e)=>{
            console.log(e.target.classList.contains('active'))
            if(e.target.classList.contains('active')){
                el.querySelector('input').type = 'password'
                e.target.classList.remove('active')
            }else{
                el.querySelector('input').type = 'text'
                e.target.classList.add('active')
            }
        })
    }
})


/* tab_btns 이벤트 */
document.querySelectorAll('.tab_btns .tab_btn').forEach((btn) => {
    btn.addEventListener('click', (el)=>{
        let allBtns = el.target.closest('.tab_btns').querySelectorAll('.tab_btn')
        let _target = el.target.closest('.tab_btn')
        allBtns.forEach((el)=>{el.classList.remove('active')})
        _target.classList.add('active')
    })
})

/* 팝업 오픈 이벤트 */
function popOpen(popId){
    document.querySelector(popId).classList.add('active')
}

/* 팝업 클로즈 이벤트 */
function popClose(popId){
    document.querySelector(popId).classList.remove('active')
}

/* 토스트 팝업 오픈 */
function toastOpen(msg){
    if(msg){
        let toastPop = document.createElement('DIV')
        toastPop.classList.add('toast_pop')
        toastPop.innerHTML = msg
        document.querySelector('body').appendChild(toastPop)
        setTimeout(function(){
            toastPop.remove()
        }, 3000)
    }else{
        console.log('토스트 팝업 메세지 없음!')
    }
}

/* bottom sheet 팝업 오픈 */
function btmSheetOpen(popId){
    document.querySelector(popId).classList.add('active')
    setTimeout(()=>{
        document.querySelector(popId).classList.add('active_ani')
    }, 10)
}

/* bottom sheet 팝업 클로즈 */
function btmSheetClose(popId){
    document.querySelector(popId).classList.remove('active_ani')
    setTimeout(()=>{
        document.querySelector(popId).classList.remove('active')
    }, 500)
}

// 대분류별 중분류 데이터 설정
const subCategories = {
    "1": [
      { value: "1-1", text: "그루지아" },
      { value: "1-2", text: "그리스" },
      { value: "1-3", text: "네덜란드" },
      { value: "1-4", text: "노르웨이" },
      { value: "1-5", text: "덴마아크" },
      { value: "1-6", text: "독일" },
      { value: "1-7", text: "라트비아" },
      { value: "1-8", text: "러시아" },
      { value: "1-9", text: "루마니아" },
      { value: "1-10", text: "룩셈부르크" },
      { value: "1-11", text: "리투아니아" },
      { value: "1-12", text: "리히텐스타인" },
      { value: "1-13", text: "마케도니아" },
      { value: "1-14", text: "모나코" },
      { value: "1-15", text: "몰도바" },
      { value: "1-15", text: "몰타" },
      { value: "1-16", text: "바티칸" },
      { value: "1-17", text: "버뮤다" },
      { value: "1-18", text: "벨기에" },
      { value: "1-19", text: "벨라루스" },
      { value: "1-20", text: "보스니아 헤르체코비나" },
      { value: "1-21", text: "불가리아" },
      { value: "1-22", text: "사이프러스" },
      { value: "1-23", text: "산마리노" },
      { value: "1-24", text: "스웨덴" },
      { value: "1-25", text: "스위스" },
      { value: "1-26", text: "스페인" },
      { value: "1-27", text: "슬로바키아" },
      { value: "1-28", text: "슬로베니아" },
      { value: "1-29", text: "아이슬랜드" },
      { value: "1-30", text: "아일랜드" },
      { value: "1-31", text: "아제르바이젠" },
      { value: "1-32", text: "안도라" },
      { value: "1-33", text: "알바니아" },
      { value: "1-34", text: "에스토니아" },
      { value: "1-35", text: "영국" },
      { value: "1-36", text: "오스트리아" },
      { value: "1-37", text: "우크라이나" },
      { value: "1-38", text: "유고" },
      { value: "1-39", text: "이태리" },
      { value: "1-40", text: "지브롤터" },
      { value: "1-41", text: "체코" },
      { value: "1-42", text: "크로아티아" },
      { value: "1-43", text: "터어키" },
      { value: "1-44", text: "포르투갈" },
      { value: "1-45", text: "폴란드" },
      { value: "1-46", text: "프랑스" },
      { value: "1-47", text: "핀랜드" },
      { value: "1-48", text: "헝가리" },
      { value: "1-49", text: "세르비아" },
      { value: "1-50", text: "몬테네그로" }
    ],
    "2": [
        { value: "2-1", text: "네팔" },
        { value: "2-2", text: "라오스" },
        { value: "2-3", text: "레바논" },
        { value: "2-4", text: "마카오" },
        { value: "2-5", text: "말레이지아" },
        { value: "2-6", text: "몰디브" },
        { value: "2-7", text: "몽골" },
        { value: "2-8", text: "미얀마" },
        { value: "2-9", text: "바레인" },
        { value: "2-10", text: "방글라데시" },
        { value: "2-11", text: "베트남" },
        { value: "2-12", text: "부탄" },
        { value: "2-13", text: "브루나이" },
        { value: "2-14", text: "사우디아라비아" },
        { value: "2-15", text: "스리랑카" },
        { value: "2-15", text: "시리아" },
        { value: "2-16", text: "싱가포르" },
        { value: "2-17", text: "아랍에미리트공화국" },
        { value: "2-18", text: "아르메니아" },
        { value: "2-19", text: "아프가니스탄" },
        { value: "2-20", text: "예멘" },
        { value: "2-21", text: "오만" },
        { value: "2-22", text: "요르단" },
        { value: "2-23", text: "우즈베키스탄" },
        { value: "2-24", text: "이라크" },
        { value: "2-25", text: "이란" },
        { value: "2-26", text: "이스라엘" },
        { value: "2-27", text: "인도" },
        { value: "2-28", text: "인도네시아" },
        { value: "2-29", text: "일본" },
        { value: "2-30", text: "중국" },
        { value: "2-31", text: "카자흐스탄" },
        { value: "2-32", text: "카타르" },
        { value: "2-33", text: "캄보디아" },
        { value: "2-34", text: "쿠웨이트" },
        { value: "2-35", text: "키르키즈스탄" },
        { value: "2-36", text: "태국(타이)" },
        { value: "2-37", text: "타이완" },
        { value: "2-38", text: "타지키스탄" },
        { value: "2-39", text: "투르크메니스탄" },
        { value: "2-40", text: "티모르" },
        { value: "2-41", text: "파키스탄" },
        { value: "2-42", text: "필리핀" },
        { value: "2-43", text: "홍콩" },
        { value: "2-44", text: "팔레스타인" }
    ],
    "3": [
        { value: "3-1", text: "가나" },
        { value: "3-2", text: "가봉" },
        { value: "3-3", text: "감비아" },
        { value: "3-4", text: "기니" },
        { value: "3-5", text: "기니비소" },
        { value: "3-6", text: "까뽀베르데" },
        { value: "3-7", text: "나미비아" },
        { value: "3-8", text: "나이지리아" },
        { value: "3-9", text: "남아공화국" },
        { value: "3-10", text: "니제르" },
        { value: "3-11", text: "리베리아" },
        { value: "3-12", text: "레소토" },
        { value: "3-13", text: "르완다" },
        { value: "3-14", text: "리비아" },
        { value: "3-15", text: "마다가스타르" },
        { value: "3-15", text: "말라위" },
        { value: "3-16", text: "말리" },
        { value: "3-17", text: "모로코" },
        { value: "3-18", text: "모리셔스" },
        { value: "3-19", text: "모리타니아" },
        { value: "3-20", text: "모잠비크" },
        { value: "3-21", text: "베넹" },
        { value: "3-22", text: "보츠와나" },
        { value: "3-23", text: "부룬디" },
        { value: "3-24", text: "부르키나파소" },
        { value: "3-25", text: "생 토메 프린시페" },
        { value: "3-26", text: "세네갈" },
        { value: "3-27", text: "세이쉘" },
        { value: "3-28", text: "소말리아" },
        { value: "3-29", text: "수단" },
        { value: "3-30", text: "스와질랜드" },
        { value: "3-31", text: "시에라리온" },
        { value: "3-32", text: "알제리" },
        { value: "3-33", text: "앙골라" },
        { value: "3-34", text: "에리트리아" },
        { value: "3-35", text: "우간다" },
        { value: "3-36", text: "이디오피아" },
        { value: "3-37", text: "이집트" },
        { value: "3-38", text: "자이레" },
        { value: "3-39", text: "잠비아" },
        { value: "3-40", text: "적도기네" },
        { value: "3-41", text: "중앙아프리카" },
        { value: "3-42", text: "지부티" },
        { value: "3-43", text: "짐바브웨" },
        { value: "3-44", text: "챠드" },
        { value: "3-45", text: "카메룬" },
        { value: "3-46", text: "케냐" },
        { value: "3-47", text: "코트디브와르" },
        { value: "3-48", text: "콩고" },
        { value: "3-49", text: "탄자니아" },
        { value: "3-50", text: "토고" },
        { value: "3-51", text: "투니시아" },
        { value: "3-52", text: "콩고민주공화국" },
        { value: "3-53", text: "남수단" }
    ],
    "4": [
      { value: "4-1", text: "괌" },
      { value: "4-2", text: "나우루" },
      { value: "4-3", text: "뉴질랜드" },
      { value: "4-4", text: "뉴칼레도니아" },
      { value: "4-5", text: "마샬군도" },
      { value: "4-6", text: "마이크로네시아" },
      { value: "4-7", text: "바누아투" },
      { value: "4-8", text: "사이판(북마리아나제도)" },
      { value: "4-9", text: "서사모아" },
      { value: "4-10", text: "솔로몬군도" },
      { value: "4-11", text: "키리바시" },
      { value: "4-12", text: "통가" },
      { value: "4-13", text: "투발루" },
      { value: "4-14", text: "파푸아뉴기니" },
      { value: "4-15", text: "팔라우" },
      { value: "4-16", text: "피지" }
    ],
    "5": [
      { value: "5-1", text: "미국" },
      { value: "5-2", text: "알바니아" },
      { value: "5-3", text: "캐나다" }
    ],
    "6": [
      { value: "6-1", text: "가이아나" },
      { value: "6-2", text: "과테말라" },
      { value: "6-3", text: "그레나다" },
      { value: "6-4", text: "기아나" },
      { value: "6-5", text: "니카라과" },
      { value: "6-6", text: "도미니카" },
      { value: "6-7", text: "도미니카공화국" },
      { value: "6-8", text: "멕시코" },
      { value: "6-9", text: "바베이도스" },
      { value: "6-10", text: "바하마" },
      { value: "6-11", text: "버어진 아일랜드" },
      { value: "6-12", text: "베네수엘라" },
      { value: "6-13", text: "벨리즈" },
      { value: "6-14", text: "볼리비아" },
      { value: "6-15", text: "브라질" },
      { value: "6-16", text: "세인트루시아" },
      { value: "6-17", text: "세인트빈센트그레나딘" },
      { value: "6-18", text: "세인트 키츠 네비스" },
      { value: "6-19", text: "수리남" },
      { value: "6-20", text: "아르헨티나" },
      { value: "6-21", text: "아이티" },
      { value: "6-22", text: "에쿠아도르" },
      { value: "6-23", text: "엘살바도르" },
      { value: "6-24", text: "온두라스" },
      { value: "6-25", text: "우루과이" },
      { value: "6-26", text: "자메이카" },
      { value: "6-27", text: "칠레" },
      { value: "6-28", text: "케이멘군도" },
      { value: "6-29", text: "코스타리카" },
      { value: "6-30", text: "콜롬비아" },
      { value: "6-31", text: "쿠바" },
      { value: "6-32", text: "트리니다드 토바고" },
      { value: "6-33", text: "파나마" },
      { value: "6-34", text: "파라과이" },
      { value: "6-35", text: "페루" },
      { value: "6-36", text: "푸에리토리코" }
    ]
  };
  
  // 대분류 select box 요소와 중분류 select box 요소 선택
  const mainCategorySelect = document.getElementById("main-category");
  const subCategorySelect = document.getElementById("sub-category");
  
  // 대분류 선택 시 중분류 업데이트 함수
  mainCategorySelect.addEventListener("change", () => {
    const selectedCategory = mainCategorySelect.value;
  
    // 중분류 초기화
    subCategorySelect.innerHTML = '<option value="">선택</option>';
  
    // 선택된 대분류에 해당하는 중분류 목록 생성
    if (selectedCategory && subCategories[selectedCategory]) {
      subCategories[selectedCategory].forEach(sub => {
        const option = document.createElement("option");
        option.value = sub.value;
        option.text = sub.text;
        subCategorySelect.add(option);
      });
    }
  });