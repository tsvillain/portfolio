import 'package:dartz/dartz.dart';
import 'package:portfolio/core/error/failures.dart';
import 'package:portfolio/data/models/projects_model.dart';

abstract class ProjectRepository {
  Future<Either<Failure, List<Project>>> getAllProjects();
}
