import 'package:flutter/material.dart';
import 'package:portfolio/domain/models/medium_blog_model.dart';
import 'package:portfolio/presentation/resources/res.dart';
import 'package:url_launcher/url_launcher.dart';

class BlogDetail extends StatelessWidget {
  final MediumBlogModel blog;
  const BlogDetail({
    Key? key,
    required this.blog,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return MouseRegion(
      cursor: SystemMouseCursors.click,
      child: GestureDetector(
        onTap: () => launch(blog.guid),
        child: Container(
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
                      image: NetworkImage(blog.thumbnail),
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
                      Text(blog.title, style: styles.pageHeading),
                      SizedBox(height: sizes.smallPadding),
                      Text(blog.author,
                          style: styles.regularText
                              .copyWith(fontSize: sizes.largeFontSize)),
                      SizedBox(height: sizes.regularPadding),
                      Wrap(
                        spacing: sizes.smallPadding,
                        runSpacing: sizes.smallPadding,
                        alignment: WrapAlignment.center,
                        crossAxisAlignment: WrapCrossAlignment.center,
                        runAlignment: WrapAlignment.center,
                        children: blog.categories
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
                    ],
                  )),
              SizedBox(width: sizes.smallPadding),
            ],
          ),
        ),
      ),
    );
  }
}
