"use client";
import React from 'react';
import { useAuth } from "@/hooks/useAuth";

const Login = () => {
    const { signInWithGoogle } = useAuth();

    return (
        <div>
            <button onClick={signInWithGoogle}>Sign in with Google</button>
        </div>
    );
};

export default Login;
