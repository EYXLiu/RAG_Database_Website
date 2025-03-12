const url = process.env.NEXT_PUBLIC_API_URL;

export async function GET() {
    try {
        const response = await fetch(`${url}`);
        const data = await response.json();
        return new Response(
            JSON.stringify({ value: data.message }),
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