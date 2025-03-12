"use client"
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const checkExternalServer = async () => {
      try {
        const res = await fetch(process.env.NEXT_PUBLIC_BASE_URL + "/api/statusCheck");
        const data = await res.json();
  
        if (data.status !== "OK") {
          router.push("/pages/main");
        }
      } catch (error) {
        console.error("Error: ", error);
      }
    };
    checkExternalServer();
  }, [router]);

  return (
    <div>
        <h1>Oops! The server is down.</h1>
        <div>Please wait a couple of minutes so the server can start up again!</div>
    </div>
  );
}
