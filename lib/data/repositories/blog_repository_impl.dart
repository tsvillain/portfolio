import 'package:portfolio/core/local_database/database.dart';
import 'package:portfolio/data/models/medium_blog_model.dart';
import 'package:portfolio/core/error/failures.dart';
import 'package:dartz/dartz.dart';
import 'package:portfolio/domain/repositories/blog_repository.dart';

class BlogRepositoryImpl implements BlogRepository {
  final Database database;

  BlogRepositoryImpl(this.database);

  @override
  Either<Failure, List<MediumBlog>> getAllMediumBlogs() {
    return Right(database.mediumBlogs);
  }
}
