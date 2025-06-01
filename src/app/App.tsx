import { BrowserRouter, Routes, Route } from "react-router-dom";
import AllTasksPage from "../pages/AllTasksPage";
import CompletedTasksPage from "../pages/CompletedTasksPage";
import UncompletedTasksPage from "../pages/UncompletedTasksPage";
import { ErrorBoundary } from 'react-error-boundary';
import { ErrorFallback } from '../shared/ui/ErrorFallback';
import { SidebarNav } from './ui/SidebarNav';

export default function App() {
    return (
        <BrowserRouter basename={import.meta.env.BASE_URL}>
            <div className="flex flex-col md:flex-row min-h-screen">
                <SidebarNav />
                <main className="flex-1 p-4 md:p-6">
                    <ErrorBoundary FallbackComponent={ErrorFallback}>
                        <Routes>
                            <Route path="/" element={<AllTasksPage />} />
                            <Route path="/completed" element={<CompletedTasksPage />} />
                            <Route path="/uncompleted" element={<UncompletedTasksPage />} />
                        </Routes>
                    </ErrorBoundary>
                </main>
            </div>
        </BrowserRouter>
            );


}
