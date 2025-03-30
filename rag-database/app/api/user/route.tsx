const url = process.env.NEXT_PUBLIC_TEST_API_URL;

export async function GET(request: Request) {
    try {
        const { searchParams } = new URL(request.url);
        const token: string = searchParams.get("jwt") ?? (() => { throw new Error("Missing required query parameter: jwt token"); })();
        const a = await fetch(`${url}/user/get?jwt=${token}`, {
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

 export async function PUT(request: Request) {
    try {
        const new_data = await request.json();
        const a = await fetch(`${url}/user/update`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "token": new_data.token, 
                "new": new_data.new
            }),
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