import React, { lazy, Suspense } from 'react';
import useAuth from '@/utils/hooks/useAuth';
import useLocale from '@/utils/hooks/useLocale';
import LoadingScreen from '@/components/LoadingScreen/LoadingScreen';
import { LayoutTypes } from '@/@types/layout';
import { useAppSelector } from '@/store';

const layouts: Record<LayoutTypes, React.LazyExoticComponent<React.ComponentType>> = {
  // LEGACY
  [LayoutTypes.SimpleSideBar]: lazy(() => import('./LayoutTypes/SimpleSideBar')),
  [LayoutTypes.DeckedSideBar]: lazy(() => import('./LayoutTypes/DeckedSideBar')),
  [LayoutTypes.CollapsedSideBar]: lazy(() => import('./LayoutTypes/CollapsedSideBar')),
  // NEW
  [LayoutTypes.CollapsibleAppShell]: lazy(() => import('./LayoutTypes/CollapsibleAppShell')),
  [LayoutTypes.Plain]: lazy(() => import('./LayoutTypes/PlainLayout')),
};

const AuthLayout = lazy(() => import('./AuthLayout'));

export function Layout() {
  const { authenticated } = useAuth();
  const layoutType = useAppSelector((state) => state.theme.currentLayout);

  useLocale();

  const AppLayout = authenticated ? layouts[layoutType] : AuthLayout;

  return (
    <Suspense
      fallback={
        <div className="flex flex-auto flex-col h-[100vh]">
          <LoadingScreen />
        </div>
      }
    >
      <AppLayout />
    </Suspense>
  );
}
