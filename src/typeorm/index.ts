import { User } from 'src/users/models/entities/user.entity';
import { Teacher } from 'src/teachers/entities/teacher.entity';
import { First } from 'src/schedule/first/entities/first.entity';
import { Second } from 'src/schedule/second/entities/second.entity';
import { Third } from 'src/schedule/third/entities/third.entity';
import { Fourth } from 'src/schedule/fourth/entities/fourth.entity';
import { TeacherSchedule } from 'src/teachers/entities/teacher_subjects.entity';

const entities = [User, Teacher, First, Second, Third, Fourth, TeacherSchedule];

export { User, Teacher, First, Second, Third, Fourth, TeacherSchedule };

export default entities;
