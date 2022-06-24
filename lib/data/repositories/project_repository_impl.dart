import 'package:portfolio/core/local_database/database.dart';
import 'package:portfolio/data/models/projects_model.dart';
import 'package:portfolio/core/error/failures.dart';
import 'package:dartz/dartz.dart';
import 'package:portfolio/domain/repositories/project_repository.dart';

class ProjectRepositoryImpl implements ProjectRepository {
  final Database database;

  ProjectRepositoryImpl(this.database);
  @override
  Future<Either<Failure, List<Project>>> getAllProjects() async {
    return Right(database.projects);
  }
}
