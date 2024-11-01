import { User } from 'src/users/models/entities/user.entity';
// import { Teacher } from 'src/teachers/entities/teacher.entity';

import { TeacherSchedule } from 'src/teachers/entities/teacher_subjects.entity';

//^ IT
import { CcsScheduleEntitiy } from 'src/schedule/CCS/entities/ccs-schedule.entity';

//^ CTE

import { bsedScheduleEntity } from 'src/schedule/CTE/BSED/entities/bsed-schedule.entity';
import { beedScheduleEntity } from 'src/schedule/CTE/BSELEM/entities/beed-schedule.entity';

//^ COE

import { bsmeScheduleEntity } from 'src/schedule/COE/entities/bsme-schedule.entity';
import { bsieScheduleEntity } from 'src/schedule/COE/entities/bsie-schedule.entity';
import { bsceScheduleEntity } from 'src/schedule/COE/entities/bsce-schedule.entity';
import { bseeScheduleEntity } from 'src/schedule/COE/entities/bsee-schedule.entity';

//^  CBM

import { bsaScheduleEntity } from 'src/schedule/CBM/entities/bsa-schedule.entity';
import { bsmmScheduleEntity } from 'src/schedule/CBM/entities/bsmm-schedule.entity';
import { bshmScheduleEntity } from 'src/schedule/CBM/entities/bshm-schedule.entity';
import { bshrmScheduleEntity } from 'src/schedule/CBM/entities/bshrm-schedule.entity';

//^ CALENDAR

import { CalendarEntity } from 'src/calendar/entities/calendar.entity';

const entities = [
  User,
  // Teacher,
  TeacherSchedule,

  //^ IT
  CcsScheduleEntitiy,
  // itSubjectsEntity,

  //^ CTE
  // bsedSubjectsEntity,
  // beedSubjectsEntity,
  bsedScheduleEntity,
  beedScheduleEntity,
  bsmeScheduleEntity,

  //^ COE
  bsceScheduleEntity,
  bsmeScheduleEntity,
  bseeScheduleEntity,
  bsieScheduleEntity,

  //^ CBM
  bsaScheduleEntity,
  bsmmScheduleEntity,
  bshmScheduleEntity,
  bshrmScheduleEntity,

  //^ CALENDAR
  CalendarEntity,
];

export {
  User,
  TeacherSchedule,
  CalendarEntity,

  //^ IT
  CcsScheduleEntitiy,

  //^ CEA
  bsedScheduleEntity,
  beedScheduleEntity,

  //^ COE
  bsceScheduleEntity,
  bsmeScheduleEntity,
  bseeScheduleEntity,
  bsieScheduleEntity,

  //^ CBM
  bsaScheduleEntity,
  bsmmScheduleEntity,
  bshmScheduleEntity,
  bshrmScheduleEntity,
};

export default entities;
