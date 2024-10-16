import { User } from 'src/users/models/entities/user.entity';
// import { Teacher } from 'src/teachers/entities/teacher.entity';

import { TeacherSchedule } from 'src/teachers/entities/teacher_subjects.entity';

//^ IT
import { CcsScheduleEntitiy } from 'src/schedule/CCS/entities/ccs-schedule.entity';

import { itSubjectsEntity } from 'src/subjects/IT/entity/ccs-subjects.entity';

//^ CTE

import { bsedSubjectsEntity } from 'src/subjects/CTE/entity/bsed-subjects.entity';
import { beedSubjectsEntity } from 'src/subjects/CTE/entity/beed-subjects.entity';
import { bsedScheduleEntity } from 'src/schedule/CTE/BSED/entities/bsed-schedule.entity';
import { beedScheduleEntity } from 'src/schedule/CTE/BSELEM/entities/beed-schedule.entity';

//^ COE

import { bsmeScheduleEntity } from 'src/schedule/COE/entities/bsme-schedule.entity';

//^ CALENDAR

import { CalendarEntity } from 'src/calendar/entities/calendar.entity';

const entities = [
  User,
  // Teacher,
  TeacherSchedule,

  //^ IT
  CcsScheduleEntitiy,
  itSubjectsEntity,

  //^ CTE
  bsedSubjectsEntity,
  beedSubjectsEntity,
  bsedScheduleEntity,
  beedScheduleEntity,
  bsmeScheduleEntity,

  //^ CALENDAR
  CalendarEntity,
];

export {
  User,
  // Teacher,
  TeacherSchedule,
  // itsubjectsEntity,
  // itsubjectstwoEntity,
  // itsubjectsthreeEntity,
  // itsubjectsfourEntity,
  CcsScheduleEntitiy,
  bsedSubjectsEntity,
  beedSubjectsEntity,
  bsedScheduleEntity,
  beedScheduleEntity,
  bsmeScheduleEntity,
  CalendarEntity,
};

export default entities;
