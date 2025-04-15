import { Info } from 'lucide-react'
import { Alert, AlertDescription, AlertTitle } from '../ui/alert'
import { SidebarMenuItem } from '../ui/sidebar'

export default function NotFoundSearch() {
  return (
    <SidebarMenuItem>
      <Alert className="flex items-center gap-2">
        <Info size={50} />
        <div className="flex flex-col">
          <AlertTitle className="font-bold">Não encontrado</AlertTitle>
          <AlertDescription>Efetue uma nova pesquisa</AlertDescription>
        </div>
      </Alert>
    </SidebarMenuItem>
  )
}
