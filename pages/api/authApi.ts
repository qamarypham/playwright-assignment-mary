
export async function login(request, username, password, state) {
  return await request.post(
    'https://auth.rocscience.com/u/login',
    {
      form: {
        username,
        password,
        state
      }
    }
  );
}