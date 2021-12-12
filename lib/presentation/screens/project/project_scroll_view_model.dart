import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

final projectScrollProvider =
    ChangeNotifierProvider.autoDispose((ref) => ProjectScrollViewModel());

class ProjectScrollViewModel extends ChangeNotifier {
  int currentPageViewIndex = 0;
  final PageController _pageController =
      PageController(initialPage: 0, keepPage: true);

  PageController get getScrollController => _pageController;

  void next() {
    _pageController.nextPage(
        duration: const Duration(milliseconds: 1000), curve: Curves.easeInOut);
    _incrementCurrentPageIndex(true);
  }

  void prev() {
    _pageController.previousPage(
        duration: const Duration(milliseconds: 1000), curve: Curves.ease);
    _incrementCurrentPageIndex(false);
  }

  void _incrementCurrentPageIndex(bool increment) {
    if (currentPageViewIndex >= 0) {
      if (increment) {
        currentPageViewIndex++;
      } else if (currentPageViewIndex != 0) {
        currentPageViewIndex--;
      }
      notifyListeners();
    }
  }

  void updateCurrentPageIndex(int value) {
    currentPageViewIndex = value;
    notifyListeners();
  }
}
