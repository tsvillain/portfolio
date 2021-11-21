// Contains all data to show in Whole Application
import 'package:flutter/material.dart';
import 'package:portfolio/domain/models/projects_model.dart';
import 'package:portfolio/domain/models/skill_model.dart';
import 'package:portfolio/presentation/resources/res.dart';

class Database {
  // Home
  static const String name = "Tekeshwar Singh";
  static const String shortBio = "Flutter + Back-end Developer";
  static const String longBio = "Flutter + Back-end Developer";

  // links
  static const String instagram = "https://instagram.com/tsvillain";
  static const String medium = "https://instagram.com/tsvillain";
  static const String twitter = "https://twitter.com/tsvillain";
  static const String github = "https://github.com/tsvillain";
  static const String linkedin = "https://linkedin.com/in/tsvillain";

  // skills
  final List<SkillModel> skills = [
    SkillModel(title: "C", percent: 60),
    SkillModel(title: "C++", percent: 60),
    SkillModel(title: "Java", percent: 60),
    SkillModel(title: "Dart", percent: 90),
    SkillModel(title: "Java Script", percent: 80),
    SkillModel(title: "GoLang", percent: 30),
    SkillModel(title: "Pyhton", percent: 40),
    SkillModel(title: "Git", percent: 90),
    SkillModel(title: "Flutter", percent: 90),
    SkillModel(title: "NodeJS", percent: 70),
    SkillModel(title: "ExpressJS", percent: 70),
    SkillModel(title: "MongoDB", percent: 80),
    SkillModel(title: "Firebase", percent: 80),
    SkillModel(title: "SQL", percent: 60),
  ];

  // CV link TODO add Google drive link of update CV
  static const String viewCV = "";

  // Projects
  final List<ProjectModel> projects = [
    ProjectModel(
      title: "Wallbay",
      urls: [],
      techs: [],
      shortDesc: "",
      imageurl: AssetImage(assets.projectWallbay),
    ),
    ProjectModel(
      title: "TMDB Flutter App",
      urls: [
        ProjectUrl(
            name: "GitHub",
            link: "https://github.com/tsvillain/TMDB-movie-app"),
        ProjectUrl(name: "YouTube", link: "https://youtu.be/ELMpyxVxsO4"),
      ],
      techs: [],
      shortDesc:
          "TMDB Flutter App to get trending movies list, check movies details, watch trailer on youtube, search movies.",
      imageurl: AssetImage(assets.projectTMDB),
    ),
  ];
}
