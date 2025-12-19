'use client';

import React from 'react';
import { Listbox, ListboxItem, Accordion, AccordionItem, Tooltip, Button } from "@heroui/react";
import { LayoutDashboard, BarChart3, Settings, Database, ChevronLeft, ChevronRight } from "lucide-react";
import { useSidebarStore } from '@/store/useSidebarStore';

export const AdvancedSidebar = () => {
  const { isCollapsed, toggleSidebar } = useSidebarStore();

  return (
    <aside className={`${isCollapsed ? "w-20" : "w-64"} h-screen fixed left-0 top-0 border-r border-divider bg-background transition-all duration-300 flex flex-col z-50`}>
      <div className="flex items-center justify-between h-16 px-4 border-b border-divider">
        {!isCollapsed && <span className="font-bold text-xl text-primary">StarChart</span>}
        <Button isIconOnly variant="light" size="sm" onClick={toggleSidebar}>
          {isCollapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
        </Button>
      </div>

      <div className="flex-1 py-4 px-2">
        <Listbox variant="flat" aria-label="Menu">
          <ListboxItem 
            key="dashboard" 
            startContent={<LayoutDashboard size={22} />}
            classNames={{ title: isCollapsed ? "hidden" : "block" }}
          >
            仪表盘
          </ListboxItem>
          <ListboxItem 
            key="analysis" 
            startContent={<BarChart3 size={22} />}
            classNames={{ title: isCollapsed ? "hidden" : "block" }}
          >
            分析报告
          </ListboxItem>
        </Listbox>

        {/* 只有展开时显示多级菜单 */}
        {!isCollapsed && (
          <Accordion className="px-0">
            <AccordionItem 
              key="data" 
              title="数据管理" 
              startContent={<Database size={22} />}
              classNames={{ title: "text-sm" }}
            >
              <Listbox variant="light">
                <ListboxItem key="s1">Java 接口配置</ListboxItem>
                <ListboxItem key="s2">Python 模型流</ListboxItem>
              </Listbox>
            </AccordionItem>
          </Accordion>
        )}
      </div>
    </aside>
  );
};