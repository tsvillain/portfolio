import 'package:flutter/material.dart';
import 'package:portfolio/presentation/screens/project/widgets/project_detail.dart';

class ProjectPage extends StatefulWidget {
  const ProjectPage({Key? key}) : super(key: key);

  @override
  _ProjectPageState createState() => _ProjectPageState();
}

class _ProjectPageState extends State<ProjectPage> {
  final PageController _controller = PageController();
  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        PageView.builder(
          controller: _controller,
          allowImplicitScrolling: false,
          itemCount: 5,
          itemBuilder: (context, i) {
            return ProjectDetail();
          },
        ),
        Row(
          mainAxisAlignment: MainAxisAlignment.end,
          children: [
            TextButton.icon(
                onPressed: () {},
                icon: Icon(Icons.arrow_back_ios_new_rounded),
                label: Text("Prev")),
            const SizedBox(width: 20),
            TextButton.icon(
                onPressed: () {},
                icon: Icon(Icons.arrow_forward_ios_rounded),
                label: Text("Next")),
          ],
        ),
      ],
    );
  }
}
