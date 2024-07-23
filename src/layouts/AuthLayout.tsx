import React from "react";
type Proptypes = {
 children: React.ReactNode;
};
const AuthLayout = ({ children }: Proptypes) => {
 return (
  <>
   <div>logo</div>
   {children}
  </>
 );
};

export default AuthLayout;
