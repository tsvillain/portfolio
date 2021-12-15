import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:portfolio/presentation/controllers/blog_provider.dart';
import 'package:portfolio/presentation/resources/res.dart';
import 'package:portfolio/presentation/screens/blog/widgets/blog_detail.dart';
import 'blog_scroll_view_model.dart';
import 'widgets/blog_scroll.dart';

class BlogPage extends ConsumerWidget {
  const BlogPage({Key? key}) : super(key: key);
  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final _pageController = ref.watch(blogScrollProvider).getScrollController;
    final _blogProvider = ref.watch(blogProvider);
    return Container(
      margin: EdgeInsets.symmetric(
        vertical: sizes.pagePadding,
      ),
      child: Column(
        children: [
          Expanded(
            child: PageView.builder(
              controller: _pageController,
              allowImplicitScrolling: false,
              itemCount: _blogProvider.mediumBlogs.length,
              onPageChanged:
                  ref.read(blogScrollProvider).updateCurrentPageIndex,
              itemBuilder: (context, i) => Padding(
                padding: EdgeInsets.symmetric(horizontal: sizes.mediumPadding),
                child: BlogDetail(blog: _blogProvider.mediumBlogs[i]),
              ),
            ),
          ),
          const BlogScroll(),
        ],
      ),
    );
  }
}
