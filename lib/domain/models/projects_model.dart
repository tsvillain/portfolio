import 'package:flutter/material.dart';

class ProjectModel {
  final String title;
  final List<ProjectUrl> urls;
  final List<String> techs;
  final String shortDesc;
  final AssetImage imageurl;

  ProjectModel({
    required this.title,
    required this.urls,
    required this.techs,
    required this.shortDesc,
    required this.imageurl,
  });
}

class ProjectUrl {
  final String name;
  final String link;

  ProjectUrl({required this.name, required this.link});
}
