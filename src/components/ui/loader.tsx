export default function Loader() {
  return (
    <div className="mx-auto">
      <div className="flex p-8 justify-center items-center h-auto">
        <div className="text-center space-y-6">
          <div className="w-24 h-24 border-4 border-t-[#d3d3d3] border-gray-700 rounded-full animate-spin mx-auto"></div>
          <div className="text-[#353535] font-semibold text-2xl opacity-90 animate-fadeIn">
            Вже майже...
          </div>
          <div className="text-[#353535] text-sm opacity-80 animate-fadeIn">
            <p>Ми готуємо для вас усе необхідне...</p>
          </div>
        </div>
      </div>
    </div>
  );
}
