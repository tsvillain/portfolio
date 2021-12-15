class MediumBlogModel {
  String title;
  String pubDate;

  String guid;
  String author;
  String thumbnail;

  List<String> categories;

  MediumBlogModel({
    required this.title,
    required this.pubDate,
    required this.guid,
    required this.author,
    required this.thumbnail,
    required this.categories,
  });

  factory MediumBlogModel.fromJson(Map<String, dynamic> json) =>
      MediumBlogModel(
        title: json['title'],
        pubDate: json['pubDate'],
        guid: json['guid'],
        author: json['author'],
        thumbnail: json['thumbnail'],
        categories: json['categories'].cast<String>(),
      );

  Map<String, dynamic> toJson() {
    final Map<String, dynamic> data = <String, dynamic>{};
    data['title'] = title;
    data['pubDate'] = pubDate;
    data['guid'] = guid;
    data['author'] = author;
    data['thumbnail'] = thumbnail;
    data['categories'] = categories;
    return data;
  }
}
