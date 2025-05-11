interface PaginationProps {
  current: number;
  total: number;
  onChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ current, total, onChange }) => (
  <div className="mt-8 flex items-center justify-center gap-2">
    <button
      className="hover:bg-gray3 rounded px-2 py-1"
      disabled={current === 1}
      onClick={() => onChange(current - 1)}
    >
      &lt;
    </button>
    {[...Array(total)].map((_, i) => (
      <button
        key={i}
        className={`rounded px-3 py-1 ${current === i + 1 ? 'bg-main text-white' : 'hover:bg-gray3'}`}
        onClick={() => onChange(i + 1)}
      >
        {i + 1}
      </button>
    ))}
    <button
      className="hover:bg-gray3 rounded px-2 py-1"
      disabled={current === total}
      onClick={() => onChange(current + 1)}
    >
      &gt;
    </button>
  </div>
);

export default Pagination;
