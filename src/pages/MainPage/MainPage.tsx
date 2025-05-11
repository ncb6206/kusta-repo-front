import SchoolSlider from '@/components/main/SchoolSlider';
import SearchBar from '@/components/common/SearchBar';
import GoKustaLinks from '@/components/main/GoKustaLinks';

const MainPage = () => {
  return (
    <div>
      <div className="relative flex-1 pt-48">
        <div className="absolute inset-0 bg-[url('/main.png')] bg-cover bg-center" />
        <div className="absolute inset-0 backdrop-blur-md" />
        <div className="relative z-10 pt-16 pb-8">
          <div className="flex flex-col items-center gap-8">
            <img src="/logo.svg" alt="한국대학스키연맹" className="h-8" />
            <SearchBar />
          </div>
          <SchoolSlider />
        </div>
      </div>
      <GoKustaLinks />
    </div>
  );
};

export default MainPage;
