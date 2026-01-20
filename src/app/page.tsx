import Test from "@/components/test";
import Header from "@/components/sections/header";
import Console from "@/components/ui/console";
import Browser from "@/components/ui/browser";
import AboutCards from "@/components/sections/cardsWork";
import Footer from "@/components/sections/footer";
import Timeline from "@/components/sections/timeline";
import BrowserWindow from "@/components/ui/browserTest";
import Info from "@/components/sections/info";


export default function Home() {
  return (
    <>
      <Header />
      <div className="dark:bg-[var(--bg-main)] dark:text-[var(--text-primary)] py-[5rem]">
        <div className="text-center pb-[1rem]">
          <h2 className="font-semibold text-5xl tracking-tight">StudCIT.com</h2>
          <p className="font-medium text-xl line-height-[1.5] py-[1rem]">Поки ти дивишся сайт, ми його уже робимо</p>
        </div>
        <div className="flex items-center justify-center">
          <Browser />
          <Console />
        </div>
         <Info />
        <AboutCards />
        <Timeline />
      </div>
      
      <Footer />
      {/* <Test /> */}

    </>

  );
}
