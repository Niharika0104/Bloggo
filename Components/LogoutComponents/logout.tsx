// pages/logout.tsx
import { GetServerSideProps } from 'next';
import { destroyCookie } from 'nookies';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const Logout = () => {
  const router = useRouter();

  useEffect(() => {
    // Client-side redirect to the home page after logout
    router.replace('/auth/login');
  }, [router]);

  return <div>Logging out...</div>;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  // Destroy the cookie
  destroyCookie(context, 'token');

  // Optionally, you can destroy other cookies or perform other cleanup actions

  // Redirect to the home page after logout
  return {
    redirect: {
      destination: '/',
      permanent: false, // Temporary redirect
    },
  };
};

export default Logout;
