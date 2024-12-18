"use client"

import { useRouter } from "next/navigation"
import { useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

export const SigninForm = () => {
    const router = useRouter();
    const [emailField, setEmailfield] = useState('');
    const [passwordField, setPasswordField] = useState('');

    const handleEnterButton = () => {
        router.replace('/home');
    }

    return (
        <>
            <Input 
                placeholder="Digite se e-mail"
                value={emailField}
                onChange={t => setEmailfield(t)}
            />
            <Input
                placeholder="Digite sua senha"
                value={passwordField}
                onChange={t => setPasswordField(t)}
                password
            />

            <Button 
                label="Entrar"
                onClick={handleEnterButton}
                size={1}
            />
        </>
    )
}