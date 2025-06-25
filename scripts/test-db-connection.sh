#!/bin/bash

echo "🔍 DB 연결 테스트 스크립트"
echo "=========================="

DB_URL="http://220.76.77:8847"

echo "📡 DB 서버 연결 테스트 중..."
echo "대상 URL: $DB_URL"

# curl을 사용한 연결 테스트
if command -v curl &> /dev/null; then
    echo "🌐 curl을 사용하여 연결 테스트..."
    
    # 연결 테스트 (타임아웃 10초)
    response=$(curl -s -o /dev/null -w "%{http_code}" --connect-timeout 10 "$DB_URL" 2>/dev/null)
    
    if [ "$response" = "200" ] || [ "$response" = "404" ] || [ "$response" = "405" ]; then
        echo "✅ DB 서버에 연결 성공! (HTTP 상태: $response)"
        echo "📊 서버가 응답하고 있습니다."
    else
        echo "❌ DB 서버 연결 실패 (HTTP 상태: $response)"
        echo "🔧 다음을 확인해주세요:"
        echo "   - 서버 주소가 올바른지 확인"
        echo "   - 방화벽 설정 확인"
        echo "   - 서버가 실행 중인지 확인"
    fi
else
    echo "⚠️  curl이 설치되어 있지 않습니다."
    echo "📦 curl 설치 중..."
    
    # 운영체제별 curl 설치
    if command -v apt-get &> /dev/null; then
        sudo apt-get update && sudo apt-get install -y curl
    elif command -v yum &> /dev/null; then
        sudo yum install -y curl
    elif command -v brew &> /dev/null; then
        brew install curl
    else
        echo "❌ curl을 설치할 수 없습니다. 수동으로 설치해주세요."
        exit 1
    fi
    
    # 재귀 호출
    exec "$0"
fi

echo ""
echo "🔗 Docker 환경에서 테스트하려면:"
echo "   docker-compose up dev"
echo ""
echo "🌐 브라우저에서 접속:"
echo "   http://localhost:5173" 