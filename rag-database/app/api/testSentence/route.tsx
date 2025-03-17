import { pipeline } from "@huggingface/transformers";

const url = process.env.NEXT_PUBLIC_TEST_API_URL;

export async function GET(request: Request) {
    try {
        const { searchParams } = new URL(request.url);
        const extractor = await pipeline("feature-extraction", "Xenova/all-MiniLM-L6-v2");
        const m: string = searchParams.get("message") ?? (() => { throw new Error("Missing required query parameter: message"); })();
        const message: number[] = (await extractor(m, { pooling: "mean", normalize: true })).tolist();
        const stringed: string[] = message.map(num => num.toString());
        const a = await fetch(`${url}/sentence`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ embd: stringed })
        });
        const data = await a.json()
        console.log(data);
        return new Response(
            JSON.stringify({ value: data }),
            { status: 200, headers: { "Content-Type": "application/json" } }
          );
    } catch (error) {
        console.log("Error fetching: ", error);
        return new Response (
            JSON.stringify({ value: null }),
            { status: 500, headers: { "Content-Type": "application/json" } }
        );
    }
}