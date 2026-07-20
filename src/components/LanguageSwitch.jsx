function LanguageSwitch({ locale, onChange }) {
  return (
    <div className="fixed left-4 top-4 z-50 flex overflow-hidden rounded-full border border-[#f3d7df]/70 bg-[#2f3b5c]/95 shadow-[0_8px_20px_rgba(0,0,0,0.25)]">
      {[
        ['ru', 'RU'],
        ['uz', 'UZ'],
      ].map(([key, label]) => (
        <button
          key={key}
          type="button"
          onClick={() => onChange(key)}
          className={`px-3 py-1.5 text-xs font-semibold tracking-[0.08em] transition ${
            locale === key
              ? 'bg-[#f3d7df] text-[#2f3b5c]'
              : 'bg-transparent text-[#f3d7df] hover:bg-white/10'
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  )
}

export default LanguageSwitch
