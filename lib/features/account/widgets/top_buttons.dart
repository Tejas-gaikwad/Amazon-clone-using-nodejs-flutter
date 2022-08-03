import 'package:flutter/material.dart';

import 'account_buttons.dart';

class TopButtons extends StatefulWidget {
  const TopButtons({Key? key}) : super(key: key);

  @override
  State<TopButtons> createState() => _TopButtonsState();
}

class _TopButtonsState extends State<TopButtons> {
  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        Row(
          children: [
            AccountButtons(
              butonText: 'Your orders',
              onTap: () {},
            ),
            AccountButtons(
              butonText: 'Turn Seller',
              onTap: () {},
            ),
          ],
        ),
        const SizedBox(height: 10),
        Row(
          children: [
            AccountButtons(
              butonText: 'LogOut',
              onTap: () {},
            ),
            AccountButtons(
              butonText: 'Your Wishlist',
              onTap: () {},
            ),
          ],
        ),
      ],
    );
  }
}
