const Route = use('Route')

Route.resource('v1/leituras', 'LeiturasController').apiOnly()
Route.post('register', 'AuthController.register');
Route.post('login', 'AuthController.login');
Route.get('user', 'AuthController.user').middleware(['auth']);
Route.post('average', 'MathController.average');
