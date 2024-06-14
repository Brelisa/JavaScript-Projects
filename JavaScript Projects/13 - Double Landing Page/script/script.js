// .container 클래스를 가진 요소를 선택
const containerEl = document.querySelector(".container");

// .left 클래스를 가진 요소를 선택
const leftEl = document.querySelector(".left");

// .right 클래스를 가진 요소를 선택
const rightEl = document.querySelector(".right");

// leftEl에 마우스가 들어올 때 실행될 이벤트 리스너를 추가
leftEl.addEventListener("mouseenter", () => {
    // containerEl에 active-left 클래스를 추가
    containerEl.classList.add("active-left")
});

// leftEl에 마우스가 들어올 때 실행될 이벤트 리스너를 추가
leftEl.addEventListener("mouseleave", () => {
    // containerEl에 active-left 클래스를 제거
    containerEl.classList.remove("active-left")
});

// rightEl 마우스가 들어올 때 실행될 이벤트 리스너를 추가
rightEl.addEventListener("mouseenter", () => {
    // containerEl에 active-right 클래스를 추가
    containerEl.classList.add("active-right")
});

// leftEl에 마우스가 들어올 때 실행될 이벤트 리스너를 추가
rightEl.addEventListener("mouseleave", () => {
    // containerEl에 active-right 클래스를 제거
    containerEl.classList.remove("active-right")
});