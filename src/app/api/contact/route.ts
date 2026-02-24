export async function POST(req: Request) {
  const body = await req.json();

  const formspreeId = process.env.FORMSPREE_ENDPOINT;

  if (!formspreeId) {
    return Response.json(
      { error: "Formspree endpoint not configured." },
      { status: 500 }
    );
  }

  const res = await fetch(`https://formspree.io/f/${formspreeId}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(body),
  });

  const data = await res.json();

  return Response.json(data, { status: res.status });
}
