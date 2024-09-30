INSERT INTO `bsit1`(`subject_code`, `subject`, `units`, `pre_req`, `year`) VALUES 
('Fil1', 'Retorika ', 3, NULL, 1),
('Fil2', 'Panitikan ng Pilipinas', 3, 'Fil 1', 1),

('HIST', 'Reading in Philippines History - LEC', 3, NULL, 1),
('IT110', 'Introduction to Computing - LEC', 3, NULL, 1),
('IT111', 'Computer Programming 1 - LEC', 3, NULL, 1),
('IT120', 'Discrete Structures - LEC', 3, 'MathPrep', 1),
('IT121', 'Computer Programming II - LEC', 3, 'IT111', 1),
('IT123', 'PC Assembly & Troubleshooting - LEC', 3, 'IT110', 1),
('ITVG', 'Visual Graphics - LEC', 3, NULL, 1),

('IT110L', 'Introduction to Computing - LAB', 3, NULL, 1),
('IT111L', 'Computer Programming 1 - LAB', 3, NULL, 1),
('IT120L', 'Discrete Structures - LAB', 3, 'MathPrep', 1),
('IT121L', 'Computer Programming II - LAB', 3, 'IT111', 1),
('IT123L', 'PC Assembly & Troubleshooting - LAB', 3, 'IT110', 1),
('ITVGL', 'Visual Graphics - LAB', 3, NULL, 1),

('MathPrep', 'Pre Calculus for Non-STEM', 3, NULL, 1),
('MathWorld', 'Math in the Modern World', 3, '', 1),
('NSTP 1', 'National Services Training Prog. 1', 3, '', 1),
('NSTP 2', 'National Service Training Prog. 2', 3, 'NSTP 1', 1),
('PATHFIT 1', 'Wellness & Fitness', 2, NULL, 1),
('PATHFIT 2', 'Self Defense', 2, 'PE 1', 1),
('PurCom', 'Purposive Communication', 3, NULL, 1),
('UTS', 'Understanding the Self', 3, NULL, 1);
