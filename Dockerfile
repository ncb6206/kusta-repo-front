# Node.js 18 Alpine 이미지 사용
FROM node:18-alpine

# 작업 디렉토리 설정
WORKDIR /app

# package.json과 package-lock.json 복사
COPY package*.json ./

# 의존성 설치
RUN npm ci

# 소스 코드 복사
COPY . .

# 환경 변수 설정
ENV NODE_ENV=production
ENV VITE_AXIOS_PROD_BASE_URL=http://220.76.77:8847

# 애플리케이션 빌드
RUN npm run build

# 개발 서버용 멀티스테이지 빌드
FROM node:18-alpine as dev
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
ENV NODE_ENV=development
ENV VITE_AXIOS_DEV_BASE_URL=http://220.76.77:8847
EXPOSE 5173
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]

# 프로덕션용 Nginx 이미지
FROM nginx:alpine as prod

# 빌드된 파일을 Nginx로 복사
COPY --from=0 /app/dist /usr/share/nginx/html

# Nginx 설정 복사 (필요시)
# COPY nginx.conf /etc/nginx/nginx.conf

# 포트 80 노출
EXPOSE 80

# Nginx 시작
CMD ["nginx", "-g", "daemon off;"] 