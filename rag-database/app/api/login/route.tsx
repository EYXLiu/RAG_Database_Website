const url = process.env.NEXT_PUBLIC_TEST_API_URL;

export async function GET(request: Request) {
    try {
        const { searchParams } = new URL(request.url);
        const email: string = searchParams.get("email") ?? (() => { throw new Error("Missing required query parameter: email"); })();
        const password: string = searchParams.get("password") ?? (() => { throw new Error("Missing required query parameter: password"); })();
        const a = await fetch(`${url}/user/get?email=${email}&password=${password}`, {
            method: 'GET',
        });

        if (!a.ok) {
            throw new Error(`HTTP error! Status: ${a.status}`);
        };

        const data = await a.json()
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