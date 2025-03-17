"use client"
import { useEffect, useState } from "react";

export default function GetVal({ m }: { m: string }) {
    const [message, setMessage] = useState("");
    useEffect(() => {
        const setMes = async () => {
            try {
                const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/testSentence?message=${encodeURIComponent(m)}`);
                const data = await res.json();

                if (res.ok) {
                    setMessage(String(data.value.embedding));
                } else {
                    setMessage("Value error");
                }
            } catch (error) {
                console.log("Error: ", error);
                setMessage("Failed to fetch");
            }
        };
        setMes();
    }, [m]);

    return <p className="break-words whitespace-normal">{message}</p>
}