import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

final homeScrollControllerProvider =
    ChangeNotifierProvider.autoDispose((ref) => HomeScrollController());

class HomeScrollController extends ChangeNotifier {
  final PageController _pageController =
      PageController(keepPage: true, initialPage: 0);

  PageController get getHomeScrollController => _pageController;

  void next() {
    _pageController.nextPage(
        duration: const Duration(milliseconds: 1500), curve: Curves.bounceOut);
  }
}
