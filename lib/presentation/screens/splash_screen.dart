import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:portfolio/presentation/controllers/blog_provider.dart';
import 'package:portfolio/presentation/resources/res.dart';
import 'package:portfolio/presentation/screens/home_screen.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

class SplashScreen extends ConsumerStatefulWidget {
  const SplashScreen({Key? key}) : super(key: key);

  @override
  _SplashScreenState createState() => _SplashScreenState();
}

class _SplashScreenState extends ConsumerState<SplashScreen> {
  @override
  void initState() {
    super.initState();
    WidgetsBinding.instance?.addPostFrameCallback((timeStamp) async {
      initializeResources(context);
      initializeRes();
      await ref.read(blogProvider).getMediumBlogs();
      await Future.delayed(const Duration(milliseconds: 500), () {
        Navigator.pushAndRemoveUntil(context,
            MaterialPageRoute(builder: (_) => const Home()), (route) => false);
      });
    });
  }

  @override
  Widget build(BuildContext context) {
    return const Center(
      child: CupertinoActivityIndicator(),
    );
  }
}
