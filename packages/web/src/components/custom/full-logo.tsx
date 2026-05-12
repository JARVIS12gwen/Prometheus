import { t } from 'i18next';

const FullLogo = () => {
  return (
    <div className="flex items-center justify-center py-4">
      <span className="text-4xl font-extrabold tracking-tighter text-gradient select-none">
        {t('Prometheus')}
      </span>
    </div>
  );
};
FullLogo.displayName = 'FullLogo';
export { FullLogo };
