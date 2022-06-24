import 'package:flutter/material.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:portfolio/data/models/projects_model.dart';
import 'package:portfolio/presentation/widgets/custom_card.dart';

class ProjectCard extends StatelessWidget {
  final Project data;

  const ProjectCard({Key? key, required this.data}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return CustomCard(
      child: Column(
        children: [
          Row(
            mainAxisAlignment: MainAxisAlignment.start,
            children: [
              FaIcon(FontAwesomeIcons.book),
              SizedBox(width: 10),
              Text(data.title, style: Theme.of(context).textTheme.titleLarge),
            ],
          ),
          SizedBox(height: 10),
          Align(
              alignment: Alignment.centerLeft,
              child: Text(data.shortDesc,
                  style: Theme.of(context).textTheme.titleSmall)),
          Spacer(),
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              Row(children: ["Dart", "Pexels"].map((e) => Text(e)).toList()),
              SizedBox(width: 10),
              Row(
                children: [
                  FaIcon(FontAwesomeIcons.github),
                  FaIcon(FontAwesomeIcons.link)
                ],
              )
            ],
          ),
        ],
      ),
    );
  }
}
