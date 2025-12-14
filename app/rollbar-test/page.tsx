import { getServerSession } from "next-auth/next";
import { authOptions } from "@/auth";
import RollbarButtons from "./RollbarButtons";
import AccessDenied from "./AccessDenied";

export default async function RollbarTestPage() {
    const session = await getServerSession(authOptions);

    if (!session) {
        return <AccessDenied />;
    }

    return (
        <div style={{ padding: 40 }}>
            <h1>Rollbar Internal Test</h1>
            <p>Signed in as {session.user?.name}</p>
            <RollbarButtons />
        </div>
    );
}
