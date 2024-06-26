
"use server"

import { authenticateSchema, loginSchema, registerSchema } from "@/lib/validations"
import { env } from "@/lib/env.mjs"
import { redirect } from "next/navigation"
import { signIn } from '@/auth'
import { AuthError } from "next-auth"
import { count } from "console"


export async function login(_currentState: any, formData: FormData) {
    const validatedFields = loginSchema.safeParse({
        identifier: formData.get('identifier')
    })

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
        }
    }

    const { identifier } = validatedFields.data

    const response = await fetch(`${env.NEXT_PUBLIC_API_URL}/api/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${env.API_TOKEN_NOVEL}`
        },
        body: JSON.stringify({
            identifier: formData.get('identifier'),
        })
    })

    const data = await response.json()

    if (!response.ok) {
        return {
            message: data?.error?.message || "Something went wrong. Please try again."
        }
    }

    redirect(`verification?identifier=${identifier}&code=${data?.otp}`)
}


export async function authenticate(_prevState: string | undefined, formData: FormData) {
    try {
        const identifier = formData.get('identifier')
        const code = formData.get('code')

        const validateFields = authenticateSchema.safeParse({
            identifier,
            code,
        })

        if (!validateFields.success) {
            return validateFields.error.errors[0].message
        }

        await signIn("credentials", formData)

    } catch (error) {
        if (error instanceof AuthError) {
            console.log(error)
            switch (error.type) {
                case 'CredentialsSignin':
                    return 'Invalid credentials.'
                case 'CallbackRouteError':
                    return error.cause?.err?.message
                default:
                    return 'Something went wrong. Please try again.'
            }
        }
        throw error
    }
}

export async function register(_currentState: any, formData: FormData) {
    const firstName = formData.get('firstName')
    const lastName = formData.get('lastName')
    const email = formData.get('email')
    const countryCode = formData.get('countryCode')
    const phoneNumber = formData.get('phoneNumber')
    const gender = formData.get('gender')

    const validatedFields = registerSchema.safeParse({
        firstName,
        lastName,
        email,
        countryCode,
        phoneNumber,
        gender,
    })

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
        }
    }

    const response = await fetch(`${env.NEXT_PUBLIC_API_URL}/api/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${env.API_TOKEN_NOVEL}`
        },
        body: JSON.stringify({
            firstName,
            lastName,
            email,
            countryCode,
            phoneNumber,
            gender
        })
    })

    const data = await response.json()

    if (!response.ok) {
        return {
            message: data?.error?.message || "Something went wrong. Please try again."
        }
    }
}