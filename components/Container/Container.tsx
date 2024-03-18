import clsx from 'clsx';

import { StyleProps } from '@/types/common';

export interface ContainerProps extends StyleProps {
  children: React.ReactNode;
}

export const Container = (props: ContainerProps) => {
  const { children } = props;
  const { className, style } = props;

  return (
    <main
      className={clsx(
        'flex min-h-screen flex-col py-4 px-8 bg-gray-50 dark:bg-gray-900',
        className,
      )}
      style={style}
    >
      {children}
    </main>
  );
};

export default Container;
