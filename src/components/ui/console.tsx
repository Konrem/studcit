export default function Console() {
  return (
    <div className="max-w-[35rem] mx-6 sm:mx-0 md:w-full h-[20rem] md:h-[15rem] bg-black rounded-xl overflow-hidden flex flex-col shadow-[0_10px_30px_rgba(0,0,0,0.15)]">
      <div className="h-[2.5rem] bg-[#515151] flex items-center px-[1rem]">
        <div className="flex gap-[0.5rem]">
          <div className="w-[0.75rem] h-[0.75rem] rounded-full bg-[#FF3B30] hover:scale-110 active:scale-95 transition-transform duration-200"></div>
          <div className="w-[0.75rem] h-[0.75rem] rounded-full bg-[#FFD60A] hover:scale-110 active:scale-95 transition-transform duration-200"></div>
          <div className="w-[0.75rem] h-[0.75rem] rounded-full bg-[#32D74B] hover:scale-110 active:scale-95 transition-transform duration-200"></div>
        </div>
      </div>

      <div className="p-4 font-mono text-[1rem] leading-[1.5] text-white flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-[#333344] scrollbar-track-[#1a1a1a] hover:scrollbar-thumb-[#444455]">
        <div className="text-[#528BFF]">$ npm install</div>
        <div className="text-[#9CA3AF]">
          added 1 package, and audited 2 packages in 1s
        </div>
        <div className="text-[#32D74B]">$ git commit -m &quot;initial commit&quot;</div>
        <div className="text-[#9CA3AF]">[main 1234abc] initial commit</div>
        <div className="text-[#FFD60A]">$ npm run dev</div>
        <div className="text-[#9CA3AF]">&gt; Local: http://localhost:3000/</div>
        {/* <div className="text-[#32D74B]">
            <div>
                <span className="mr-2">Loading</span>
                <span className="animate-[ping_1.5s_0.5s_ease-in-out_infinite]">.</span>
                <span className="animate-[ping_1.5s_0.7s_ease-in-out_infinite]">.</span>
                <span className="animate-[ping_1.5s_0.9s_ease-in-out_infinite]">.</span>
            </div>
        </div> */}
        <span className="inline-block w-[0.5rem] h-[1em] bg-[#528BFF] animate-[blink_1s_step-end_infinite] align-middle"></span>
      </div>
    </div>
  );
}
