// Возвращает только код страны посетителя (Vercel сам определяет его по IP).
export const config = { runtime: 'edge' };

export default function handler(req) {
  const country = req.headers.get('x-vercel-ip-country') || null;
  return new Response(JSON.stringify({ country }), {
    headers: { 'content-type': 'application/json', 'cache-control': 'no-store' },
  });
}
