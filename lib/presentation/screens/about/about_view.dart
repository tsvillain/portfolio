import 'package:flutter/material.dart';
import 'package:portfolio/data/database_helper/db.dart';
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
              child: Padding(
                padding: EdgeInsets.symmetric(horizontal: sizes.smallPadding),
                child: ClipRRect(
                  borderRadius: const BorderRadius.only(
                    bottomLeft: Radius.circular(20),
                    topLeft: Radius.circular(20),
                  ),
                  child: Image(
                    image: AssetImage(assets.profileImage),
                    fit: BoxFit.cover,
                    height: MediaQuery.of(context).size.height * 0.8,
                    width: double.infinity,
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
                OutlinedButton(
                    onPressed: () => launch(Database.viewCV),
                    style: OutlinedButton.styleFrom(
                        side: BorderSide(color: colors.blue)),
                    child:
                        Text("View CV", style: TextStyle(color: colors.white))),
              ],
            )),
          ],
        ),
        const ScrollIndicator(),
      ],
    );
  }
}
