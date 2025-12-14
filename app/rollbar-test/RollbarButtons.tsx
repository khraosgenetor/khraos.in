"use client";

export default function RollbarButtons() {
    const send = (type: string, desc: string) => {
        // Redirect to API dynamic route
        window.location.href = `/api/rollbar-test?type=${type}&desc=${desc}`;
    };

    return (
        <div className="flex flex-wrap gap-3">
            <button
                type="button"
                onClick={() => send("error", "Bogus Error Test")}
                className="px-4 py-2 bg-red-500 text-white font-semibold rounded hover:bg-red-600 transition"
            >
                Send Error
            </button>
            <button
                type="button"
                onClick={() => send("warning", "Bogus Warning Test")}
                className="px-4 py-2 bg-yellow-500 text-black font-semibold rounded hover:bg-yellow-600 transition"
            >
                Send Warning
            </button>
            <button
                type="button"
                onClick={() => send("info", "Bogus Info Test")}
                className="px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 transition"
            >
                Send Info
            </button>
            <button
                type="button"
                onClick={() => send("exception", "Bogus Exception Test")}
                className="px-4 py-2 bg-purple-500 text-white font-semibold rounded hover:bg-purple-600 transition"
            >
                Throw Exception
            </button>
        </div>
    );
}
