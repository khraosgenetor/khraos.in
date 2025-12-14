import Rollbar from "rollbar";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/auth";

const rollbar = new Rollbar({
    accessToken: process.env["ROLLBAR_KHRAOS.IN_SERVER_TOKEN_1765680866"],
    captureUncaught: true,
    captureUnhandledRejections: true,
    environment: process.env.NODE_ENV,
});

export async function GET(
    req: Request,
) {
    const session = await getServerSession(authOptions);

    if (!session) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { searchParams } = new URL(req.url);
    const type = searchParams.get("type")?.slice(0, 10) ?? "error";
    const description = searchParams.get("desc")?.slice(0, 100) ?? "unlogged error";

    switch (type) {
        case "error":
            rollbar.error(`${description}`, { user: session.user });
            break;
        case "warning":
            rollbar.warning(`${description}`, { user: session.user });
            break;
        case "info":
            rollbar.info(`${description}`, { user: session.user });
            break;
        case "exception":
            try {
                throw new Error(`${description}`);
            } catch (err) {
                rollbar.error(err as Error, { user: session.user });
            }
            break;
        default:
            return NextResponse.json({ error: "Invalid type" }, { status: 400 });
    }

    return NextResponse.json({ ok: true });
}
