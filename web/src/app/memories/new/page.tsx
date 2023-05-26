import { NewMemoryForm } from '@/components/NewMemoryForm'
import { ChevronLeft } from 'lucide-react'
import Link from 'next/link'

export default function newMemorie() {
  return (
    <div className="gab-4 flex flex-1 flex-col">
      <Link
        href="/"
        className="gab-1 mb-2 flex items-center text-sm text-gray-200 hover:text-gray-100"
      >
        <ChevronLeft className="h-4 w-4" />
        Voltar à timeline
      </Link>

      <NewMemoryForm />
    </div>
  )
}
