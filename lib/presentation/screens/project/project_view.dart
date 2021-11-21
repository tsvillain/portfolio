import 'package:flutter/material.dart';
import 'package:portfolio/data/db.dart';
import 'package:portfolio/presentation/resources/res.dart';
import 'package:portfolio/presentation/screens/custom_widgets/scroll_button.dart';
import 'package:url_launcher/url_launcher.dart';

class ProjectPage extends StatefulWidget {
  const ProjectPage({Key? key}) : super(key: key);

  @override
  _ProjectPageState createState() => _ProjectPageState();
}

class _ProjectPageState extends State<ProjectPage> {
  final PageController _controller = PageController();
  @override
  Widget build(BuildContext context) {
    return PageView.builder(
      controller: _controller,
      allowImplicitScrolling: false,
      itemCount: 5,
      itemBuilder: (context, i) {
        return Row(
          mainAxisAlignment: MainAxisAlignment.spaceBetween,
          crossAxisAlignment: CrossAxisAlignment.center,
          children: [
            Expanded(
              child: Transform(
                transform: Matrix4.skew(0, 3),
                child: Stack(
                  children: [
                    Container(
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
                    Align(
                      alignment: Alignment.centerRight,
                      child: ElevatedButton(
                          onPressed: () {
                            _controller.animateToPage(i + 1,
                                duration: Duration(milliseconds: 1000),
                                curve: Curves.bounceOut);
                          },
                          child: Text("Next")),
                    ),
                  ],
                ),
              ),
            ),
            SizedBox(width: sizes.pagePadding),
            Expanded(
                child: Column(
              mainAxisAlignment: MainAxisAlignment.center,
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text("Project $i", style: styles.pageHeading),
                SizedBox(height: sizes.regularPadding),
                Text(Database.longBio,
                    style: styles.regularText
                        .copyWith(fontSize: sizes.largeFontSize)),
                SizedBox(height: sizes.mediumPadding),
              ],
            )),
          ],
        );
      },
    );
  }
}
