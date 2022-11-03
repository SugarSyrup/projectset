## Routing

/   : 홈 페이지(현재 로그인 페이지)
/login : 로그인 페이지
/join : 회원가입 페이지
/join/... : 소셜 회원가입 페이지들

/user/myPage : 간략한 개인정보 + 소유중인 명함(max : 3)
    - /api/: userID : 유저 정보 호출 or api없이 session 이용해서 간단하게 가능할지도?

/user/details : 명함 제작에 필요한 추가 정보 있으면 작성(현재 공백)

/show : 명함 보여지는 사이트 + 사용자 본인의 경우 수정가능
    * link, share : 중복되지 않는 id로 구성된 link 생성 or id
    * edit : 클릭시 사용자 본인일 경우 수정 가능

    - /api/:link : link를 통해 명함 정보 호출

## DataBase

User{
    nameCards:[]
}

NameCard{
    userID
}