import 'package:flutter/material.dart';
import 'package:portfolio/presentation/resources/res.dart';

class ScrollIndicator extends StatelessWidget {
  const ScrollIndicator({
    Key? key,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Align(
      alignment: Alignment.bottomLeft,
      child: InkWell(
        onTap: () {},
        child: Padding(
          padding: EdgeInsets.symmetric(vertical: sizes.smallPadding),
          child: Row(
            crossAxisAlignment: CrossAxisAlignment.center,
            children: const [
              Icon(Icons.arrow_circle_down_rounded),
              SizedBox(width: 5),
              Text("Scroll"),
            ],
          ),
        ),
      ),
    );
  }
}
