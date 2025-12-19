'use client'; // 注意：如果你需要实时监听侧边栏宽度，这里需要 client 模式

import { Providers } from "./providers";
import "@/styles/globals.css"; // 确保路径对应你的 styles 文件夹
import { AdvancedSidebar } from "@/components/AdvancedSidebar";
import { useSidebarStore } from "@/store/useSidebarStore";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const { isCollapsed } = useSidebarStore();

  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <body className="min-h-screen bg-background antialiased">
        <Providers>
          <div className="flex">
            <AdvancedSidebar />
            <main className={`flex-1 transition-all duration-300 ${isCollapsed ? "ml-20" : "ml-64"} p-8`}>
              {children}
            </main>
          </div>
        </Providers>
      </body>
    </html>
  );
}