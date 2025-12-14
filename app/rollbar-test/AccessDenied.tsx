"use client";

import { useState, useEffect } from "react";
import { signIn } from "next-auth/react";

export default function AccessDenied() {
    const [count, setCount] = useState(5);

    useEffect(() => {
        if (count <= 0) {
            signIn("github");
            return;
        }

        const timer = setTimeout(() => setCount(count - 1), 1000);
        return () => clearTimeout(timer);
    }, [count]);

    return (
        <div
            style={{
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                fontFamily: "system-ui",
                color: "#b00020",
                textAlign: "center",
                gap: 16,
            }}
        >
            <h1>Access Denied</h1>
            <p>Please log in via GitHub to access this page.</p>
            <p style={{ fontSize: "2rem", fontWeight: "bold" }}>{count}</p>
        </div>
    );
}
