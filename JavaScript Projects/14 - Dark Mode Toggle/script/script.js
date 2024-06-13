// .input 클래스를 가진 요소를 선택
const inputEl =document.querySelector(".input");

// body 요소를 선택
const bodyEl =document.querySelector("body");

// localStorage에서 "mode" 값을 가져와 JSON으로 변환 후 inputEl의 checked 속성에 설정
inputEl.checked = JSON.parse(localStorage.getItem("mode"));

// body의 배경색을 업데이트하는 함수
updateBody();

// body의 배경색을 inputEl의 상태에 따라 업데이트
function updateBody() {
    if (inputEl.checked) {
        // inputEl이 체크되어 있으면 body의 배경색을 검정으로 설정
        bodyEl.style.background = "black";
    } else {
        // inputEl이 체크되어 있지 않으면 body의 배경색을 흰색으로 설정
        bodyEl.style.background = "white";
    }
}

// inputEl에 'input' 이벤트 리스너를 추가
inputEl.addEventListener("input", () => {
    // body의 배경색을 업데이트
    updateBody();
    // LocalStorage를 업데이트
    updateLocalStorage();
});

// LocalStorage에 inputEl의 현재 상태를 저장
function updateLocalStorage() {
    // inputEl의 check 상태를 JSON 문자열로 변환하여 LocalStorage에 "mode" 키로 저장
    localStorage.setItem("mode", JSON.stringify(inputEl.checked));
}