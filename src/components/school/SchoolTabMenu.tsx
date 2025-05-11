interface SchoolTabMenuProps {
  tab?: string;
  setTab: (tab: string) => void;
}

const SchoolTabMenu: React.FC<SchoolTabMenuProps> = ({ setTab }) => (
  <div className="mb-8 flex justify-center">
    {['팀소개', '팀원', '수상내역'].map((t) => (
      <button
        key={t}
        className={`hover:text-main! hover:border-b-main! border-b-gray3! w-40 rounded-none! pb-2 text-center text-lg font-semibold hover:border-b-3! md:w-56 lg:w-64`}
        onClick={() => setTab(t)}
      >
        {t}
      </button>
    ))}
  </div>
);

export default SchoolTabMenu;
