"use client"
import { useEffect, useState } from "react";

export default function Home() {
    const [message, setMessage] = useState("");
    useEffect(() => {
        const setMes = async () => {
            try {
                const res = await fetch(process.env.NEXT_PUBLIC_BASE_URL + "/api/testFetch");
                const data = await res.json();
    
                if (res.ok) {
                    console.log(data);
                    setMessage(data.value);
                } else {
                    setMessage("Please wait");
                }
            } catch (error) {
                console.log("Error: ", error);
                setMessage("Failed to fetch");
            }
        };
        setMes();
    }, []);
    

  return (
    <div>
      <h1>{message || "Loading..."}</h1>
    </div>
  )
}
