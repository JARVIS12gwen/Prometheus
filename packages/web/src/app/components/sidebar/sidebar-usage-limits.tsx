import { ApEdition, ApFlagId, isNil, PlatformRole } from '@activepieces/shared';
import { t } from 'i18next';
import { ArrowRight, ChevronRight, Info } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';

import { Skeleton } from '@/components/ui/skeleton';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { projectCollectionUtils } from '@/features/projects';
import { flagsHooks } from '@/hooks/flags-hooks';
import { platformHooks } from '@/hooks/platform-hooks';
import { userHooks } from '@/hooks/user-hooks';
import { formatUtils } from '@/lib/format-utils';

const SidebarUsageLimits = React.memo(() => {
  const { project } = projectCollectionUtils.useCurrentProject();
  const { platform } = platformHooks.useCurrentPlatform();
  const currentUser = userHooks.useCurrentUser();
  const isPlatformAdmin = currentUser.data?.platformRole === PlatformRole.ADMIN;
  const { data: edition } = flagsHooks.useFlag<ApEdition>(ApFlagId.EDITION);

  // Determine if user is on a free plan (adjust logic if plan names vary)
  const isFreePlan = platform.plan.name?.toLowerCase().includes('free') || !platform.plan.name;

  if (edition !== ApEdition.CLOUD || !isFreePlan) {
    return null;
  }

  if (isNil(project)) {
    return (
      <div className="flex flex-col w-full p-3 gap-2 bg-background rounded-xl border animate-pulse">
        <Skeleton className="w-24 h-4" />
        <Skeleton className="w-full h-2" />
        <Skeleton className="w-16 h-3" />
      </div>
    );
  }

  return (
    <div className={cn(
      "flex flex-col w-full p-4 gap-4 rounded-2xl transition-all duration-500",
      "bg-background border",
      "dark:bg-gradient-to-br dark:from-[#111114] dark:to-[#0a0a0c] dark:border-white/5 dark:shadow-[0_4px_20px_rgba(0,0,0,0.4)]"
    )}>
      <div className="flex flex-col gap-1">
        <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground dark:text-blue-500/80">
          {t('Current Plan')}
        </span>
        <span className="text-sm font-bold dark:text-white">
          {platform.plan.name || t('Free Plan')}
        </span>
      </div>

      <div className="space-y-3">
        <UsageRow 
          name={t('Runs')} 
          value={platform.usage?.tasks ?? 0}
          max={platform.plan.tasksLimit}
          progressBar
        />
        <UsageRow 
          name={t('Active Flows')} 
          value={platform.usage?.activeFlows ?? 0}
          max={platform.plan.activeFlowsLimit}
          progressBar
        />
      </div>

      {isPlatformAdmin && (
        <Link
          to="/pricing"
          className={cn(
            "flex items-center justify-center gap-2 py-2 px-4 rounded-xl text-xs font-bold transition-all duration-300",
            "bg-primary text-primary-foreground hover:opacity-90",
            "dark:bg-blue-600 dark:hover:bg-blue-500 dark:shadow-[0_0_15px_rgba(37,99,235,0.4)]"
          )}
        >
          <span>{t('Power Up')}</span>
          <ArrowRight className="size-3.5" />
        </Link>
      )}
    </div>
  );
});

type UsageRowProps = {
  name: string;
  value?: number | null;
  max?: number | null;
  isUnlimited?: boolean;
  suffix?: string;
  tooltip?: string;
};

const UsageRow = ({
  name,
  value,
  max,
  isUnlimited,
  suffix,
  tooltip,
  progressBar = false,
}: UsageRowProps & { progressBar?: boolean }) => {
  const hasMax = !isNil(max) && max > 0;
  const percentage = hasMax ? Math.min(100, ((value ?? 0) / max!) * 100) : 0;

  return (
    <div className="flex flex-col gap-1.5 w-full">
      <div className="flex items-center justify-between gap-2 w-full text-[11px]">
        <div className="flex items-center gap-1.5">
          <span className="truncate font-medium text-muted-foreground">{name}</span>
          {tooltip && (
            <Tooltip>
              <TooltipTrigger asChild>
                <Info className="size-3 text-muted-foreground cursor-help" />
              </TooltipTrigger>
              <TooltipContent side="top" className="max-w-[220px]">
                <p className="text-xs">{tooltip}</p>
              </TooltipContent>
            </Tooltip>
          )}
        </div>
        <div className="flex items-center gap-1 font-semibold dark:text-gray-300">
          {isUnlimited ? (
            <span className="text-muted-foreground opacity-70">{t('Unlimited')}</span>
          ) : suffix ? (
            <span>
              {formatUtils.formatNumber(value ?? 0)} {suffix}
            </span>
          ) : (
            <span>
              {formatUtils.formatNumber(value ?? 0)} /{' '}
              {hasMax ? formatUtils.formatNumber(max) : '∞'}
            </span>
          )}
        </div>
      </div>
      {progressBar && hasMax && (
        <div className="h-1.5 w-full bg-black/20 dark:bg-white/5 rounded-full overflow-hidden">
          <div 
            className="h-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.6)] transition-all duration-1000" 
            style={{ width: `${percentage}%` }}
          />
        </div>
      )}
    </div>
  );
};

SidebarUsageLimits.displayName = 'UsageLimitsButton';
export default SidebarUsageLimits;
