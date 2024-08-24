import { User } from 'src/users/models/entities/user.entity';
import { Teacher } from 'src/teachers/entities/teacher.entity';
import { First } from 'src/schedule/first/entities/first.entity';
import { Second } from 'src/schedule/second/entities/second.entity';

const entities = [User, Teacher, First, Second];

export { User, Teacher, First, Second };

export default entities;
