import { ObjectType, Query, Mutation, Resolver, Arg } from 'type-graphql';
import { Employee } from '../entities/Employee';
import PaginatedResponse from '../utils/Paginate';

@ObjectType()
class EmployeeResponse extends PaginatedResponse(Employee) {}

@Resolver()
export class EmployeesResolver {
  @Query(() => EmployeeResponse)
  async getEmployees(
    @Arg('q') q: string,
    @Arg('sort') sort: string,
    @Arg('sortField') sortField: string,
    @Arg('limit') limit: number,
    @Arg('offset') offset: number
  ): Promise<EmployeeResponse> {
    const [employees, count] = await Employee.findAndCount({
      where: {
        name: { $regex: new RegExp(q, 'i') },
        deleted_at: { $exists: false }
      },
      order: { [sortField]: sort },
      skip: offset,
      take: limit
    });

    return {
      moreItemsToShow: offset + limit < count,
      limit,
      offset,
      count,
      items: employees
    };
  }

  @Mutation(() => String)
  async insertEmployee(
    @Arg('name') name: string,
    @Arg('username') username: string,
    @Arg('age') age: number,
    @Arg('hire_date') hire_date: Date
  ): Promise<string> {
    await Employee.insert({
      name,
      username,
      age,
      hire_date,
      created_at: new Date()
    });

    return 'Employee was saved successfully';
  }

  @Mutation(() => String)
  async inactivateEmployee(@Arg('id') id: string): Promise<string> {
    await Employee.update(id, { deleted_at: new Date() });

    return 'Employee was inactivated successfully';
  }
}
