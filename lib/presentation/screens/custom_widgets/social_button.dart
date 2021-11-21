import 'package:flutter/material.dart';
import 'package:flutter_svg/flutter_svg.dart';
import 'package:portfolio/presentation/resources/res.dart';
import 'package:url_launcher/url_launcher.dart';

class SocialBtn extends StatelessWidget {
  final String url;
  final String asset;

  const SocialBtn({Key? key, required this.url, required this.asset})
      : super(key: key);
  @override
  Widget build(BuildContext context) {
    return IconButton(
        onPressed: () {
          launch(url);
        },
        icon: SvgPicture.asset(asset, color: colors.grey));
  }
}
