// @ts-expect-error 다른 방법 사용해서 적용하려고 해도 적용안되서 일단 이렇게 처리
import 'swiper/css';
// @ts-expect-error 다른 방법 사용해서 적용하려고 해도 적용안되서 일단 이렇게 처리
import 'swiper/css/navigation';
// @ts-expect-error 다른 방법 사용해서 적용하려고 해도 적용안되서 일단 이렇게 처리
import 'swiper/css/pagination';

import { useState, useRef } from 'react';
import { Swiper as SwiperType } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { IoChevronBack, IoChevronForward } from 'react-icons/io5';

import SchoolCard from '@/components/common/SchoolCard';
import { UniversityDataType } from '@/types/university';

interface UniversitiesType {
  universities?: UniversityDataType[];
}

const SchoolSlider = ({ universities }: UniversitiesType) => {
  const swiperRef = useRef<SwiperType | null>(null);
  const [active, setActive] = useState(0);

  const handleClick = (idx: number) => {
    console.log(idx);
    swiperRef.current?.slideToLoop(idx, 500);
    setActive(idx);
  };

  // 화살표 클릭 시 5개씩 이동하는 함수
  const handleNavigation = (direction: 'prev' | 'next') => {
    if (!swiperRef.current) return;

    const totalSlides = universities?.length ?? 0;
    let newIndex = active;

    if (direction === 'next') {
      newIndex = (active + 5) % totalSlides;
    } else {
      newIndex = (active - 5 + totalSlides) % totalSlides;
    }

    swiperRef.current.slideToLoop(newIndex, 500);
    setActive(newIndex);
  };

  return (
    <div className="relative mt-28">
      <div className="flex items-center justify-center px-10">
        {/* 왼쪽 내비게이션 버튼 */}
        <button
          onClick={() => handleNavigation('prev')}
          className="text-main hover:border-main! mr-4 flex-shrink-0 rounded-full! bg-white p-2! shadow-md"
        >
          <IoChevronBack size={24} />
        </button>

        {/* Swiper 컨테이너 */}
        <div className="max-w-6xl flex-1">
          <Swiper
            spaceBetween={20}
            slidesPerView="auto" // 한 번에 보여줄 슬라이드 개수
            centeredSlides
            loop={true}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            onSlideChange={(swiper) => {
              setActive(swiper.realIndex);
            }}
          >
            {universities?.map((school, idx) => (
              <SwiperSlide
                key={idx}
                className={`transition-transform duration-300 ${active === idx ? 'w-96!' : 'w-44!'} `}
              >
                <SchoolCard
                  name={school.universityKor}
                  description={school.universityInfo}
                  universityNo={school.universityNo}
                  isActive={idx === active}
                  onClick={() => handleClick(idx)}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* 오른쪽 내비게이션 버튼 */}
        <button
          onClick={() => handleNavigation('next')}
          className="text-main hover:border-main! ml-4 flex-shrink-0 rounded-full! bg-white p-2! shadow-md"
        >
          <IoChevronForward size={24} />
        </button>
      </div>
    </div>
  );
};

export default SchoolSlider;
