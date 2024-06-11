// "roll-button" ID를 가진 버튼 요소를 선택
const buttonEl = document.getElementById("roll-button");

// "dice" ID를 가진 주사위 요소를 선택
const diceEl = document.getElementById("dice");

// "roll-history" ID를 가진 롤 기록 요소를 선택
const rollHistoryEl = document.getElementById("roll-history");

// 주사위 쿨림 결과를 저장할 배열을 초기화
let historyList = [];

// 주사위를 굴리는 함수
function rollDice() {
    // 1 부터 6까지의 무작위 정수를 생성
    const rollResult = Math.floor(Math.random() * 6) + 1;
    // 생성된 숫자에 해당하는 주사위 면을 가져옴
    const diceFace = getDiceFace(rollResult);
    // 주사위 요소의 내용을 주사위 면으로 업데이트
    diceEl.innerHTML = diceFace;
    // 굴림 결과를 기록 리스트에 추가
    historyList.push(rollResult);
    // 롤 기록을 업데이트
    updateRollHistory();
}

// 롤 기록을 업데이트하는 함수
function updateRollHistory() {
    // 롤 기록 요소의 내용을 초기화
    rollHistoryEl.innerHTML = "";

    // 기록된 모든 굴림 결과를 반복
    for(let i = 0; i < historyList.length; i++){
        // 새 리스트 아이템 요소를 생성
        const listItem = document.createElement("li");
        // 리스트 아이템의 내용을 설정
        listItem.innerHTML = `Roll ${i + 1}: <span>${getDiceFace(historyList[i])}</span>`;
        // 롤 기록 요소에 리스트 아이템을 추가
        rollHistoryEl.appendChild(listItem);
    }
}

// 주사위 면을 반환하는 함수
function getDiceFace(rollResult) {
    switch (rollResult) {
        case 1:
            return "&#9856;";
        case 2:
            return "&#9857;";
        case 3:
            return "&#9858;";
        case 4:
            return "&#9859;";
        case 5:
            return "&#9860;";
        case 6:
            return "&#9861;";
    }
}

// 버튼 요소를 클릭 이벤트 리스너를 추가
buttonEl.addEventListener("click", () => {
    // 주사위 요소에 "roll-animation" 클래스를 추가
    diceEl.classList.add("roll-animation");

    // 1초 후에 애니메이션을 제거하고 주사위를 굴림
    setTimeout(() => {
        diceEl.classList.remove("roll-animation");
        rollDice();
    }, 1000)
})