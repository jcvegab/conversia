type InputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

export interface FormInputProps
  extends Pick<
    InputProps,
    'id' | 'type' | 'placeholder' | 'required' | 'value' | 'onChange'
  > {
  label: string;
}

export const FormInput = (props: FormInputProps) => {
  const { label, id, type, placeholder, required = false } = props;
  return (
    <div>
      <label
        htmlFor={id}
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        {label}
      </label>
      <input
        {...props}
        id={id}
        name="email"
        type={type}
        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder={placeholder}
        required={required}
      />
    </div>
  );
};

export interface FormContainerProps {
  children: React.ReactNode;
}

export const FormContainer = (props: FormContainerProps) => {
  return (
    <section className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
      <div className="p-6 space-y-4 md:space-y-6 sm:p-8">{props.children}</div>
    </section>
  );
};

type ButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export interface FormActionButtonProps extends ButtonProps {}

export const FormActionButton = (props: FormActionButtonProps) => {
  return (
    <button
      {...props}
      className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
    />
  );
};
