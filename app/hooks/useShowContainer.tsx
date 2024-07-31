"use client";
import { useEffect, useState } from "react";


export default function useShowContainer() {

    const [isVisible, setIsVisible] = useState<boolean>(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 200);

        return () => clearTimeout(timer);
    }, [isVisible]);

    return isVisible

}