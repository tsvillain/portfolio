import 'package:flutter/widgets.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:portfolio/presentation/resources/res.dart';

class AppTextStyles {
  final developerName = GoogleFonts.leagueSpartan(
    fontSize: sizes.jumboFontSize,
    fontWeight: FontWeight.w900,
    foreground: Paint()
      ..style = PaintingStyle.stroke
      ..strokeWidth = 1.5
      ..color = colors.white,
  );

  final shortBio = GoogleFonts.leagueSpartan(
    fontSize: sizes.largeFontSize,
    fontWeight: FontWeight.w800,
    // color: Colors.pink,
  );

  final pageHeading = GoogleFonts.leagueSpartan(
    fontSize: 32,
    color: colors.red,
    fontWeight: FontWeight.bold,
  );

  final regularText = GoogleFonts.leagueSpartan();
}
