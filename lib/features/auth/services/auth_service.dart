import 'package:amazon_clone_using_node_flutter/models/user.dart';

class AuthService {
  //sign up user
  void signUpUser({
    required String name,
    required String email,
    required String password,
  }) async {
    try {
      User user = User(
          id: '',
          name: name,
          email: email,
          password: password,
          address: '',
          type: '',
          token: '');
    } catch (e) {
      // res.status(500).send(e);
    }
  }
}
