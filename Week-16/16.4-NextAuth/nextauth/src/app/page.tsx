import Image from "next/image";
import { Appbar } from "./components/Appbar";
import { getServerSession } from "next-auth";
import { NEXT_AUTH } from "@/lib/auth";

export default async function Home() {
  const session = await getServerSession(NEXT_AUTH)                            // passing the NEXT_AUTH as args is required here to get the id on the server also,which was set in session.user.id(refer auth.ts->callback->session)
  return (
    <div>
      <Appbar></Appbar>
      <div>
        Using getServerSession on server component:- {JSON.stringify(session)}
      </div>
    </div>
  );
}
