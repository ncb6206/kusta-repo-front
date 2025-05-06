import { useNavigate } from 'react-router-dom';

import { PATH } from '@/constants/path';

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <div className="h-dvh flex-col items-center justify-center">
      <span className="font-extrabold">페이지가 존재하지 않습니다!</span>
      <button onClick={() => navigate(PATH.ROOT)}>메인페이지로</button>
    </div>
  );
};

export default NotFoundPage;
