const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";

type SubmitPayload = Record<string, unknown> & {
  subject: string;
  from_name?: string;
};

export async function sendToWeb3Forms(payload: SubmitPayload) {
  const accessKey = process.env.WEB3FORMS_ACCESS_KEY;
  if (!accessKey) {
    throw new Error("MISSING_ACCESS_KEY");
  }

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 8000);

  try {
    const res = await fetch(WEB3FORMS_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({ access_key: accessKey, ...payload }),
      signal: controller.signal,
    });

    const data = await res.json().catch(() => ({}));
    if (!res.ok || data.success !== true) {
      throw new Error(data.message || "Web3Forms rejected the submission.");
    }
    return data;
  } finally {
    clearTimeout(timeout);
  }
}
