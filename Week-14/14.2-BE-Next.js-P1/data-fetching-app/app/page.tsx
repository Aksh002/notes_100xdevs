import axios from "axios";

async function getUserDetails() {
  await new Promise((r)=>setTimeout(r,5000))
  const response = await axios.get("http://localhost:3000/api/user")
	return response.data;
}

export default async function Home() {
  const response= await getUserDetails()
  return (
    <div className="flex flex-col justify-center h-screen">
        <div className="flex justify-center">
            <div className="border p-8 rounded">
                <div>
                    Name: {response?.name}
                </div>
                
                Email: {response?.email}
            </div>
        </div>
    </div>
  );
}
