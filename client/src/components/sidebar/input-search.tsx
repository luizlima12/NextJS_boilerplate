'use client'
import { Search } from 'lucide-react'
import { Label } from '@/components/ui/label'
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarInput
} from '@/components/ui/sidebar'
import React from 'react'
import { useSidebar } from '@/components/ui/sidebar'
import useDebounce from '@/hooks/use-debounce'

interface SearchFormProps extends React.ComponentProps<'form'> {
  onSearchChange?: (value: string) => void
}

export function InputSearch({ onSearchChange, ...props }: SearchFormProps) {
  const [search, setSearch] = React.useState<string>('')
  const { open } = useSidebar()
  const debouncedSearch = useDebounce(search, 300)

  React.useEffect(() => {
    if (onSearchChange) {
      onSearchChange(debouncedSearch)
    }
  }, [debouncedSearch, onSearchChange])

  if (open)
    return (
      <form {...props}>
        <SidebarGroup className="w-[287px] -ml-2">
          <SidebarGroupContent className="relative min-w-full">
            <Label htmlFor="search" className="sr-only">
              Search
            </Label>
            <SidebarInput
              id="search"
              placeholder="Pesquisar"
              className="pl-8"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value)
              }}
            />
            <Search
              className="pointer-events-none absolute top-1/2 left-2 size-4 -translate-y-1/2 opacity-50
                select-none"
            />
          </SidebarGroupContent>
        </SidebarGroup>
      </form>
    )
}
