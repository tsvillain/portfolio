import 'package:flutter/material.dart';
import 'package:portfolio/data/models/medium_blog_model.dart';
import 'package:portfolio/data/models/projects_model.dart';
import 'package:portfolio/presentation/resources/resources.dart';

class Database {
  // Home
  static const String name = "Tekeshwar Singh";
  static const String shortBio = "Flutter + Back-end Developer";
  static const String longBio =
      "I am Tekeshwar Singh, also known by username `tsvillain`, I am a BTech Graduate in CSE.\nI am working as Flutter Developer at PixelApps with an interest in backend technologies and blockchain.";
  // links
  static const String instagram = "https://instagram.com/tsvillain";
  static const String medium = "https://instagram.com/tsvillain";
  static const String twitter = "https://twitter.com/tsvillain";
  static const String github = "https://github.com/tsvillain";
  static const String linkedin = "https://linkedin.com/in/tsvillain";

  static const String viewCV =
      "https://drive.google.com/file/d/1YzmI8NjxBTyDc2RHN75OPC82_aeK9or_/view?usp=sharing";

  /// Projects
  final List<Project> projects = [
    Project(
      title: "Wallbay",
      urls: [
        ProjectUrl(
            name: "PlayStore",
            link:
                "https://play.google.com/store/apps/details?id=com.tsvillain.wallbay"),
        ProjectUrl(
            name: "Source Code", link: "https://github.com/tsvillain/Wallbay"),
        ProjectUrl(name: "YouTube", link: "https://youtu.be/ELMpyxVxsO4"),
      ],
      tags: ["Flutter", "Bloc", "Pexels API"],
      shortDesc: "Wallpaper App developed in Flutter using Pexels API",
      imageurl: const AssetImage(PROJECT_WALLBAY),
    ),
    Project(
      title: "Personal Portfolio",
      urls: [
        ProjectUrl(name: "Visit", link: "https://tsvillain.live"),
        ProjectUrl(
            name: "Source Code",
            link: "https://github.com/tsvillain/portfolio"),
      ],
      tags: ["Flutter", "Riverpod", "Rive Animation"],
      shortDesc:
          "My Personal Developer Portfolio made using Flutter 💙 and Deployed on Vercel.",
      imageurl: const AssetImage(PROJECT_PORTFOLIO),
    ),
    Project(
      title: "TMDB Flutter App",
      urls: [
        ProjectUrl(
            name: "Source Code",
            link: "https://github.com/tsvillain/TMDB-movie-app"),
        ProjectUrl(name: "YouTube", link: "https://youtu.be/55ETt36s9R4"),
      ],
      tags: ["Flutter", "TMDB API", "GetX"],
      shortDesc:
          "TMDB Flutter App to get trending movies list, check movies details, watch trailer on youtube, search movies.",
      imageurl: const AssetImage(PROJECT_TMDB),
    ),
  ];

  /// Blogs
  final List<MediumBlog> mediumBlogs = [];
}
