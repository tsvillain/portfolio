import 'package:flutter/material.dart';
import 'package:portfolio/data/db.dart';
import 'package:portfolio/presentation/resources/res.dart';

class ProjectDetail extends StatelessWidget {
  const ProjectDetail({
    Key? key,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      margin: EdgeInsets.symmetric(
        vertical: sizes.extraLargePadding,
        horizontal: sizes.mediumPadding,
      ),
      decoration: BoxDecoration(
        color: Colors.white10,
        borderRadius: BorderRadius.circular(20),
      ),
      child: Row(
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        crossAxisAlignment: CrossAxisAlignment.center,
        children: [
          Expanded(
            flex: 2,
            child: Container(
              height: double.infinity,
              width: double.infinity,
              decoration: BoxDecoration(
                borderRadius: const BorderRadius.only(
                  topLeft: Radius.circular(20),
                  bottomLeft: Radius.circular(20),
                  bottomRight: Radius.circular(10),
                  topRight: Radius.circular(10),
                ),
                image: DecorationImage(
                  image: AssetImage(assets.profileImage),
                  fit: BoxFit.cover,
                ),
              ),
            ),
          ),
          SizedBox(width: sizes.pagePadding),
          Expanded(
              flex: 3,
              child: Column(
                mainAxisAlignment: MainAxisAlignment.center,
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text("Project ", style: styles.pageHeading),
                  SizedBox(height: sizes.regularPadding),
                  Text(Database.longBio,
                      style: styles.regularText
                          .copyWith(fontSize: sizes.largeFontSize)),
                  SizedBox(height: sizes.mediumPadding),
                ],
              )),
        ],
      ),
    );
  }
}
