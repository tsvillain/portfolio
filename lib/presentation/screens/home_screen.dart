import 'package:flutter/material.dart';
import 'package:portfolio/presentation/resources/res.dart';
import 'package:portfolio/presentation/screens/about/about_view.dart';
import 'package:portfolio/presentation/screens/home/home_view.dart';
import 'package:portfolio/presentation/screens/project/project_view.dart';
import 'package:rive/rive.dart';

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
      body: Stack(
        children: [
          RiveAnimation.asset(
            assets.backgroundAnimation,
            fit: BoxFit.cover,
          ),
          Padding(
            padding: const EdgeInsets.symmetric(horizontal: 100),
            child: PageView(
              controller: _pageController,
              scrollDirection: Axis.vertical,
              children: const [
                HomePage(),
                AboutPage(),
                ProjectPage(),
              ],
            ),
          ),
        ],
      ),
    );
  }
}
