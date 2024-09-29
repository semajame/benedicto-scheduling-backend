import { User } from 'src/users/models/entities/user.entity';
import { Teacher } from 'src/teachers/entities/teacher.entity';
import { First } from 'src/schedule/first/entities/first.entity';
import { Second } from 'src/schedule/second/entities/second.entity';
import { Third } from 'src/schedule/third/entities/third.entity';
import { Fourth } from 'src/schedule/fourth/entities/fourth.entity';
import { All } from 'src/schedule/all/entities/all.entity';
import { TeacherSchedule } from 'src/teachers/entities/teacher_subjects.entity';

//^ IT SUBJECTS
import { itsubjectsEntity } from 'src/subjects/IT/entity/itsubjects.entity';
import { itsubjectstwoEntity } from 'src/subjects/IT/entity/itsubjectstwo.entity';
import { itsubjectsthreeEntity } from 'src/subjects/IT/entity/itsubjectsthree.entity';
import { itsubjectsfourEntity } from 'src/subjects/IT/entity/itsubjectsfour.entity';

//^ CTE

import { bsedSubjectsEntity } from 'src/subjects/CTE/entity/bsedsubjects.entity';
import { beedSubjectsEntity } from 'src/subjects/CTE/entity/beedsubjects.entity';
import { bsedScheduleEntity } from 'src/schedule/CTE/BSED/entities/bsedSchedule.entity';

//^ CALENDAR

import { CalendarEntity } from 'src/calendar/entities/calendar.entity';

const entities = [
  User,
  Teacher,
  First,
  Second,
  Third,
  Fourth,
  All,
  TeacherSchedule,
  itsubjectsEntity,
  itsubjectstwoEntity,
  itsubjectsthreeEntity,
  itsubjectsfourEntity,
  bsedSubjectsEntity,
  beedSubjectsEntity,
  bsedScheduleEntity,
  CalendarEntity,
];

export {
  User,
  Teacher,
  First,
  Second,
  Third,
  Fourth,
  All,
  TeacherSchedule,
  itsubjectsEntity,
  itsubjectstwoEntity,
  itsubjectsthreeEntity,
  itsubjectsfourEntity,
  bsedSubjectsEntity,
  beedSubjectsEntity,
  bsedScheduleEntity,
  CalendarEntity,
};

export default entities;
