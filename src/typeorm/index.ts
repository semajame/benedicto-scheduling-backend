import { User } from 'src/users/models/entities/user.entity';
import { Teacher } from 'src/teachers/entities/teacher.entity';
import { First } from 'src/schedule/first/entities/first.entity';

const entities = [User, Teacher, First];

export { User, Teacher, First };

export default entities;
