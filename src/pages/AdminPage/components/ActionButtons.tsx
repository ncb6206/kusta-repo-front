/**
 * 공통 액션 버튼 컴포넌트
 * 다양한 액션 버튼들을 일관된 스타일로 제공합니다
 */

import { ReactNode } from 'react';

/** 버튼 변형 타입 */
type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'success' | 'warning';

/** 버튼 크기 타입 */
type ButtonSize = 'sm' | 'md' | 'lg';

/** ActionButton 컴포넌트의 props 인터페이스 */
interface ActionButtonProps {
  /** 버튼 텍스트 또는 JSX 엘리먼트 */
  children: ReactNode;
  /** 클릭 이벤트 핸들러 */
  onClick?: () => void;
  /** 버튼 변형 스타일 */
  variant?: ButtonVariant;
  /** 버튼 크기 */
  size?: ButtonSize;
  /** 비활성화 상태 */
  disabled?: boolean;
  /** 로딩 상태 */
  loading?: boolean;
  /** 버튼 타입 */
  type?: 'button' | 'submit' | 'reset';
  /** 추가 CSS 클래스 */
  className?: string;
  /** 아이콘 (선택사항) */
  icon?: ReactNode;
  /** 아이콘 위치 */
  iconPosition?: 'left' | 'right';
}

/**
 * 버튼 변형에 따른 CSS 클래스를 반환하는 함수
 * @param variant 버튼 변형
 * @return CSS 클래스 문자열
 */
const getVariantClasses = (variant: ButtonVariant): string => {
  const variants = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500',
    secondary: 'bg-gray-100 text-gray-700 hover:bg-gray-200 focus:ring-gray-500',
    danger: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500',
    success: 'bg-green-600 text-white hover:bg-green-700 focus:ring-green-500',
    warning: 'bg-yellow-600 text-white hover:bg-yellow-700 focus:ring-yellow-500',
  };
  return variants[variant];
};

/**
 * 버튼 크기에 따른 CSS 클래스를 반환하는 함수
 * @param size 버튼 크기
 * @return CSS 클래스 문자열
 */
const getSizeClasses = (size: ButtonSize): string => {
  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-sm',
    lg: 'px-6 py-3 text-base',
  };
  return sizes[size];
};

/**
 * 공통 액션 버튼 컴포넌트
 * @param props ActionButton 컴포넌트의 props
 * @return JSX 엘리먼트
 */
const ActionButton = ({
  children,
  onClick,
  variant = 'primary',
  size = 'md',
  disabled = false,
  loading = false,
  type = 'button',
  className = '',
  icon,
  iconPosition = 'left',
}: ActionButtonProps) => {
  const baseClasses = 'inline-flex items-center justify-center font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2';
  const variantClasses = getVariantClasses(variant);
  const sizeClasses = getSizeClasses(size);
  const disabledClasses = disabled || loading ? 'opacity-50 cursor-not-allowed' : '';

  const buttonClasses = `${baseClasses} ${variantClasses} ${sizeClasses} ${disabledClasses} ${className}`.trim();

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={buttonClasses}
    >
      {loading ? (
        <>
          <svg className="animate-spin -ml-1 mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24">
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
          로딩 중...
        </>
      ) : (
        <>
          {icon && iconPosition === 'left' && (
            <span className="mr-2">{icon}</span>
          )}
          {children}
          {icon && iconPosition === 'right' && (
            <span className="ml-2">{icon}</span>
          )}
        </>
      )}
    </button>
  );
};

/** ActionButtons 컴포넌트의 props 인터페이스 */
interface ActionButtonsProps {
  /** 버튼들을 감싸는 컨테이너의 추가 CSS 클래스 */
  className?: string;
  /** 버튼들 사이의 간격 */
  spacing?: 'sm' | 'md' | 'lg';
  /** 정렬 방식 */
  align?: 'left' | 'center' | 'right';
  /** 자식 요소들 (ActionButton 컴포넌트들) */
  children: ReactNode;
}

/**
 * 액션 버튼들을 그룹화하는 컨테이너 컴포넌트
 * @param props ActionButtons 컴포넌트의 props
 * @return JSX 엘리먼트
 */
const ActionButtons = ({
  className = '',
  spacing = 'md',
  align = 'right',
  children,
}: ActionButtonsProps) => {
  const spacingClasses = {
    sm: 'space-x-2',
    md: 'space-x-3',
    lg: 'space-x-4',
  };

  const alignClasses = {
    left: 'justify-start',
    center: 'justify-center',
    right: 'justify-end',
  };

  const containerClasses = `flex ${alignClasses[align]} ${spacingClasses[spacing]} ${className}`.trim();

  return <div className={containerClasses}>{children}</div>;
};

export { ActionButton, ActionButtons };
export default ActionButton; 