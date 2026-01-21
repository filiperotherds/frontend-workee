import {
    AlertDialog, AlertDialogAction, AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger
} from "./ui/alert-dialog"
import { Button } from "@/components/ui/button"
import { Archive } from "lucide-react"
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip"

interface archiveButtonProps {
    estimate: {
        id: string;
        estimateNo: string;
        date: string;
        dueDate: string;
        tax: number;
        status: string;
        customer: {
            name: string;
            address: string;
        };
        items: {
            qty: number;
            description: string;
            unitPrice: number;
        }[];
    }
}

export function ArchiveButton({ estimate }: archiveButtonProps) {
    return (
        <AlertDialog>
            <Tooltip>
                <TooltipTrigger asChild>
                    <AlertDialogTrigger asChild>
                        <Button
                            variant={"ghost"}
                            size={"icon"}
                            className="bg-red-50 hover:bg-red-100 text-destructive hover:text-destructive"
                            onClick={() => { }}
                        >
                            <Archive />
                        </Button>
                    </AlertDialogTrigger>
                </TooltipTrigger>
                <TooltipContent side="bottom">
                    <p>Arquivar</p>
                </TooltipContent>
                <AlertDialogContent size="sm" className="sm:max-w-md rounded-2xl p-4">
                    <AlertDialogHeader className="gap-0">
                        <AlertDialogTitle className="font-sans text-base">Arquivar Orçamento?</AlertDialogTitle>
                        <AlertDialogDescription>
                            Tem certeza que deseja arquivar este orçamento?
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel variant="outline" className="h-8 text-muted-foreground">Cancelar</AlertDialogCancel>
                        <AlertDialogAction asChild>
                            <Button variant={"ghost"} className="h-8 bg-red-50 hover:bg-red-100 text-destructive hover:text-destructive">
                                <Archive />
                                Arquivar
                            </Button>
                        </AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </Tooltip>
        </AlertDialog>
    )
}
