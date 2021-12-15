import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:portfolio/data/repositories/blog_repo/blog_repo.dart';
import 'package:portfolio/domain/models/medium_blog_model.dart';

final blogProvider = ChangeNotifierProvider((ref) => BlogProvider(ref.read));

class BlogProvider extends ChangeNotifier {
  final BlogRepo _blogRepo;
  BlogProvider(Reader read) : _blogRepo = read(blogRepo);

  List<MediumBlogModel> mediumBlogs = [];

  Future getMediumBlogs() async {
    final _blogs = await _blogRepo.getMediumBlogs();
    mediumBlogs = _blogs;
    notifyListeners();
  }
}
