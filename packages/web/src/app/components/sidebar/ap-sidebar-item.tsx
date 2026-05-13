import { LockKeyhole } from 'lucide-react';
import React, { ComponentType, useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { Dot } from '@/components/custom/dot';
import {
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from '@/components/ui/sidebar-shadcn';
import { cn } from '@/lib/utils';

export type SidebarItemType = {
  to: string;
  label: string;
  type: 'link';
  icon?: ComponentType<{ className?: string }>;
  notification?: boolean;
  locked?: boolean;
  newWindow?: boolean;
  isActive?: (pathname: string) => boolean;
  isSubItem?: boolean;
  show?: boolean;
  hasPermission?: boolean;
  onClick?: () => void;
  badge?: string;
  iconClassName?: string;
  highlight?: boolean;
};

export const ApSidebarItem = (item: SidebarItemType) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { state } = useSidebar();
  const iconRef = useRef<AnimatedIconHandle | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const isLinkActive =
    location.pathname.startsWith(item.to) || item.isActive?.(location.pathname);
  const isCollapsed = state === 'collapsed';

  useEffect(() => {
    if (isHovered) {
      iconRef.current?.startAnimation?.();
    } else {
      iconRef.current?.stopAnimation?.();
    }
  }, [isHovered]);

  const button = (
    <SidebarMenuButton
      className={cn(
        'transition-all duration-300 relative group/btn',
        // Light Mode Defaults
        { 'bg-sidebar-accent hover:bg-sidebar-accent!': isLinkActive },
        item.highlight && !isLinkActive && 'hover:bg-sidebar-accent/60',
        // Dark Mode Premium Styling
        'dark:hover:bg-white/5 dark:text-muted-foreground dark:hover:text-foreground',
        isLinkActive && 
          'dark:bg-blue-600/10 dark:text-blue-400 dark:hover:bg-blue-600/15 dark:font-semibold'
      )}
      onClick={() => {
        item.onClick?.();
        navigate(item.to);
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Blue Glow Active Indicator (Dark Mode Only) */}
      {isLinkActive && (
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-3/5 bg-blue-500 rounded-r-full shadow-[0_0_12px_rgba(59,130,246,0.8)] dark:block hidden" />
      )}

      {item.icon && renderIcon(item.icon, iconRef, cn(
        item.iconClassName,
        isLinkActive && 'dark:text-blue-400 dark:drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]'
      ))}
      
      {!isCollapsed && (
        <span className={cn('text-sm transition-colors', { 'font-semibold': isLinkActive })}>
          {item.label}
        </span>
      )}
      
      {!isCollapsed && item.badge && (
        <span className="ml-auto text-[10px] font-bold px-1.5 py-0.5 rounded-full bg-blue-500/10 text-blue-500 border border-blue-500/20 uppercase tracking-tight">
          {item.badge}
        </span>
      )}
      
      {!isCollapsed && item.locked && !item.badge && (
        <LockKeyhole className="size-3.5! ml-auto opacity-50" />
      )}
      
      {item.notification && !item.locked && (
        <Dot
          variant="destructive"
          className="absolute right-1 top-2 transform -translate-y-1/2 size-2 rounded-full ring-2 ring-background"
        />
      )}
    </SidebarMenuButton>
  );

  return <SidebarMenuItem className="px-2 py-0.5">{button}</SidebarMenuItem>;
};

function renderIcon(
  Icon: ComponentType<{ className?: string }>,
  ref: React.RefObject<AnimatedIconHandle | null>,
  iconClassName?: string,
) {
  return React.createElement(Icon, {
    className: cn('size-4 pointer-events-none', iconClassName),
    ref,
  } as { className: string });
}

type AnimatedIconHandle = {
  startAnimation: () => void;
  stopAnimation: () => void;
};
