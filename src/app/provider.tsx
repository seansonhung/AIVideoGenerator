import React, { ReactNode } from 'react';

type Props = {
  children: ReactNode;  // Define the children prop
};

const Provider = ({ children }: Props) => {
  return (
    <div>
      {children}
    </div>
  );
};

export default Provider;
