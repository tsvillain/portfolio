import 'package:flutter/material.dart';
import 'package:portfolio/data/db.dart';
import 'package:portfolio/presentation/resources/res.dart';
import 'package:portfolio/presentation/screens/custom_widgets/scroll_button.dart';
import 'package:url_launcher/url_launcher.dart';

class AboutPage extends StatefulWidget {
  const AboutPage({Key? key}) : super(key: key);

  @override
  _AboutPageState createState() => _AboutPageState();
}

class _AboutPageState extends State<AboutPage> {
  @override
  Widget build(BuildContext context) {
    return Stack(
      children: [
        Row(
          mainAxisAlignment: MainAxisAlignment.spaceBetween,
          crossAxisAlignment: CrossAxisAlignment.center,
          children: [
            Expanded(
              child: Transform(
                transform: Matrix4.skew(0, 3),
                child: Container(
                  margin: EdgeInsets.symmetric(
                    vertical: sizes.extraLargePadding,
                    horizontal: sizes.mediumPadding,
                  ),
                  height: double.infinity,
                  width: double.infinity,
                  decoration: BoxDecoration(
                    image: DecorationImage(
                      image: AssetImage(assets.profileImage),
                      fit: BoxFit.cover,
                    ),
                  ),
                ),
              ),
            ),
            SizedBox(width: sizes.pagePadding),
            Expanded(
                child: Column(
              mainAxisAlignment: MainAxisAlignment.center,
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text("About Me", style: styles.pageHeading),
                SizedBox(height: sizes.regularPadding),
                Text(Database.longBio,
                    style: styles.regularText
                        .copyWith(fontSize: sizes.largeFontSize)),
                SizedBox(height: sizes.mediumPadding),
                ElevatedButton(
                    onPressed: () => launch(Database.viewCV),
                    child: Text("View CV",
                        style: styles.regularText
                            .copyWith(fontSize: sizes.regularFontSize))),
              ],
            )),
          ],
        ),
        const ScrollIndicator(),
      ],
    );
  }
}
