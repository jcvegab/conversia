// import { createContext, useContext, useEffect, useState } from 'react';
// import { v4 as uuidv4 } from 'uuid';

// import { createAuth } from '../../modules/auths/application/create/createAuth';
// import { getAllAuths } from '../../modules/auths/application/get-all/getAllAuths';
// import { Auth } from '../../modules/auths/domain/Auth';
// import { AuthRepository } from '../../modules/auths/domain/AuthRepository';

// export interface ContextState {
//   auth: Auth | null;
//   createSession: (auth: Omit<Auth, 'id'>) => void;
// }

// export const AuthsContext = createContext({} as ContextState);

// export const AuthsContextProvider = ({
//   children,
//   repository,
// }: React.PropsWithChildren<{ repository: AuthRepository }>) => {
//   const [auth, setAuth] = useState<Auth | null>(null);

//   function create(auth: Omit<Auth, 'id'>) {
//     const id = uuidv4();
//     createAuth(repository, { id, ...auth });
//     getAuths();
//   }

//   async function getAuths() {
//     const auths = await getAllAuths(repository);
//     setAuth(auths);
//   }

//   useEffect(() => {
//     getAuths();
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);

//   return (
//     <AuthsContext.Provider value={{ auth, createAuth: create }}>
//       {children}
//     </AuthsContext.Provider>
//   );
// };

// export const useAuthsContext = () => useContext(AuthsContext);
