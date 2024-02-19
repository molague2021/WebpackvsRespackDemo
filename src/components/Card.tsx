import clsx from 'clsx';
export const Card = ({ children, className = '' }) => {
  return (
    <div className={clsx('rounded-xl bg-white shadow-md p-4', className)}>
      {children}
    </div>
  );
};
