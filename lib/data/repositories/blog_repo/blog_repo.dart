import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:portfolio/data/repositories/blog_repo/blog_repo_impl.dart';
import 'package:portfolio/domain/models/medium_blog_model.dart';

final blogRepo = Provider.autoDispose((ref) => BlogRepoImpl(ref.read));

mixin BlogRepo {
  Future<List<MediumBlogModel>> getMediumBlogs();
}
