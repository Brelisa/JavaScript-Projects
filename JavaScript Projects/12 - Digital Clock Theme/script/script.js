let section = document.querySelector("section"),
    icons = document.querySelector(".icons");

// 아이콘을 클릭하면 섹션의 클래스에 'dark'를 토글
icons.onclick = () => {
    section.classList.toggle("dark");
};

// 함수를 생성하고 매초마다 호출
setInterval(() => {
    let date = new Date(),
        hour = date.getHours(),
        min = date.getMinutes(),
        sec = date.getSeconds();

    let d;
    d = hour < 12 ? "AM" : "PM"; // 시간()이 12보다 작으면 AM, 그렇지 않으면 PM
    hour = hour > 12 ? hour - 12 : hour; // 시간이 12보다 크면 12를 빼서 이하의 값으로 변경
    hour = hour == 0 ? (hour = 12) : hour; // 시간이 0이면 12로 설정

    // 값이 10보다 작으면 앞에 0을 추가
    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;   
    sec = sec < 10 ? "0" + sec : sec;

    // 시, 분, 초, 오전/오후 표시를 업데이트
    document.querySelector(".hour_num").innerText = hour;
    document.querySelector(".min_num").innerText = min;
    document.querySelector(".sec_num").innerText = sec;
    document.querySelector(".am_pm").innerText = d;
    
}, 1000)