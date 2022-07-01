import axios from "axios"
// import API_BASE_URL from "lifetracker-api/constants.js"

class ApiClient {

    constructor(remoteHostUrl) {
        this.remoteHostUrl = remoteHostUrl
        this.token = null
    }

    setToken(token) {
        this.token = token
    }

    async request(endpoint, method = "GET", data = {}) {
        const url = `${this.remoteHostUrl}/${endpoint}`

        const headers = {
            "Content-Type": "application/json"
        }

        // if token exists, attach Authorization header
        if (this.token) {
            headers["Authorization"] = `Bearer ${this.token}`
        }

        try {
            const res = await axios({ url, method, data, headers })
            return { data: res.data, error: null}
        } catch(err) {
            console.error( {errorResponse: err.response} )
            const message = error?.response?.data?.error?.message
            return { data: null, error: message || String(error) }
        }
    }

    async login(credentials) {
        // call request method to send http request to auth/login endpoint
        return await this.request({ endpoint:"/auth/login", method:'POST', data:credentials })
    }

    async signup(credentials) {
        // call request method to send http request to auth/register endpoint
        return await this.request({ endpoint:"/auth/register", method:'POST', data:credentials })
    }

    async fetchUserFromToken() {
        // call request method to send http request to the auth/me endpoint
        return await this.request({ endpoint:"/auth/me", method:'GET', data:{} })
    }

    // add more methods here as needed for making api requests

}

// export default new ApiClient(API_BASE_URL || "http://localhost:3001")
export default new ApiClient("http://localhost:3001")