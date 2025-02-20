import HeaderTool from "@/app/components/HeaderTool";
import StatsSection from "./StatsSection";
import HistorySection from "./HistorySection";

export default function Home() {
  return (
    <>
      <div className="mb-4">
        <HeaderTool
          title="Homepage"
          description="Selamat datang di Dynamic Power Tools, Mudahkan hidupmu dengan berbagai tools kami."
        />
      </div>

      <section className="mb-4">
        <StatsSection />
      </section>

      <section>
        <HistorySection />
      </section>
    </>
  );
}
