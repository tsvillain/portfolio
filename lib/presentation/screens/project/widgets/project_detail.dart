import 'package:flutter/material.dart';
import 'package:portfolio/domain/models/projects_model.dart';
import 'package:portfolio/presentation/resources/res.dart';
import 'package:url_launcher/url_launcher.dart';

class ProjectDetail extends StatelessWidget {
  final ProjectModel project;
  const ProjectDetail({
    Key? key,
    required this.project,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
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
                  image: project.imageurl,
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
                  Text(project.title, style: styles.pageHeading),
                  SizedBox(height: sizes.smallPadding),
                  Text(project.shortDesc,
                      style: styles.regularText
                          .copyWith(fontSize: sizes.largeFontSize)),
                  SizedBox(height: sizes.regularPadding),
                  Wrap(
                    spacing: sizes.smallPadding,
                    runSpacing: sizes.smallPadding,
                    alignment: WrapAlignment.center,
                    crossAxisAlignment: WrapCrossAlignment.center,
                    runAlignment: WrapAlignment.center,
                    children: project.tags
                        .map((e) => Container(
                              padding: const EdgeInsets.symmetric(
                                  horizontal: 12, vertical: 8),
                              decoration: BoxDecoration(
                                color: colors.black.withOpacity(0.6),
                                borderRadius: BorderRadius.circular(8),
                              ),
                              child: Text(e),
                            ))
                        .toList(),
                  ),
                  const SizedBox(height: 5),
                  Visibility(
                    visible: project.urls.isNotEmpty,
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        const Divider(),
                        const SizedBox(height: 5),
                        Text("Find it on: ",
                            style: styles.regularText
                                .copyWith(fontWeight: FontWeight.bold)),
                        SizedBox(height: sizes.smallPadding),
                        Wrap(
                          spacing: sizes.smallPadding,
                          runSpacing: sizes.smallPadding,
                          alignment: WrapAlignment.center,
                          crossAxisAlignment: WrapCrossAlignment.center,
                          runAlignment: WrapAlignment.center,
                          children: project.urls
                              .map((e) => OutlinedButton(
                                    child: Text(e.name,
                                        style: TextStyle(color: colors.white)),
                                    onPressed: () => launch(e.link),
                                  ))
                              .toList(),
                        ),
                      ],
                    ),
                  ),
                ],
              )),
          SizedBox(width: sizes.smallPadding),
        ],
      ),
    );
  }
}
