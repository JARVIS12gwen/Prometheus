import { AuthFormTemplate } from '@/features/authentication';

const SignInPage: React.FC = () => {
  return (
    <>
      <div className="flex flex-col space-y-2 text-center mb-6">
        <h1 className="text-3xl font-bold tracking-tight text-gradient">
          {t('Prometheus')}
        </h1>
        <p className="text-sm text-muted-foreground">
          {t('Login to your automation platform')}
        </p>
      </div>
      <AuthFormTemplate form={'signin'} />
    </>
  );
};

SignInPage.displayName = 'SignInPage';

export { SignInPage };
