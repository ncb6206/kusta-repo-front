#!/bin/bash

echo "🚀 KUSTA Repository Frontend 완전 설정 스크립트"
echo "=============================================="

# 운영체제 감지
detect_os() {
    case "$(uname -s)" in
        Linux*)     echo "linux";;
        Darwin*)    echo "macos";;
        CYGWIN*|MINGW*|MSYS*) echo "windows";;
        *)          echo "unknown";;
    esac
}

OS=$(detect_os)
echo "🖥️  감지된 운영체제: $OS"

# Node.js 설치 함수들
install_nodejs_linux() {
    echo "📥 Linux용 Node.js 설치 중..."
    
    # curl 설치 확인
    if ! command -v curl &> /dev/null; then
        echo "📦 curl 설치 중..."
        sudo apt-get update && sudo apt-get install -y curl
    fi
    
    # NodeSource 저장소 추가
    curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
    sudo apt-get install -y nodejs
    
    echo "✅ Linux용 Node.js 설치 완료!"
}

install_nodejs_macos() {
    echo "📥 macOS용 Node.js 설치 중..."
    
    # Homebrew 설치 확인
    if ! command -v brew &> /dev/null; then
        echo "🍺 Homebrew 설치 중..."
        /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
    fi
    
    # Node.js 설치
    brew install node@18
    
    echo "✅ macOS용 Node.js 설치 완료!"
}

install_nodejs_windows() {
    echo "📥 Windows용 Node.js 설치 안내..."
    echo "❌ Windows에서는 자동 설치가 제한적입니다."
    echo "다음 링크에서 Node.js를 수동으로 설치해주세요:"
    echo "https://nodejs.org/en/download/"
    echo ""
    echo "설치 후 이 스크립트를 다시 실행하세요."
    exit 1
}

# Node.js 설치 확인 및 설치
if ! command -v node &> /dev/null; then
    echo "❌ Node.js가 설치되어 있지 않습니다."
    echo "🔧 Node.js 설치를 시작합니다..."
    
    case $OS in
        "linux")
            install_nodejs_linux
            ;;
        "macos")
            install_nodejs_macos
            ;;
        "windows")
            install_nodejs_windows
            ;;
        *)
            echo "❌ 지원하지 않는 운영체제입니다."
            exit 1
            ;;
    esac
else
    echo "✅ Node.js가 이미 설치되어 있습니다."
fi

echo "✅ Node.js 버전: $(node --version)"
echo "✅ NPM 버전: $(npm --version)"

# Yarn 설치 확인 및 설치
if ! command -v yarn &> /dev/null; then
    echo "📦 Yarn 설치 중..."
    npm install -g yarn
    
    if [ $? -eq 0 ]; then
        echo "✅ Yarn 설치 완료!"
        echo "✅ Yarn 버전: $(yarn --version)"
    else
        echo "⚠️  Yarn 설치 실패. NPM만 사용합니다."
    fi
else
    echo "✅ Yarn이 이미 설치되어 있습니다."
    echo "✅ Yarn 버전: $(yarn --version)"
fi

# 패키지 매니저 감지 및 선택
if command -v yarn &> /dev/null; then
    PACKAGE_MANAGER="yarn"
    echo "📦 Yarn을 사용합니다."
elif command -v npm &> /dev/null; then
    PACKAGE_MANAGER="npm"
    echo "📦 NPM을 사용합니다."
else
    echo "❌ Yarn 또는 NPM이 설치되어 있지 않습니다."
    exit 1
fi

# 프로젝트 의존성 설치
if [ ! -d "node_modules" ]; then
    echo "📥 프로젝트 의존성 설치 중..."
    $PACKAGE_MANAGER install
    
    if [ $? -eq 0 ]; then
        echo "✅ 의존성 설치 완료!"
    else
        echo "❌ 의존성 설치 실패!"
        exit 1
    fi
else
    echo "✅ 의존성이 이미 설치되어 있습니다."
fi

echo ""
echo "🎉 모든 설정이 완료되었습니다!"
echo "🌐 개발 서버를 시작하려면 다음 명령어를 실행하세요:"
echo "   $PACKAGE_MANAGER run dev"
echo ""
echo "또는 자동으로 개발 서버를 시작하시겠습니까? (y/n)"
read -r response

if [[ "$response" =~ ^[Yy]$ ]]; then
    echo "🌐 개발 서버를 시작합니다..."
    echo "브라우저에서 http://localhost:5173 으로 접속하세요."
    echo "서버를 중지하려면 Ctrl+C를 누르세요."
    echo ""
    $PACKAGE_MANAGER run dev
else
    echo "✅ 설정 완료! 수동으로 개발 서버를 시작하세요."
fi 