INSERT INTO `bsit1`(`subject_code`, `subject`, `units`, `pre_req`) VALUES 
('Fil1', 'Retorika ', 3, NULL),
('Fil2', 'Panitikan ng Pilipinas', 3, 'Fil 1'),

('HIST', 'Reading in Philippines History - LEC', 3, NULL),
('IT110', 'Introduction to Computing - LEC', 3, NULL),
('IT111', 'Computer Programming 1 - LEC', 3, NULL),
('IT120', 'Discrete Structures - LEC', 3, 'MathPrep'),
('IT121', 'Computer Programming II - LEC', 3, 'IT111'),
('IT123', 'PC Assembly & Troubleshooting - LEC', 3, 'IT110'),
('ITVG', 'Visual Graphics - LEC', 3, NULL),

('IT110L', 'Introduction to Computing - LAB', 3, NULL),
('IT111L', 'Computer Programming 1 - LAB', 3, NULL),
('IT120L', 'Discrete Structures - LAB', 3, 'MathPrep'),
('IT121L', 'Computer Programming II - LAB', 3, 'IT111'),
('IT123L', 'PC Assembly & Troubleshooting - LAB', 3, 'IT110'),
('ITVGL', 'Visual Graphics - LAB', 3, NULL),

('MathPrep', 'Pre Calculus for Non-STEM', 3, NULL),
('MathWorld', 'Math in the Modern World', 3, ''),
('NSTP 1', 'National Services Training Prog. 1', 3, ''),
('NSTP 2', 'National Service Training Prog. 2', 3, 'NSTP 1'),
('PATHFIT 1', 'Wellness & Fitness', 2, NULL),
('PATHFIT 2', 'Self Defense', 2, 'PE 1'),
('PurCom', 'Purposive Communication', 3, NULL),
('UTS', 'Understanding the Self', 3, NULL);
