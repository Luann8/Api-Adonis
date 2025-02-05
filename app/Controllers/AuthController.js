// app/Controllers/Http/AuthController.js
const User = use('App/Models/User');
const Hash = use('Hash');
const { validate } = use('Validator');
const auth = use('Auth');

class AuthController {
  // Registrar um novo usuário
  async register({ request, response }) {
    const validation = await validate(request.all(), {
      username: 'required|unique:users',
      email: 'required|email|unique:users',
      password: 'required|min:6',
    });

    if (validation.fails()) {
      return response.status(400).send(validation.messages());
    }

    const userData = request.only(['username', 'email', 'password']);
    userData.password = await Hash.make(userData.password);
    const user = await User.create(userData);
    return response.status(201).send(user);
  }

  // Login do usuário
  async login({ request, response, auth }) {
    const { email, password } = request.all();

    try {
      const user = await auth.attempt(email, password);
      return response.json({ token: user.token });
    } catch (error) {
      return response.status(401).send('Invalid credentials');
    }
  }

  // Informações do usuário autenticado
  async user({ auth, response }) {
    try {
      const user = await auth.getUser();
      return response.json(user);
    } catch (error) {
      return response.status(401).send('Unauthenticated');
    }
  }
}

module.exports = AuthController;
