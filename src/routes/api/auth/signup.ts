import fetch from 'node-fetch';

const headers = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
};

export async function post(req, res) {
  try {
    const { email, password, username } = req.body;
    console.log(email + ' ' + password + ' ' + username);
    const result = await fetch(
      `https://comfeco-backend-svelte.herokuapp.com/api/auth/signup`,
      {
        method: 'POST',
        headers,
        body: JSON.stringify({ email, password, username }),
      }
    );

    const parsed = await result.json();

    if (typeof parsed.error !== 'undefined') {
      throw new Error(parsed.error);
    }

    req.session.user = parsed.user;

    res.end(JSON.stringify({ user: parsed.user }));
  } catch (error) {
    res.end(JSON.stringify({ error: error.message }));
  }
}
