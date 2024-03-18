interface RowBaseProps {
  children: React.ReactNode;
}

interface RowContainerProps extends RowBaseProps {}

export const RowContainer = ({ children }: RowContainerProps) => {
  return (
    <dl className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
      {children}
    </dl>
  );
};

interface RowTitleProps extends RowBaseProps {}

export const RowTitle = ({ children }: RowTitleProps) => {
  return (
    <dt className="text-sm font-medium leading-6 text-gray-900">{children}</dt>
  );
};

interface RowDescriptionProps extends RowBaseProps {}

export const RowDescription = ({ children }: RowDescriptionProps) => {
  return (
    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
      {children}
    </dd>
  );
};

interface RowProps {
  title: RowTitleProps['children'];
  value: string;
}

export const Row = ({ title, value }: RowProps) => {
  return (
    <RowContainer>
      <RowTitle>{title}</RowTitle>
      <RowDescription>{value}</RowDescription>
    </RowContainer>
  );
};

Row.Root = RowContainer;
Row.Title = RowTitle;
Row.Description = RowDescription;
