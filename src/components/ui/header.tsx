"use client";

import { HomeIcon, ListOrdered, ListOrderedIcon, LogInIcon, MenuIcon, PercentCircleIcon, PercentIcon, ShoppingCartIcon } from "lucide-react";
import { Button } from "./button";
import { Card } from "./card";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "./sheet";
import { signIn } from "next-auth/react";

const Header = () => {
    const handleLoginClick = async ( ) => {
        await signIn();
    }
    return <Card className="flex justify-between p-[1.875rem] items-center">
        <Sheet>
            <SheetTrigger asChild>
                <Button size="icon" variant="outline">
                    <MenuIcon />
                </Button>
            </SheetTrigger>

            <SheetContent side="left">
                <SheetHeader className="text-left text-lg font-semibold">
                    Menu
                </SheetHeader>

                <div className="mt-2 flex flex-col gap-2">
                    <Button onClick={handleLoginClick} variant="outline" className="w-full justify-start gap-2">
                        <LogInIcon size={16} />
                        Fazer Login
                    </Button>

                    <Button variant="outline" className="w-full justify-start gap-2">
                        <HomeIcon size={16} />
                        Início
                    </Button>

                    <Button variant="outline" className="w-full justify-start gap-2">
                        <PercentIcon size={16} />
                        Ofertas
                    </Button>

                    <Button variant="outline" className="w-full justify-start gap-2">
                        <ListOrderedIcon size={16} />
                        Catálago
                    </Button>
                </div>
            </SheetContent>
        </Sheet>

        <h1 className="font-semibold text-lg"><span className="text-primary">FSW</span>Store</h1>

        <Button size="icon" variant="outline">
            <ShoppingCartIcon />
        </Button>
    </Card>;
};
 
export default Header;