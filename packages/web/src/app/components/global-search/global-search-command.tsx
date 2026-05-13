import { t } from 'i18next';
import { Search } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

import { useGlobalSearch } from './global-search-context';

export function GlobalSearchCommand() {
  const { setOpen } = useGlobalSearch();
  const isMac =
    typeof navigator !== 'undefined' && /(Mac)/i.test(navigator.userAgent);

  return (
    <Button
      variant="ghost"
      onClick={() => setOpen(true)}
      className={cn(
        'h-10 w-full justify-start gap-3 overflow-hidden rounded-xl px-3 text-sm font-medium transition-all duration-300',
        'border border-sidebar-border bg-background hover:bg-sidebar-accent',
        'dark:bg-white/5 dark:border-white/5 dark:hover:bg-white/10 dark:text-muted-foreground dark:hover:text-foreground',
        'group-data-[collapsible=icon]:size-10! group-data-[collapsible=icon]:border-0 group-data-[collapsible=icon]:bg-transparent group-data-[collapsible=icon]:p-3!',
      )}
    >
      <Search className="size-4 shrink-0 dark:text-blue-500/80" />
      <span className="flex-1 text-left group-data-[collapsible=icon]:hidden">
        {t('Search...')}
      </span>
      <kbd className="pointer-events-none hidden h-5 select-none items-center gap-1 rounded-md border border-white/10 bg-white/5 px-1.5 font-mono text-[10px] font-bold text-muted-foreground sm:flex group-data-[collapsible=icon]:hidden!">
        {isMac ? '⌘' : 'Ctrl'} K
      </kbd>
    </Button>
  );
}
