import { ReactNode } from 'react'

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    // <div className="flex h-full items-center justify-center">
    //   <div className="flex w-full flex-col px-4 lg:px-0">{children}</div>
    // </div>
    <div>{children}</div>
  )
}
