"use strict";

class AppController {
  /**
   * Index method for handling authenticated access to the app.
   * @param {Object} ctx - The context object provided by AdonisJS.
   * @param {Object} ctx.auth - The auth object for managing authentication.
   * @param {Object} ctx.response - The response object for returning data.
   */
  async index({ auth, response }) {
    try {
      // Fetch authenticated user
      const user = await auth.getUser();

      // Return a success response with user data
      return response.status(200).json({
        message: "Welcome to the application!",
        user: {
          id: user.id,
          username: user.username,
          email: user.email,
        },
      });
    } catch (error) {
      // Handle authentication errors
      return response.status(401).json({
        message: "You are not authorized to access this resource.",
        error: error.message,
      });
    }
  }
}

module.exports = AppController;
