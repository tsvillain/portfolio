import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:portfolio/data/db.dart';
import 'package:portfolio/presentation/resources/res.dart';

import '../project_scroll_view_model.dart';

class ProjectScroll extends ConsumerWidget {
  ProjectScroll({Key? key}) : super(key: key);
  final Database _db = Database();

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final _scrollController = ref.watch(projectScrollProvider);

    return Padding(
      padding: EdgeInsets.all(sizes.smallPadding),
      child: Row(
        children: [
          Expanded(
              child: ClipRRect(
            borderRadius: const BorderRadius.all(Radius.circular(20)),
            child: LinearProgressIndicator(
              minHeight: 8,
              backgroundColor: Colors.white30,
              color: Colors.green,
              value: (_scrollController.currentPageViewIndex + 1) /
                  _db.projects.length,
            ),
          )),
          const SizedBox(width: 20),
          Visibility(
            visible: _scrollController.currentPageViewIndex != 0,
            child: TextButton(
                onPressed: _scrollController.prev,
                child: Row(
                  children: [
                    const Icon(Icons.navigate_before_rounded),
                    Text("Prev", style: TextStyle(color: colors.white)),
                  ],
                )),
          ),
          const SizedBox(width: 10),
          Visibility(
            visible: _scrollController.currentPageViewIndex !=
                (_db.projects.length - 1),
            child: TextButton(
                onPressed: _scrollController.next,
                child: Row(
                  children: [
                    Text("Next", style: TextStyle(color: colors.white)),
                    const Icon(Icons.navigate_next_rounded),
                  ],
                )),
          ),
        ],
      ),
    );
  }
}
