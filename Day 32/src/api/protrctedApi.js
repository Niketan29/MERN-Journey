export const fetchDashboardApi = () => {
    return new Promise((res, rej) => {
        setTimeout(() => {

            const token = localStorage.getItem("token");

            if (token === "mock-jwt-token-123") {
                res({
                    data: {
                        message: "Welcome to Protected Dashboard...",
                        stats: {
                            users: 120,
                            revenue: "$5,000"
                        }
                    }
                })
            } else {
                rej({
                    response: {
                        status: 401,
                        message: "Unauthorized"
                    }
                })
            }
        }, 2000)
    })
}