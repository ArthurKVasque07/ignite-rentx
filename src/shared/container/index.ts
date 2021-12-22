import { container } from 'tsyringe'
import { ICategoriesRepository } from '../../modules/cars/repositories/ICategoryRepository'
import { CategoriesRepository } from '../../modules/cars/repositories/implementations/CategoriesRepository'

import { ISpecificationRepository } from '../../modules/cars/repositories/ISpecificationRepository'
import { SpecificationRepository } from '../../modules/cars/repositories/implementations/SpecificationRepository'
import { IUsersRepository } from '../../modules/accounts/repositories/IUsersRepository'
import { UsersRepository } from '../../modules/accounts/repositories/implementations/UsersRepository'

// ICategoriesRepository
container.registerSingleton<ICategoriesRepository>(
  "CategoriesRepository",
  CategoriesRepository
)

// ISpecificationRepository
container.registerSingleton<ISpecificationRepository>(
  "SpecificationRepository",
  SpecificationRepository
)

// IUsersRepository
container.registerSingleton<IUsersRepository>(
  "UsersRepository",
  UsersRepository
)
