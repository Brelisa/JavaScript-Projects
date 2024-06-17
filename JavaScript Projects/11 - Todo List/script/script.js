// 필요한 모든 요소를 가져옴
const inputField = document.querySelector(".input-field textarea"),
 todoLists = document.querySelector(".todoLists"),
 pendingNum = document.querySelector(".pending-num"),
 clearButton = document.querySelector(".clear-button");

// 이 함수는 작업을 추가, 삭제, 체크/체크 해체할 떄 호출됨
function allTasks(){
    let tasks = document.querySelectorAll(".pending");

    // 작업의 길이가 0이면 pending num 텍스트 내용은 "no", 그렇지 않으면 작업의 길이로 설정
    pendingNum.textContent = tasks.length === 0 ? "no" : tasks.length;

    let allLists = document.querySelectorAll(".list");
    if(allLists.length > 0){
        todoLists.style.marginTop = "20px";
        clearButton.style.pointerEvents = "auto";
        return;
    }
    todoLists.style.marginTop = "0px";
    clearButton.style.pointerEvents = "none";
}

// 텍스트 영역에 값을 입력하고 엔터를 누르면 작업 추가
inputField.addEventListener("keyup", (e) => {
    let inputVal = inputField.value.trim();
    //trim 함수는 입력된 값의 앞뒤 공백을 제거

    //엔터 버튼이 클릭되고 입력된 값의 길이가 0 보다 클 때
    if(e.key === "Enter" && inputVal.length > 0){
        let liTag = ` <li class="list pending" onclick="handleStatus(this)">
        <input type="checkbox" />
        <span class="task">${inputVal}<span>
        <i class="uil uil-trash" onclick="deleteTask(this)"></i>
        </li> ` ;

        //li 태그를 todoLis div 내부에 삽입
        todoLists.insertAdjacentHTML("beforebegin",litag);
        inputField.value = ""; //입력 필드의 값을 제거
        allTasks();
    }
});

//작업을 클릭하면 체크박스를 체크하거나 체크 해제
function handleStatus(e){
    const checkbox = e.querySelector("input"); //체크박스 가져오기
    checkbox.checked = checkbox.checked ? false : true;
    e.classList.toggle("pending");
    allTasks();
}

//삭제 아이콘을 클릭하면 작업 삭제
function deleteTask(e){
    e.parentElement.remove(); //부모 요소를 가져와서 삭제
    allTasks();
}

//클리어 버튼을 클릭하면 모든 작업 삭제
clearButton.addEventListener("click", () => {
    todoLists.innerHTML = "";
    allTasks();
});