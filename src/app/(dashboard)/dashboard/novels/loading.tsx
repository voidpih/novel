import { Spinner } from '@/components/ui/spinner'

export default function Loading() {
  return (
    <div className="grid min-h-screen place-items-center">
      <Spinner className="text-brand-500" />
    </div>
  )
}
