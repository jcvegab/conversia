import clsx from 'clsx';

import Link from 'next/link';

interface LinkProps extends React.ComponentProps<typeof Link> {}

export const HeaderLink = (props: LinkProps) => {
  const { className, ...restProps } = props;

  return (
    <Link
      {...restProps}
      className={clsx(
        'block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700',
        className,
      )}
    />
  );
};

export default HeaderLink;
