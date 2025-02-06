// app/Controllers/Http/MathController.js
class MathController {
    async average({ request, response }) {
      const numbers = request.post().numbers;
  
      if (!Array.isArray(numbers)) {
        return response.status(400).send('Input must be an array');
      }
  
      const sum = numbers.reduce((acc, num) => acc + num, 0);
      const average = sum / numbers.length;
  
      return response.json({ average });
    }
  }
  
  module.exports = MathController;
  