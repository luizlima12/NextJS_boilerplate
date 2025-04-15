'use client'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'

export default function NotFound() {
  const router = useRouter()
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold text-center mt-20">
        404 - Page Not Found
      </h1>
      <p className="text-center mt-4">
        The page you are looking for does not exist. Please check the URL or
        return to the homepage.
      </p>
      <div className="flex justify-center mt-10">
        <Button onClick={() => router.push('/')} variant={'default'}>
          Go to home page
        </Button>
      </div>
      <div className="flex justify-center mt-10"></div>
    </div>
  )
}
