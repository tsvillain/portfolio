import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:portfolio/presentation/controllers/home_scroll_controller.dart';
import 'package:portfolio/presentation/resources/res.dart';
import 'package:portfolio/presentation/screens/about/about_view.dart';
import 'package:portfolio/presentation/screens/blog/blog_view.dart';
import 'package:portfolio/presentation/screens/home/home_view.dart';
import 'package:portfolio/presentation/screens/project/project_view.dart';
import 'package:rive/rive.dart';

class Home extends ConsumerWidget {
  const Home({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final _pageController =
        ref.watch(homeScrollControllerProvider).getHomeScrollController;
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
              children: [
                const HomePage(),
                const AboutPage(),
                ProjectPage(),
                BlogPage(),
              ],
            ),
          ),
        ],
      ),
    );
  }
}
