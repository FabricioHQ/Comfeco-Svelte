import fetch from 'node-fetch';

const headers = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
};

export async function post(req, res) {
  try {
    const { email, password } = req.body;

    const result = await fetch(
      `https://comfeco-backend-svelte.herokuapp.com/api/auth/signin`,
      {
        method: 'POST',
        headers,
        body: JSON.stringify({ email, password }),
      }
    );

    const parsed = await result.json();

    if (parsed.message) {
      throw new Error(parsed.message);
    }
    req.session.user = parsed.user;

    res.end(JSON.stringify({ user: parsed.user }));
  } catch (error) {
    res.end(JSON.stringify({ error: error.message }));
  }
}
