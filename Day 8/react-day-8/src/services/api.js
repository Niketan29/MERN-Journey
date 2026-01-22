const fetchApi = async (id) => {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);

        if (!response.ok) {
            throw new Error("Something went wrong...")
        }
        const data = await response.json();

        return data;

    } catch (error) {
        throw new Error("User Not Found...");
    }
}

export default fetchApi;