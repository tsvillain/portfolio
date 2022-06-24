import 'package:flutter/material.dart';
import 'package:portfolio/core/constants/constants.dart';
import 'package:responsive_builder/responsive_builder.dart';
import 'package:url_launcher/url_launcher.dart';

class Footer extends StatelessWidget {
  const Footer({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return ScreenTypeLayout(
      mobile: mobileView(),
      tablet: mobileView(),
      desktop: desktopView(),
    );
  }

  Widget mobileView() {
    return Container(
      height: Constants.cardTitleSpacingMobile * 3,
      alignment: Alignment.bottomCenter,
      child: MouseRegion(
        cursor: SystemMouseCursors.click,
        child: InkWell(
          child:
              const Text('${Strings.designInspiration}, ${Strings.poweredBy}.'),
          onTap: () {
            launchUrl(Uri.parse("https://github.com/tsvillain"));
          },
        ),
      ),
    );
  }

  Widget desktopView() {
    return Container(
      height: Constants.aboutDesktopBottomPadding,
      alignment: Alignment.bottomCenter,
      child: MouseRegion(
        cursor: SystemMouseCursors.click,
        child: InkWell(
          child:
              const Text('${Strings.designInspiration}, ${Strings.poweredBy}.'),
          onTap: () {
            launchUrl(Uri.parse("https://github.com/tsvillain"));
          },
        ),
      ),
    );
  }
}
