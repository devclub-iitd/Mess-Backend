import { ReactNode } from "react";
import { Sidebar } from "./sidebar";

interface LayoutProps {
    children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
    return (
        <div className="flex h-screen">
            <div className="fixed h-screen w-64">
                <Sidebar />
            </div>
            <div className="ml-64 flex-1">
                {children}
            </div>
        </div>
    );
} 