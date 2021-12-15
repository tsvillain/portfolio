import 'dart:convert';

import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:portfolio/data/network_helper/endpoints.dart';
import 'package:portfolio/data/network_helper/network_client.dart';
import 'package:portfolio/data/repositories/blog_repo/blog_repo.dart';
import 'package:portfolio/domain/models/medium_blog_model.dart';

class BlogRepoImpl implements BlogRepo {
  final NetworkClient _client;
  BlogRepoImpl(Reader read) : _client = read(networkHelper);
  @override
  Future<List<MediumBlogModel>> getMediumBlogs() async {
    List<MediumBlogModel> _mediumBlogs = [];
    final _response = await _client.get(Endpoints.mediumPostUrl);
    if (_response != null) {
      final _blogs = jsonDecode(_response.body)['items'];
      for (final blog in _blogs) {
        _mediumBlogs.add(MediumBlogModel.fromJson(blog));
      }
    }
    return _mediumBlogs;
  }
}
