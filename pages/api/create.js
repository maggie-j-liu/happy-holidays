import { Deta } from "deta";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.redirect("/404");
    return;
  }
  const { title, name, message, recipient } = JSON.parse(req.body);
  const deta = Deta(process.env.DETA_PROJECT_KEY);
  const db = deta.Base("cards");
  try {
    const { key } = await db.put({ title, name, message, recipient });
    res.status(200).json({ id: key });
  } catch (error) {
    res.status(500).json({ error });
  }
}
