import 'package:flutter/material.dart';

class ReponsiveLayout extends StatelessWidget {
  final Widget mobileBody;
  final Widget desktopBody;

  const ReponsiveLayout(
      {Key? key, required this.mobileBody, required this.desktopBody})
      : super(key: key);

  @override
  Widget build(BuildContext context) {
    return LayoutBuilder(builder: ((context, constraints) {
      if (constraints.maxWidth < 600) {
        return mobileBody;
      } else if (constraints.maxWidth < 1200) {
        return desktopBody;
      } else {
        return SizedBox(width: 1250, child: desktopBody);
      }
    }));
  }
}
