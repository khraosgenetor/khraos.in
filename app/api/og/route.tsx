import { ImageResponse } from "@vercel/og";

export const runtime = "edge";

export async function GET(request: Request) {
    const baseURL = request.headers.get("host")?.includes("localhost")
        ? "http://localhost:3000"
        : "https://khraos.in";

    try {
        const { searchParams } = new URL(request.url);
        const title = searchParams.get("title")?.slice(0, 100) ?? "Khraos Genetor's Website";
        const description = searchParams.get("description")?.slice(0, 165) ?? "Khraos Genetor's Webpage";

        let randQuotesOG = "Code. Debug. Git Push. - Khraos";

        try {
            const res = await fetch(`${baseURL}/quotes.json`);
            const quotes = await res.json();
            const randQuotesObj = quotes[Math.floor(Math.random() * quotes.length)];
            randQuotesOG = `${randQuotesObj.quote} - ${randQuotesObj.author}`;
        } catch (e) {
            console.error(e);
        }

        return new ImageResponse(
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                    height: "100%",
                    backgroundColor: "#000000",
                    color: "#ffffff",
                    fontFamily: "'Inter', sans-serif",
                    padding: "80px 60px",
                    boxSizing: "border-box",
                }}
            >
                <div
                    style={{
                        fontSize: 64,
                        fontWeight: 700,
                        textAlign: "center",
                        marginBottom: 20,
                        color: "#00ffff",
                    }}
                >
                    {title}
                </div>

                <div
                    style={{
                        fontSize: 36,
                        fontWeight: 500,
                        textAlign: "center",
                        maxWidth: 900,
                        lineHeight: 1.3,
                        color: "#cccccc",
                        marginBottom: 30,
                    }}
                >
                    {description}
                </div>

                <div
                    style={{
                        fontSize: 32,
                        fontWeight: 400,
                        textAlign: "center",
                        maxWidth: 800,
                        lineHeight: 1.4,
                        color: "#00ff9f",
                        fontStyle: "italic",
                    }}
                >
                    {randQuotesOG}
                </div>
            </div>
        );
    } catch (e: unknown) {
        console.error(e);
        return new Response("Failed to generate OG image", { status: 500 });
    }
}
