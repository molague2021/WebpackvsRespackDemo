import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { HighlightCard } from './components/HighlightCard';
import { TailwindIndicator } from './components/TailwindIndicator';
import { ReportCard } from './components/ReportCard';

export const App = () => {
  return (
    <>
      <div className="flex min-h-screen">
        <Sidebar />
        <main className="p-12 flex-1 bg-gray-100 space-y-4">
          <Header />
          <HighlightCard />
          <ReportCard />
        </main>
      </div>
      <TailwindIndicator />
    </>
  );
};
