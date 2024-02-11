// src/components/Login.tsx
import React from 'react';
import { signInWithGoogle } from '@/hooks/useAuth'; // Adjust the import path as needed

const Login = () => {
    return (
        <div>
            {/* Other login form elements */}
            <button onClick={signInWithGoogle}>Sign in with Google</button>
        </div>
    );
};

export default Login;
