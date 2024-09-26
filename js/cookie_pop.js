/*
문자열.indexOf("찾을 문자열") : 전체 문자열에서 찾을 문자열이 위치해있는 순서값 반환, 만약 전체 문자열에서 찾을 문자열이 없으면 -1을 반환 

1. 모달의 닫기 버튼 클릭시 모달 안보이게 하기
2. 체크박스 선택한 뒤 닫기버튼 클릭시 모달 안보이게 함과 동시에 today=done 쿠키를 하루만료기한 생성
3. 스크립트가 처음 로딩될때 조건문으로 today=done이라는 쿠키가 있으면 팝업안보이게 처리. 없으면 보이게 처리
*/

const [btnView, btnSet, btnDel] = document.querySelectorAll("button");

const modal = document.querySelector("aside");
const btnClose = modal.querySelector("button");
const ck = modal.querySelector("#ck");

btnView.addEventListener("click", () => {
	console.log(document.cookie);
});

btnSet.addEventListener("click", () => {
	setCookie("today", "done", 1);
});

btnDel.addEventListener("click", () => {
	setCookie("today", "done", 0);
});

// 닫기 버튼 클릭시 모달 안보임 처리
btnClose.addEventListener("click", () => {
	// 닫기 버튼 클릭시 체크박스가 체크되어 있으면 쿠키 생성
	if (ck.checked) setCookie("today", "done", 1);
	modal.style.display = "none";
	// 체크를 하고 닫기하면 checked가 true가됨
	// console.dir(ck);
});
//
console.log(new Date().toUTCString());

//쿠키 생성 함수
function setCookie(name, value, day) {
	let now = new Date();

	let duedate = now.getTime() + day * 1000 * 60 * 60 * 24;

	now.setTime(duedate);
	document.cookie = `${name}=${value}; path=/; expires=${now.toUTCString()}`;
}

/* 쿠키 설명
  Cookie : 사용자 브라우저에 물리적인 형태로 특정 데이터를 저장하는 경량의 텍스트 자료 4kb

  사용자 브라우저에 특정 사용자 정보값을 저장해서 웹사이트에서 쿠키에 저장된 값을 기억해 활용하기 위함

  사용예1 : 오늘하루 광고창 보지않기
  사용예2 : 쇼핑몰에 있는 전달 담아놓은 장바구니 정보 출력
  사용예3 : 특정 사이트 접속하고 로그인시 '홍길동'님 반갑습니다.

  응용예 : 사용자가 우리가 개발한 웹 페이지 방문시 각 사용자가 좋아하는 색상을 선택하게 한 뒤,
  해당 정보값을 사용자 컴퓨터에 쿠키로 저장

  앞으로 해당 사용자가 웹페이지 접속할 때마다 사용자 브라우저 쿠키에 저장된 값으로 웹페이지 스타일 테마 변경
  
	쿠키 : name=value 형식으로 저장, 쿠키 생성시 쿠키의 만료일을 설정가능

  쿠키확인 : document.cookie
*/

/* 쿠키 생성 함수 최종 수정.
const [btnView, btnSet] = document.querySelectorAll("button");
btnView.addEventListener("click", () => {
	console.log(document.cookie);
});

btnSet.addEventListener("click", () => {
	//today=done 이라는 이름으로 쿠키생성함과 동시에 만료시간을 1분을 지정하여
	// 쿠키가 생성된 시점부터 1분까지만 유지되고 1분뒤에는 자동으로 쿠키 제거됨
	setCookie("today", "done", 1);
});

btnSet.addEventListener("click", () => {
	setCookie("today", "done", 0);
	alert("쿠키 삭제");
});

// 쿠키 생성 함수
function setCookie(name, value, min) {
	let now = new Date();
	//아래와 같이 getTime으로 현재 시간값을 가져와서 초단위로 값을 변경하면, 잘못된 날짜 정보로
	let duedate = now.getTime() + min * 1000 * 60;
	//쿠키값은 화면 새로고침되어야지만 갱신된값이 반영
	now.setTime(duedate);

	document.cookie = `${name}=${value}; path=/; expires=${now.toUTCString()}`;
	alert("쿠키 생성");
}
*/
