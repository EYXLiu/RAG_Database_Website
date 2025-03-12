import type { NextApiRequest, NextApiResponse } from "next";
const url = process.env.NEXT_PUBLIC_API_URL;

export async function GET() {
    console.log("URL:", url);
    try {
      const response = await fetch(`${url}`);
  
      if (response.ok) {
        return new Response(
          JSON.stringify({ status: "OK" }),
          { status: 200, headers: { "Content-Type": "application/json" } }
        );
      } else {
        return new Response(
          JSON.stringify({ status: "ERROR" }),
          { status: 500, headers: { "Content-Type": "application/json" } }
        );
      }
    } catch (error) {
      console.error("Error:", error);
      return new Response(
        JSON.stringify({ status: "ERROR" }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }
  }