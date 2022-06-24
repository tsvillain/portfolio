import 'package:flutter/material.dart';
import 'package:portfolio/core/constants/constants.dart';

class CustomCard extends StatelessWidget {
  final Widget child;
  final double height;
  final MouseCursor cursor;

  const CustomCard({
    Key? key,
    this.height = 200,
    this.cursor = SystemMouseCursors.basic,
    required this.child,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      decoration: BoxDecoration(
        borderRadius: BorderRadius.circular(8),
        border: Border.all(
          color: Colors.grey,
          width: 0.8,
        ),
      ),
      padding: const EdgeInsets.all(Constants.cardPadding),
      width: Constants.cardAspectRatioDesktop * Constants.cardHeight,
      height: Constants.cardHeight,
      child: child,
    );
  }
}
