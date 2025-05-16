// @ts-expect-error 다른 방법 사용해서 적용하려고 해도 적용안되서 일단 이렇게 처리
import 'swiper/css';
// @ts-expect-error 다른 방법 사용해서 적용하려고 해도 적용안되서 일단 이렇게 처리
import 'swiper/css/navigation';
// @ts-expect-error 다른 방법 사용해서 적용하려고 해도 적용안되서 일단 이렇게 처리
import 'swiper/css/pagination';

import { useState, useRef } from 'react';
import { Swiper as SwiperType } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import SchoolCard from '@/components/common/SchoolCard';

const schools = Array.from({ length: 20 }, () => ({
  title: '스기대학교 의과대학 스키팀',
  description: `<b>연혁</b><br/>- 1985년 설립<br/>- 1998년 스키팀 수상<br/>- 2000 스키대회 8위<br/><br/><b>소개</b><br/>스기대학교 의과대학 스키팀은...`,
}));

const SchoolSlider = () => {
  const swiperRef = useRef<SwiperType | null>(null);
  const [active, setActive] = useState(0);

  const pagination = {
    clickable: true,
  };

  const handleClick = (idx: number) => {
    console.log(idx);
    swiperRef.current?.slideToLoop(idx, 500);
    setActive(idx);
  };

  return (
    <div className="mt-28 flex items-center justify-center px-10">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView="auto" // 한 번에 보여줄 슬라이드 개수
        centeredSlides
        navigation
        loop={true}
        pagination={pagination}
        // breakpoints={{
        //   0: {
        //     slidesPerView: 1,
        //     centeredSlides: true,
        //   },
        //   768: {
        //     slidesPerView: 'auto',
        //     centeredSlides: true,
        //   },
        // }}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        onSlideChange={(swiper) => {
          setActive(swiper.realIndex);
        }}
      >
        {schools.map((school, idx) => (
          <SwiperSlide
            key={idx}
            className={`transition-transform duration-300 ${active === idx ? 'w-96!' : 'w-44!'} `}
          >
            <SchoolCard
              name={school.title}
              description={school.description}
              isActive={idx === active}
              onClick={() => handleClick(idx)}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SchoolSlider;
