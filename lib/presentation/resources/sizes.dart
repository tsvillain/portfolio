import 'package:flutter/material.dart';

class AppSizes {
  late final Size _screenSize;

  late final bool isPhone;
  late final double width;
  late final double height;

  late final double topPadding;

  //For dynamic Sizing
  late final double widthRatio;
  late final double heightRatio;
  late final double fontRatio;

  //Dynamic Font Sizes
  late final double extraSmallFontSize;
  late final double smallFontSize;
  late final double mediumFontSize;
  late final double regularFontSize;
  late final double largeFontSize;
  late final double extraLargeFontSize;
  late final double jumboFontSize;

  //padding
  late final double smallPadding;
  late final double regularPadding;
  late final double mediumPadding;
  late final double pagePadding;
  late final double largePadding;
  late final double extraLargePadding;
  late final double largerPadding;
  late final double jumboPadding;

  void initializeSize(context) {
    _screenSize = MediaQuery.of(context).size;
    topPadding = MediaQuery.of(context).padding.top;
    width = _screenSize.shortestSide;
    height = _screenSize.longestSide;
    isPhone = _screenSize.shortestSide < 600;
    fontRatio =
        (isPhone && _screenSize.width <= 360) ? _screenSize.width / 360 : 1.0;
    widthRatio = isPhone ? _screenSize.width / 360 : _screenSize.width / 900;
    heightRatio =
        isPhone ? _screenSize.height / 720 : _screenSize.height / 1200;
    extraSmallFontSize = 8.0 * fontRatio;
    smallFontSize = 12.0 * fontRatio;
    regularFontSize = 14.0 * fontRatio;
    mediumFontSize = 18.0 * fontRatio;
    largeFontSize = 24.0 * fontRatio;
    extraLargeFontSize = 32.0 * fontRatio;
    jumboFontSize = 38.0 * fontRatio;

    smallPadding = 8.0 * widthRatio;
    regularPadding = 18.0 * widthRatio;
    mediumPadding = 24.0 * widthRatio;
    pagePadding = 32.0 * widthRatio;
    largePadding = 44.0 * widthRatio;
    largerPadding = 52.0 * widthRatio;
    extraLargePadding = 72.0 * widthRatio;
    jumboPadding = 100.0 * widthRatio;
  }

  void refreshSize(context) {
    _screenSize = MediaQuery.of(context).size;
    width = _screenSize.width;
    height = _screenSize.height;
  }
}
