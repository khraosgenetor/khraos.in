"use client";

type ResetPageProps = {
    resetAction: () => void;
};

export function ResetPage({ resetAction }: ResetPageProps) {
    return (
        <div
            style={{
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "system-ui",
                gap: 16,
            }}
        >
            <h1>Something went wrong</h1>

            <p>The application encountered an unexpected error.</p>

            <button
                onClick={resetAction}
                style={{
                    padding: "8px 16px",
                    borderRadius: 6,
                    border: "1px solid #ccc",
                    cursor: "pointer",
                }}
            >
                Try again
            </button>
        </div>
    );
}
