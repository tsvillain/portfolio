import 'package:flutter/foundation.dart';

class Assets {
  final String instagramSVG = kIsWeb
      ? "social_icons/instagram.svg"
      : "assets/social_icons/instagram.svg";
  final String githubSVG =
      kIsWeb ? "social_icons/github.svg" : "assets/social_icons/github.svg";
  final String linkedinSVG =
      kIsWeb ? "social_icons/linkedin.svg" : "assets/social_icons/linkedin.svg";
  final String twitterSVG =
      kIsWeb ? "social_icons/twitter.svg" : "assets/social_icons/twitter.svg";
  final String profileImage = kIsWeb ? "images/me.jpg" : "assets/images/me.jpg";
  final String backgroundImage =
      kIsWeb ? "images/bg.jpg" : "assets/images/bg.jpg";

  // Project Images
  final String projectWallbay =
      kIsWeb ? "projects/wallbay.png" : "assets/projects/wallbay.png";
  final String projectTMDB =
      kIsWeb ? "projects/tmdb.png" : "assets/projects/tmdb.png";

  // Lottie Animation
  final String programmingAnimation = kIsWeb
      ? "animations/programming-computer.json"
      : "assets/animations/programming-computer.json";
  final String backgroundAnimation = kIsWeb
      ? "animations/space-coffee.riv"
      : "assets/animations/space-coffee.riv";
}
