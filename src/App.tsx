import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from 'sonner';
import { Navbar } from '@/components/layout/Navbar';
import { Home } from '@/pages/Home';
import { Dashboard } from '@/pages/Dashboard';
import { Materials } from '@/pages/Materials';
import { Timeline } from '@/pages/Timeline';
import { Reports } from '@/pages/Reports';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/materials" element={<Materials />} />
          <Route path="/timeline" element={<Timeline />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="*" element={<Home />} />
        </Routes>
        <Toaster position="top-right" />
      </div>
    </BrowserRouter>
  );
}

export default App;
