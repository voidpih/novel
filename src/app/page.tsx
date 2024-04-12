import { Metadata } from 'next'
import Link from 'next/link'

import { buttonVariants } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Home',
  description:
    'Built with Next.js, Shadcn UI, Next Auth 5, Tailwind CSS, and Typesript.',
}

export default async function HomePage() {
  return (
    <div>
      <header className="sticky top-0 z-50 w-full border-b">
        <div className="container flex h-14 max-w-screen-xl items-center justify-between">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 54 33"
              className="h-8 w-8 text-brand-500"
            >
              <g clipPath="url(#prefix__clip0)">
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M27 0c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.054.513 3.522 2.004 5.147 3.653C30.744 13.09 33.808 16.2 40.5 16.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C36.756 3.11 33.692 0 27 0zM13.5 16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C17.244 29.29 20.308 32.4 27 32.4c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C23.256 19.31 20.192 16.2 13.5 16.2z"
                  clipRule="evenodd"
                />
              </g>
              <defs>
                <clipPath id="prefix__clip0">
                  <path fill="#fff" d="M0 0h54v32.4H0z" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div>
            <Link
              href="/register"
              className="text-sm hover:text-brand-600 hover:underline"
            >
              Register
            </Link>
          </div>
        </div>
      </header>
      <div className="container relative">
        <section className="mx-auto flex flex-col items-center gap-2 py-8 md:py-24 md:pb-8 lg:py-24 lg:pb-20">
          <h1 className="max-w-2xl text-center text-3xl font-bold leading-tight text-slate-900 md:text-6xl lg:leading-[1.1]">
            Front End Assessment (Novel)
          </h1>
          <span className="text-lgsm:text-xl block max-w-[980px] text-center">
            Built with Next.js, Shadcn UI, Next Auth 5, Tailwind CSS, and
            Typesript.
          </span>
          <div className="flex w-full items-center justify-center space-x-4 py-4 md:pb-10">
            <Link
              href="/login"
              className={buttonVariants({ variant: 'brand' })}
            >
              Get started
            </Link>
            <Link
              href="https://github.com/voidpih/novel"
              className={buttonVariants({ variant: 'outline' })}
              target="_blank"
            >
              <svg viewBox="0 0 438.549 438.549" className="mr-2 h-4 w-4">
                <path
                  fill="currentColor"
                  d="M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z"
                ></path>
              </svg>
              Github
            </Link>
          </div>
        </section>
        <section className="pb-12 pt-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-4 text-lg font-semibold leading-6 text-slate-900">
              Assessment Scope
            </h2>
            <div className="grid grid-cols-1 gap-8 border-t border-slate-900/5 pt-10 sm:grid-cols-2 xl:grid-cols-4">
              {[
                'User registration',
                'One-Time Password (OTP) verification',
                'Login in with One-Time Password (OTP)',
                'Access to Novel after login',
              ].map((item) => (
                <h3 className="text-sm font-semibold text-slate-900">{item}</h3>
              ))}
            </div>
          </div>
        </section>
        <footer className="py-6 md:px-8 md:py-0">
          <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
            <p className="text-balance text-center text-sm leading-loose md:text-left">
              Built by
              <Link
                href={`https://github.com/voidpih`}
                className="font-medium underline underline-offset-4"
              >
                {` Ahmad Afifuddin`}
              </Link>
              {`. The source code is available on `}
              <Link
                href={`https://github.com/voidpih/novel`}
                className="font-medium underline underline-offset-4"
              >
                Github
              </Link>
            </p>
          </div>
        </footer>
      </div>
    </div>
  )
}
