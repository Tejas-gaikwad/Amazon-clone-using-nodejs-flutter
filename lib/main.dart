import 'package:amazon_clone_using_node_flutter/constraints/global_variables.dart';
import 'package:amazon_clone_using_node_flutter/router.dart';
import 'package:flutter/material.dart';

import 'features/auth/screens/auth_screen.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Amazon clone',
      debugShowCheckedModeBanner: false,
      theme: ThemeData(
          colorScheme:
              const ColorScheme.light(primary: GlobalVariables.secondaryColor),
          scaffoldBackgroundColor: GlobalVariables.greyBackgroundCOlor,
          appBarTheme: const AppBarTheme(
              elevation: 0.0, iconTheme: IconThemeData(color: Colors.black))),
      onGenerateRoute: (settings) => generateRoute(settings),
      home: const AuthScreen(),
    );
  }
}
