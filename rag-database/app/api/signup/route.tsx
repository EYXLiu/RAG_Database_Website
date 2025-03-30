const url = process.env.NEXT_PUBLIC_TEST_API_URL;

export async function POST(request: Request) {
    try {
        const user = await request.json();
        const a = await fetch(`${url}/signup`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "email": user.email, 
                "password": user.password
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