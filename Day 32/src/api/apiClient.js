export const apiClient = async ({apiFn, requiresAuth=false})=>{
    const token = localStorage.getItem("token");

    try {
        
        if(requiresAuth && !token){
            throw{
                status:401,
                message:"No token found"
            }
        }

        return await apiFn()

    } catch (error) {
        throw(error)
    }
}