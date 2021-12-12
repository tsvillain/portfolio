import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:portfolio/presentation/controllers/home_scroll_controller.dart';
import 'package:portfolio/presentation/resources/res.dart';

class ScrollIndicator extends ConsumerWidget {
  const ScrollIndicator({
    Key? key,
  }) : super(key: key);

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    return Align(
      alignment: Alignment.bottomLeft,
      child: InkWell(
        onTap: ref.read(homeScrollControllerProvider).next,
        child: Padding(
          padding: EdgeInsets.symmetric(vertical: sizes.smallPadding),
          child: Row(
            crossAxisAlignment: CrossAxisAlignment.center,
            children: const [
              Icon(Icons.arrow_circle_down_rounded),
              SizedBox(width: 10),
              Text("Scroll"),
            ],
          ),
        ),
      ),
    );
  }
}
