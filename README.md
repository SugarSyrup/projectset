## 기술 스택
FrontEnd : html, css, javascript

BackEnd : NodeJS(express) passport pug bcrypt html2canvas

db : mongodb AWSS3

devops : git

## Routing
ver2
```
routes

GET /

/auth
GET, POST /auth/login
GET, POST /auth/join

auth OAuth2.0
/auth/join/google
/auth/join/kakao
/auth/join/naver

POST /auth/logout

/user
GET, Post /user/profile (POST: edit-profile)
GET, Post /user/createcard
GET, Post /user/namecard/[:id]

/api
/api/namecard/[:id]
/api/
```

## DataBase

User{
User-Infomation,
nameCards:[]
}

NameCard{
userID,
\_id => unique Link
}

Sessions {

}

## OAuth Login

GitHub + Google => passport.js
Naver, Kakao => 생성 예정

PassportJS <=> MongoDB 연동하기
auth, root Router 정리

## DEsign?

Login => auth
myPage

2번째 단계.. 가 되야 할 예정
: Footer(Home, Cards(cardlink, charts(views)), Create, settings)

## 필요한 기능
1. Login/ signup
2. 사용자 정보가 포함된  전자명함 DB
3. 베포
4. 프론트앤드를 따로 띄울지 그냥 express render 할때 보낼지 고민중..

## 목표
[] html2Canvas

[] PassportJs + OAuth
    : Google, Naver, Kakao, Github

[✔] Routing 정리 => ReadME에 정리
