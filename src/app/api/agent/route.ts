import type { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
    const search = new URL(request.url).searchParams;
    const msg = search.get("msg") ?? "";
    const idagente = search.get("idagente") ?? "anon";

    const url = `https://apicloudia-167489907647.us-west4.run.app/agent?msg=${encodeURIComponent(
        msg
    )}&idagente=${idagente}`;

    const res = await fetch(url);
    const text = await res.text();

    return new Response(text, {
        status: res.status,
        headers: { "Content-Type": "text/plain" },
    });
}
