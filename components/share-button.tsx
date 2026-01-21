"use client";

import * as React from "react";
import { Copy, Share, Check, Mail } from "lucide-react";
import { Button } from "./ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "./ui/dialog";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "./ui/tooltip";
import { RiWhatsappLine } from "react-icons/ri";

interface shareButtonProps {
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

export function ShareButton({ estimate }: shareButtonProps) {
    const [isCopied, setIsCopied] = React.useState(false);

    const shareLink = estimate ? `https://jobble.com.br/estimates/${estimate.id}` : "";

    const handleCopy = () => {
        navigator.clipboard.writeText(shareLink);

        setIsCopied(true);

        setTimeout(() => {
            setIsCopied(false);
        }, 2000);
    };

    return (
        <Dialog>
            <Tooltip>
                <TooltipTrigger asChild>
                    <DialogTrigger asChild>
                        <Button
                            variant={"ghost"}
                            size={"icon"}
                            className="text-muted-foreground"
                        >
                            <Share />
                        </Button>
                    </DialogTrigger>
                </TooltipTrigger>
                <TooltipContent side="bottom">
                    <p>Compartilhar</p>
                </TooltipContent>
            </Tooltip>

            <DialogContent className="sm:max-w-md rounded-2xl p-4">
                <DialogHeader className="gap-1">
                    <DialogTitle className="text-base font-sans leading-4">
                        Compartilhar
                    </DialogTitle>
                    <DialogDescription className="font-sans">
                        Qualquer pessoa com acesso a esse link poderá aprovar o orçamento.
                    </DialogDescription>
                </DialogHeader>

                <div className="flex items-center gap-2">
                    <div className="grid flex-1 gap-2">
                        <Label htmlFor="link" className="sr-only">
                            Link
                        </Label>
                        <Input
                            id="link"
                            defaultValue={shareLink}
                            readOnly
                        />
                    </div>

                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Button
                                className="text-muted-foreground transition-all"
                                variant={"ghost"}
                                size={"icon"}
                                onClick={handleCopy}
                                disabled={isCopied}
                            >
                                {isCopied ? (
                                    <Check className="text-green-600" />
                                ) : (
                                    <Copy />
                                )}
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent side="bottom">
                            <p>{isCopied ? "Copiado!" : "Copiar"}</p>
                        </TooltipContent>
                    </Tooltip>
                </div>

                <DialogFooter className="sm:justify-start">
                    <Button className="text-muted-foreground" variant={"ghost"} size={"icon"}>
                        <RiWhatsappLine />
                    </Button>

                    <Button className="text-muted-foreground" variant={"ghost"} size={"icon"}>
                        <Mail />
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}