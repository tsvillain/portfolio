import 'package:flutter/material.dart';
import 'package:portfolio/core/constants/constants.dart';
import 'package:portfolio/core/local_database/database.dart';
import 'package:portfolio/presentation/pages/project/project_card.dart';
import 'package:portfolio/presentation/widgets/footer.dart';
import 'package:responsive_builder/responsive_builder.dart';

class Layout extends StatelessWidget {
  const Layout({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Padding(
        padding: const EdgeInsets.all(Constants.globalPadding),
        child: ScreenTypeLayout(
          mobile: mobileView(),
          tablet: mobileView(),
          desktop: desktopView(),
        ),
      ),
    );
  }

  Widget mobileView() {
    final _mobileWidgets = [
      Container(height: 400, color: Colors.red, width: double.infinity),
      SizedBox(height: 100),
      Align(alignment: Alignment.centerLeft, child: Text("Projects")),
      ProjectCard(data: Database().projects[0]),
      Container(height: 400, color: Colors.red, width: double.infinity),
      Text("Experience"),
      Container(height: 400, color: Colors.red, width: double.infinity),
      Text("Blogs"),
      Container(height: 400, color: Colors.red, width: double.infinity),
      const Footer(),
    ];
    return ListView.builder(
      itemCount: _mobileWidgets.length,
      physics: const BouncingScrollPhysics(),
      itemBuilder: (_, i) {
        return _mobileWidgets[i];
      },
    );
  }

  Widget desktopView() {
    return Row(
      children: [
        Expanded(child: Container()),
        SizedBox(
          width: Constants.halfScreenWidth / 2,
          child: Container(color: Colors.amber),
        ),
        SizedBox(
          width: Constants.halfScreenWidth,
          child: Container(color: Colors.pink),
        ),
        Expanded(child: Container()),
      ],
    );
  }
}
