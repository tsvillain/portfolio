import 'package:flutter/material.dart';
import 'package:portfolio/data/database_helper/db.dart';
import 'package:portfolio/presentation/resources/res.dart';
import 'package:portfolio/presentation/screens/custom_widgets/scroll_button.dart';
import 'package:portfolio/presentation/screens/custom_widgets/social_button.dart';

class HomePage extends StatelessWidget {
  const HomePage({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    final width = MediaQuery.of(context).size.width;
    bool isMobile = width < 600;
    return Stack(
      children: [
        Column(
          mainAxisAlignment: MainAxisAlignment.center,
          crossAxisAlignment:
              isMobile ? CrossAxisAlignment.center : CrossAxisAlignment.start,
          children: [
            Text(Database.name, style: styles.developerName),
            SizedBox(height: sizes.regularPadding),
            Text(Database.shortBio, style: styles.shortBio),
            SizedBox(height: sizes.mediumPadding),
            Row(
              mainAxisAlignment:
                  isMobile ? MainAxisAlignment.center : MainAxisAlignment.start,
              children: [
                SocialBtn(url: Database.github, asset: assets.githubSVG),
                SocialBtn(url: Database.linkedin, asset: assets.linkedinSVG),
                SocialBtn(url: Database.twitter, asset: assets.twitterSVG),
                SocialBtn(url: Database.instagram, asset: assets.instagramSVG),
              ],
            ),
          ],
        ),
        const ScrollIndicator(),
      ],
    );
  }
}
