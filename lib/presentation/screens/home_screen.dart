import 'package:flutter/material.dart';
import 'package:portfolio/presentation/resources/res.dart';
import 'package:portfolio/presentation/screens/about/about_view.dart';
import 'package:portfolio/presentation/screens/home/home_view.dart';
import 'package:portfolio/presentation/screens/project/project_view.dart';
import 'package:portfolio/presentation/screens/skill/skill_view.dart';

class Home extends StatefulWidget {
  const Home({Key? key}) : super(key: key);

  @override
  State<Home> createState() => _HomeState();
}

class _HomeState extends State<Home> {
  final PageController _pageController =
      PageController(keepPage: true, initialPage: 0);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Container(
        decoration: BoxDecoration(
          image: DecorationImage(
            image: AssetImage(assets.backgroundImage),
            fit: BoxFit.cover,
            colorFilter: ColorFilter.mode(
              Colors.black.withOpacity(0.6),
              BlendMode.hardLight,
            ),
          ),
        ),
        child: Padding(
          padding: const EdgeInsets.symmetric(horizontal: 100),
          child: PageView(
            controller: _pageController,
            scrollDirection: Axis.vertical,
            children: const [
              HomePage(),
              AboutPage(),
              SkillPage(),
              ProjectPage(),
            ],
          ),
        ),
      ),
    );
  }
}
