import 'package:dartz/dartz.dart';
import 'package:portfolio/core/error/failures.dart';
import 'package:portfolio/data/models/medium_blog_model.dart';

abstract class BlogRepository {
  Either<Failure, List<MediumBlog>> getAllMediumBlogs();
}
