// ./src/app/global-error.tsx
"use client";

import { useEffect } from "react";
import Rollbar from "rollbar";
import { clientConfig } from "@/rollbar";
import { ResetPage } from "@/components/ResetPage";

export default function GlobalError({
    error,
    reset,
}: {
    error: Error;
    reset: () => void;
}) {
    useEffect(() => {
        const rollbar = new Rollbar(clientConfig);
        rollbar.error(error);
    }, [error]);

    return (
        <html>
        <body>
        <ResetPage resetAction={reset} />
        </body>
        </html>
    );
}
