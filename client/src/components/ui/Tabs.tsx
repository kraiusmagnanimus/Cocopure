import React, { useState } from 'react';
import type { ReactNode } from 'react';
import { useTheme } from '../../hooks/useTheme';

interface Tab {
  id: string;
  label: string;
  content: ReactNode;
  icon?: string;
}

interface TabsProps {
  tabs: Tab[];
  defaultTab?: string;
  onChange?: (tabId: string) => void;
  variant?: 'default' | 'pills' | 'underline';
  className?: string;
}

const Tabs: React.FC<TabsProps> = ({
  tabs,
  defaultTab,
  onChange,
  variant = 'default',
  className = '',
}) => {
  const { currentTheme } = useTheme();
  const [activeTab, setActiveTab] = useState(defaultTab || tabs[0]?.id);

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
    onChange?.(tabId);
  };

  const getTabClasses = (isActive: boolean) => {
    const baseClasses = 'px-4 py-2 font-medium text-sm transition-all duration-200 cursor-pointer';
    
    if (variant === 'pills') {
      return `${baseClasses} rounded-full ${
        isActive
          ? currentTheme === 'vibrant'
            ? 'bg-brand-forest text-white'
            : 'bg-minimal-dark-gray text-white'
          : 'text-gray-600 hover:text-gray-800'
      }`;
    }
    
    if (variant === 'underline') {
      return `${baseClasses} border-b-2 ${
        isActive
          ? currentTheme === 'vibrant'
            ? 'border-brand-forest text-brand-forest'
            : 'border-minimal-dark-gray text-minimal-dark-gray'
          : 'border-transparent text-gray-600 hover:text-gray-800'
      }`;
    }
    
    // Default variant
    return `${baseClasses} rounded-lg ${
      isActive
        ? currentTheme === 'vibrant'
          ? 'bg-brand-light-gray text-brand-forest'
          : 'bg-minimal-light-gray text-minimal-dark-gray'
        : 'text-gray-600 hover:bg-gray-100'
    }`;
  };

  const activeTabContent = tabs.find(tab => tab.id === activeTab)?.content;

  return (
    <div className={`w-full ${className}`}>
      {/* Tab Headers */}
      <div className={`flex ${variant === 'underline' ? 'border-b border-gray-200' : 'space-x-1'}`}>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => handleTabChange(tab.id)}
            className={getTabClasses(tab.id === activeTab)}
          >
            {tab.icon && <span className="mr-2">{tab.icon}</span>}
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="mt-4">
        {activeTabContent}
      </div>
    </div>
  );
};

export default Tabs;