import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:portfolio/data/db.dart';
import 'package:portfolio/presentation/resources/res.dart';
import 'package:portfolio/presentation/screens/project/project_scroll_view_model.dart';
import 'package:portfolio/presentation/screens/project/widgets/project_detail.dart';

import 'widgets/project_scroll.dart';

class ProjectPage extends ConsumerWidget {
  final Database _db = Database();

  ProjectPage({Key? key}) : super(key: key);
  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final _pageController =
        ref.watch(projectScrollProvider).getScrollController;
    return Container(
      margin: EdgeInsets.symmetric(
        vertical: sizes.pagePadding,
        horizontal: sizes.mediumPadding,
      ),
      child: Column(
        children: [
          Expanded(
            child: PageView.builder(
              controller: _pageController,
              allowImplicitScrolling: false,
              itemCount: _db.projects.length,
              onPageChanged:
                  ref.read(projectScrollProvider).updateCurrentPageIndex,
              itemBuilder: (context, i) =>
                  ProjectDetail(project: _db.projects[i]),
            ),
          ),
          ProjectScroll(),
        ],
      ),
    );
  }
}
