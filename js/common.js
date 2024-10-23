
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

function btmSheetOpen(popId){
    document.querySelector(popId).classList.add('active')
    setTimeout(()=>{
        document.querySelector(popId).classList.add('active_ani')
    }, 10)
}

function btmSheetClose(popId){
    document.querySelector(popId).classList.remove('active_ani')
    setTimeout(()=>{
        document.querySelector(popId).classList.remove('active')
    }, 500)
}