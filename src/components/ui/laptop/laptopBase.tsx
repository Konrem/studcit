import React from "react";

export default function LaptopBase() {
  return (
    <div className="w-full flex flex-col items-center select-none">
      
      {/* 1. Акуратний шарнірний стик */}
      <div className="w-[88%] h-2 bg-gradient-to-b from-[#181a1f] via-[#282b33] to-[#121316] border-x border-[#383d47] rounded-t-xs z-20" />

      {/* 2. База корпусу: трохи вужча, довша вниз, із помірно збільшеним кутом розкриття */}
      <div className="relative -mt-0.5 flex w-full origin-top flex-col items-center rounded-b-2xl border-t border-white/20 bg-gradient-to-b from-[#2e323b] via-[#22252c] to-[#17191e] px-2 pb-7 pt-2.5 shadow-2xl [transform:perspective(1100px)_rotateX(34deg)] sm:px-5 sm:pb-8">
        
        {/* Виїмка для відкривання кришки пальцем */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-1 bg-[#121317] rounded-b-md shadow-inner" />

        {/* Заглиблений колодязь клавіатури */}
        <div className="w-full bg-[#121418] rounded-xl p-2 sm:p-2.5 border border-[#353945] shadow-[inset_0_2px_6px_rgba(0,0,0,0.8)]">
          <div className="flex flex-col gap-1 sm:gap-1.5">
            
            {/* Ряд функціональних клавіш F1-F12 */}
            <div className="flex gap-1 justify-between h-2 sm:h-2.5">
              {Array.from({ length: 14 }).map((_, i) => (
                <div
                  key={i}
                  className="flex-1 bg-[#1c1f26] rounded-[2px] border-b border-black/80 shadow-[0_1px_1px_rgba(255,255,255,0.05)_inset]"
                />
              ))}
            </div>

            {/* Ряд цифр */}
            <div className="flex gap-1 justify-between h-2.5 sm:h-3">
              {Array.from({ length: 14 }).map((_, i) => (
                <div
                  key={i}
                  className="flex-1 bg-[#222630] rounded-[2px] border-b border-black/90 shadow-[0_1px_2px_rgba(0,0,0,0.6)]"
                />
              ))}
            </div>

            {/* Ряд Q-P */}
            <div className="flex gap-1 justify-between h-2.5 sm:h-3">
              {Array.from({ length: 14 }).map((_, i) => (
                <div
                  key={i}
                  className="flex-1 bg-[#222630] rounded-[2px] border-b border-black/90 shadow-[0_1px_2px_rgba(0,0,0,0.6)]"
                />
              ))}
            </div>

            {/* Ряд A-L */}
            <div className="flex gap-1 justify-between h-2.5 sm:h-3">
              {Array.from({ length: 13 }).map((_, i) => (
                <div
                  key={i}
                  className="flex-1 bg-[#222630] rounded-[2px] border-b border-black/90 shadow-[0_1px_2px_rgba(0,0,0,0.6)]"
                />
              ))}
            </div>

            {/* Ряд Z-M */}
            <div className="flex gap-1 justify-between h-2.5 sm:h-3">
              {Array.from({ length: 12 }).map((_, i) => (
                <div
                  key={i}
                  className="flex-1 bg-[#222630] rounded-[2px] border-b border-black/90 shadow-[0_1px_2px_rgba(0,0,0,0.6)]"
                />
              ))}
            </div>

            {/* Нижній ряд: Пробіл та клавіші керування */}
            <div className="flex gap-1 justify-between h-2.5 sm:h-3.5 items-stretch">
              <div className="w-7 sm:w-9 bg-[#222630] rounded-[2px] border-b border-black/90" />
              <div className="w-7 sm:w-9 bg-[#222630] rounded-[2px] border-b border-black/90" />
              <div className="w-8 sm:w-10 bg-[#222630] rounded-[2px] border-b border-black/90" />
              
              {/* Пробіл */}
              <div className="flex-1 bg-[#1a1d24] rounded-[2px] border-b border-black/95 shadow-inner" />
              
              <div className="w-8 sm:w-10 bg-[#222630] rounded-[2px] border-b border-black/90" />
              <div className="w-7 sm:w-9 bg-[#222630] rounded-[2px] border-b border-black/90" />
              
              {/* Стрілочки */}
              <div className="w-9 sm:w-11 flex gap-0.5">
                <div className="flex-1 bg-[#1a1d24] rounded-[2px] border-b border-black/90" />
                <div className="flex-1 flex flex-col gap-0.5">
                  <div className="flex-1 bg-[#1a1d24] rounded-[1px] border-b border-black/90" />
                  <div className="flex-1 bg-[#1a1d24] rounded-[1px] border-b border-black/90" />
                </div>
                <div className="flex-1 bg-[#1a1d24] rounded-[2px] border-b border-black/90" />
              </div>
            </div>

          </div>
        </div>

        {/* Збільшений у висоту трекпад (витягнутий донизу) */}
        <div className="w-32 sm:w-44 h-11 sm:h-14 mt-3 bg-gradient-to-b from-[#22252c] to-[#181a1f] rounded-lg border border-[#3b414d]/60 shadow-[inset_0_1px_2px_rgba(255,255,255,0.06),0_2px_4px_rgba(0,0,0,0.5)]" />

      </div>

      {/* М'яка тінь під передньою гранню на поверхні столу */}
      <div className="w-[88%] h-4 bg-black/40 blur-xl rounded-full -mt-2 pointer-events-none" />

    </div>
  );
}