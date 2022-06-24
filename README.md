# nestjs-with-prisma
## desc
prisma를 nestjs에서 적용해보며 지나쳤던 몇몇 기능들을 공부해보는 프로젝트

---
## 개발환경
### 개발용 디비 올리기
```bash
#mariadb - 필요 여부에 따라 도커 올림
docker run -d --name mariadb --env MARIADB_USER=dar --env MARIADB_PASSWORD=Asd1fgh2 --env MARIADB_ROOT_PASSWORD=Asd1fgh2 -p 3306:3306  mariadb:latest

#redis - 필요 여부에 따라 도커 올림
docker run --name redis -p 6379:6379 -d redis:latest redis-server
```

---
## prisma
### 설치 및 초기 세팅
```bash
# prisma 설치
npm i prisma dotenv -D
npm i @prisma/client

# prisma 초기화 - 해당 프로젝트 루트 디렉토리로 이동
npx prisma init
```
### 환경 변수 세팅
```bash
#.env 추가
...
DATABASE_URL="mysql://{id}@{host}:{port}/{databaseName}"
...
```
### schema file 구성
설정에 필요한 메일 파일로 스키마와 모델들을 구성함

### prisma Migrate 진행
```bash
# 마이그레이트 수행
npx prisma migrate dev --name {migrateName}

#마이그레이트 수행 전 수정
npx prisma migrate dev --name {migrateName} --create-only
```

### prisma client 세팅
```bash
#⚠️ 주의: Prisma schema가 변경될 때마다 npx prisma generate로 Prisma Client를 업데이트해줘야 한다!
npx prisma generate
```
### 느낀점
특정 database 하나에 대응 되는 케이스라 다른 데이터베이스의 테이블과 조인하는 케이스에 관해서는 구현하기 어려움
MSA 관점에서 각 서비스가 하나의 데이터베이스를 가지고 요청에 응답하는 케이스라면 적절하게 사용할 수 있을 것으로 보임
데이터베이스간 데이터 중복으로 발생하는 데이터 정합성은 mq들을 활용하거나 이벤트등을 활용하여 풀 수 있을 것 같음

---
### scheduler
### logger
### terminus