import 'package:flutter/material.dart';
import 'package:flutter_svg/flutter_svg.dart';
import 'package:portfolio/presentation/resources/res.dart';
import 'package:url_launcher/url_launcher.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Portfolio',
      theme: ThemeData.dark(),
      home: const SplashScreen(),
    );
  }
}

class SplashScreen extends StatefulWidget {
  const SplashScreen({Key? key}) : super(key: key);

  @override
  _SplashScreenState createState() => _SplashScreenState();
}

class _SplashScreenState extends State<SplashScreen> {
  @override
  void initState() {
    super.initState();
    WidgetsBinding.instance?.addPostFrameCallback((timeStamp) {
      initializeResources(context);
      initializeRes();
      Future.delayed(const Duration(seconds: 2), () {
        Navigator.pushAndRemoveUntil(context,
            MaterialPageRoute(builder: (_) => const Home()), (route) => false);
      });
    });
  }

  @override
  Widget build(BuildContext context) {
    return Container();
  }
}

class Home extends StatefulWidget {
  const Home({Key? key}) : super(key: key);

  @override
  State<Home> createState() => _HomeState();
}

class _HomeState extends State<Home> {
  final PageController _pageController =
      PageController(keepPage: true, initialPage: 0);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Container(
        decoration: BoxDecoration(
          image: DecorationImage(
            image: AssetImage(assets.backgroundImage),
            fit: BoxFit.cover,
            colorFilter: ColorFilter.mode(
              Colors.black.withOpacity(0.6),
              BlendMode.hardLight,
            ),
          ),
        ),
        child: Padding(
          padding: const EdgeInsets.symmetric(horizontal: 100),
          child: PageView(
            controller: _pageController,
            scrollDirection: Axis.vertical,
            children: [
              const HomePage(),
              const AboutPage(),
              Container(color: Colors.black),
              Container(color: Colors.pink),
            ],
          ),
        ),
      ),
    );
  }
}

class HomePage extends StatelessWidget {
  const HomePage({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Stack(
      children: [
        Column(
          mainAxisAlignment: MainAxisAlignment.center,
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text("Tekeshwar Singh", style: styles.developerName),
            SizedBox(height: sizes.regularPadding),
            Text("Flutter + Back-end Developer", style: styles.shortBio),
            SizedBox(height: sizes.mediumPadding),
            Row(
              children: [
                SocialBtn(url: links.github, asset: assets.githubSVG),
                SocialBtn(url: links.linkedin, asset: assets.linkedinSVG),
                SocialBtn(url: links.twitter, asset: assets.twitterSVG),
                SocialBtn(url: links.instagram, asset: assets.instagramSVG),
              ],
            ),
          ],
        ),
        const ScrollIndicator(),
      ],
    );
  }
}

class ScrollIndicator extends StatelessWidget {
  const ScrollIndicator({
    Key? key,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Align(
      alignment: Alignment.bottomLeft,
      child: InkWell(
        onTap: () {},
        child: Padding(
          padding: EdgeInsets.symmetric(vertical: sizes.smallPadding),
          child: Row(
            crossAxisAlignment: CrossAxisAlignment.center,
            children: const [
              Icon(Icons.arrow_circle_down_rounded),
              SizedBox(width: 5),
              Text("Scroll"),
            ],
          ),
        ),
      ),
    );
  }
}

class SocialBtn extends StatelessWidget {
  final String url;
  final String asset;

  const SocialBtn({Key? key, required this.url, required this.asset})
      : super(key: key);
  @override
  Widget build(BuildContext context) {
    return IconButton(
        onPressed: () {
          launch(url);
        },
        icon: SvgPicture.asset(asset, color: colors.grey));
  }
}

class AboutPage extends StatefulWidget {
  const AboutPage({Key? key}) : super(key: key);

  @override
  _AboutPageState createState() => _AboutPageState();
}

class _AboutPageState extends State<AboutPage> {
  @override
  Widget build(BuildContext context) {
    return Stack(
      children: [
        Row(
          mainAxisAlignment: MainAxisAlignment.spaceBetween,
          crossAxisAlignment: CrossAxisAlignment.center,
          children: [
            Expanded(
              child: Transform(
                transform: Matrix4.skew(0, 3),
                child: Container(
                  margin: EdgeInsets.symmetric(
                    vertical: sizes.extraLargePadding,
                    horizontal: sizes.mediumPadding,
                  ),
                  height: double.infinity,
                  width: double.infinity,
                  decoration: BoxDecoration(
                    color: Colors.pink,
                    image: DecorationImage(
                      image: AssetImage(assets.profileImage),
                      fit: BoxFit.cover,
                    ),
                  ),
                ),
              ),
            ),
            SizedBox(width: sizes.pagePadding),
            Expanded(
                child: Column(
              mainAxisAlignment: MainAxisAlignment.center,
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text("About Me", style: styles.pageHeading),
                SizedBox(height: sizes.regularPadding),
                Text(
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, velit mollitia? Omnis temporibus ipsam obcaecati ad earum sapiente odio unde, cupiditate ducimus doloremque accusantium dolorem distinctio eveniet, dolor delectus sequi.",
                    style: styles.regularText
                        .copyWith(fontSize: sizes.largeFontSize)),
                SizedBox(height: sizes.mediumPadding),
                ElevatedButton(
                    onPressed: () {},
                    child: Text("Download CV",
                        style: styles.regularText
                            .copyWith(fontSize: sizes.regularFontSize))),
              ],
            )),
          ],
        ),
        const ScrollIndicator(),
      ],
    );
  }
}
