import 'package:flutter/widgets.dart';
import 'text_styles.dart';
import 'sizes.dart';
import 'colors.dart';

import 'assets.dart';

late Assets assets;
late AppSizes sizes;
late AppColors colors;
late AppTextStyles styles;

void initializeResources(BuildContext context) {
  sizes = AppSizes()..initializeSize(context);
}

void initializeRes() {
  assets = Assets();
  colors = AppColors();
  styles = AppTextStyles();
}
