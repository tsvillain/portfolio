import 'package:flutter/material.dart';
import 'package:percent_indicator/circular_percent_indicator.dart';
import 'package:portfolio/data/db.dart';
import 'package:portfolio/presentation/resources/res.dart';
import 'package:portfolio/presentation/screens/custom_widgets/scroll_button.dart';

class SkillPage extends StatefulWidget {
  const SkillPage({Key? key}) : super(key: key);

  @override
  _SkillPageState createState() => _SkillPageState();
}

class _SkillPageState extends State<SkillPage> {
  @override
  Widget build(BuildContext context) {
    return Stack(
      children: [
        Column(
          mainAxisAlignment: MainAxisAlignment.center,
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text("Skills", style: styles.pageHeading),
            SizedBox(height: sizes.regularPadding),
            Text(
                "I enjoy creating things that live on the internet, whether that be websites, applications, or anything in between.",
                style:
                    styles.regularText.copyWith(fontSize: sizes.largeFontSize)),
            SizedBox(height: sizes.mediumPadding),
            Wrap(
              spacing: sizes.regularPadding,
              runSpacing: sizes.regularPadding,
              children: Database()
                  .skills
                  .map((e) => Column(
                        mainAxisSize: MainAxisSize.min,
                        children: [
                          CircularPercentIndicator(
                            radius: MediaQuery.of(context).size.width / 20,
                            lineWidth: 8.0,
                            addAutomaticKeepAlive: false,
                            circularStrokeCap: CircularStrokeCap.round,
                            animation: true,
                            percent: e.percent / 100,
                            center: Text("${e.percent}%",
                                style: styles.regularText),
                            footer: Padding(
                              padding: EdgeInsets.all(sizes.smallPadding),
                              child: Text(e.title, style: styles.regularText),
                            ),
                            // footer: Text(e),
                          ),
                        ],
                      ))
                  .toList(),
            ),
          ],
        ),
        const ScrollIndicator(),
      ],
    );
  }
}
