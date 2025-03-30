class BrowserInstance {
    protected user: string | null;
    protected data: any; //json
    protected token: string | null;
    
    constructor() {
        this.user = null
        this.data = null
        this.token = null
    }

    getUser() {
        return this.user;
    }

    getData() {
        return this.data;
    }

};

class ServerInstance extends BrowserInstance {

    constructor() {
        super();
    }

    async signup(email: string, password: string) {
        try { 
            const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/signup`, {
                method: "POST", 
                headers: { "Content-Type": "application/json" }, 
                body: JSON.stringify({
                    "email": email, 
                    "password": password
                })
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error("HTTP Error! " + data.value);
            };

            this.user = data.value.email;
            this.token = data.value.data;
        } catch(error) {
            console.error("Error signing up: " + error);
        }
    }

    async login(email: string, password: string) {
        try { 
            const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/login?email=${email}&password=${password}`, {
                method: "GET"
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error("HTTP Error! " + data.value);
            };

            this.user = data.value.email;
            this.token = data.value.data;
            this.get();
        } catch(error) {
            console.error("Error logging in: " + error);
        }
    }

    async logout() {
        try { 
            const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/logout`, {
                method: "POST", 
                headers: { "Content-Type": "application/json" }, 
                body: JSON.stringify({
                    "email": this.user
                })
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error("HTTP Error! " + data.value);
            };

            this.user = null;
            this.data = null;
            this.token = null;
        } catch(error) {
            console.error("Error signing up: " + error);
        }
    }

    async get() {
        try { 
            const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/user?jwt=${this.token}`, {
                method: "GET"
            });

            const data = await response.json();

            if (!response.ok) {
                this.logout();
                throw new Error("HTTP Error! " + data.value);
            };

            this.data = data.value.success
        } catch(error) {
            console.error("Error fetching data: " + error);
        }
    }

    async update() {
        try {
            const response =  await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/user`, {
                method: "PUT", 
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    "token": this.token,
                    "new": this.data
                })
            });
            
            const data = await response.json();

            if (!response.ok) {
                this.logout();
                throw new Error("HTTP Error! Status " + data);
            };

            this.token = data.value.success;
        } catch(error) {
            console.error("Error fetching data: " + error);
        }
    }
}

const browserInstance: BrowserInstance = new ServerInstance();
const serverInstance: ServerInstance = browserInstance as ServerInstance;

export function createBrowserClient() {
    return browserInstance;
}

export function createServerClient() {
    return serverInstance;
}