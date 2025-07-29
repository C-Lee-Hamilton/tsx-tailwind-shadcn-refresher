
// import { useState } from "react";

import { Card, CardContent } from "../components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../components/ui/carousel"

type ContentProps = {
    dark:boolean;
 
}
export default function Content ({dark}:ContentProps){
     
    return (
        <div className={`flex-1 flex p-[20px] items-center justify-center ${dark ? "bg-zinc-500 text-white" : "bg-zinc-300 text-black"}`}>

            <div className="w-[40%] p-[20px] border-5 bg-zinc-900 border-blue-500 rounded-md flex items-center justify-center">
                 <Carousel className="w-full max-w-xs">
                    <CarouselContent>
                        {Array.from({ length: 5 }).map((_, index) => (
                        <CarouselItem key={index}>
                            <div className="p-1">
                            <Card className="bg-black">
                                <CardContent className="flex aspect-square bg-red-400 items-center justify-center p-6">
                                <span className="text-4xl font-semibold">{index + 1}</span>
                                </CardContent>
                            </Card>
                            </div>
                        </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                 </Carousel>
            </div>
        
        </div>
    )
}