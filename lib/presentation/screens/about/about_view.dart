import 'package:flutter/material.dart';
import 'package:portfolio/data/database_helper/db.dart';
import 'package:portfolio/presentation/resources/res.dart';
import 'package:portfolio/presentation/screens/custom_widgets/scroll_button.dart';
import 'package:portfolio/presentation/screens/responsive_layout.dart';
import 'package:url_launcher/url_launcher.dart';

class AboutPage extends StatelessWidget {
  const AboutPage({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Stack(
      children: [
        ReponsiveLayout(
          desktopBody: _desktop(context),
          mobileBody: _mobile(context),
        ),
        const ScrollIndicator(),
      ],
    );
  }

  Widget _mobile(BuildContext context) {
    return Padding(
      padding: EdgeInsets.symmetric(horizontal: sizes.mediumPadding),
      child: Column(
        mainAxisAlignment: MainAxisAlignment.spaceEvenly,
        crossAxisAlignment: CrossAxisAlignment.center,
        children: [
          Expanded(
            child: Padding(
              padding: EdgeInsets.symmetric(horizontal: sizes.smallPadding),
              child: AspectRatio(aspectRatio: 4 / 3, child: _image(context)),
            ),
          ),
          SizedBox(width: sizes.pagePadding),
          Expanded(child: _content()),
        ],
      ),
    );
  }

  Widget _desktop(BuildContext context) {
    return Row(
      mainAxisAlignment: MainAxisAlignment.spaceBetween,
      crossAxisAlignment: CrossAxisAlignment.center,
      children: [
        Expanded(
          child: Padding(
            padding: EdgeInsets.symmetric(horizontal: sizes.smallPadding),
            child: AspectRatio(aspectRatio: 1 / 1, child: _image(context)),
          ),
        ),
        SizedBox(width: sizes.pagePadding),
        Expanded(child: _content()),
      ],
    );
  }

  Column _content() {
    return Column(
      mainAxisAlignment: MainAxisAlignment.center,
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Text("About Me", style: styles.pageHeading),
        SizedBox(height: sizes.regularPadding),
        Text(Database.longBio,
            style: styles.regularText.copyWith(fontSize: sizes.mediumFontSize)),
        SizedBox(height: sizes.mediumPadding),
        Align(
          alignment: Alignment.topRight,
          child: OutlinedButton(
              onPressed: () => launch(Database.viewCV),
              style: OutlinedButton.styleFrom(
                  side: BorderSide(color: colors.blue)),
              child: Text("View CV", style: TextStyle(color: colors.white))),
        ),
      ],
    );
  }

  ClipRRect _image(BuildContext context) {
    return ClipRRect(
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
    );
  }
}
