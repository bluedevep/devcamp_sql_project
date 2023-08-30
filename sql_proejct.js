/*
USE devcamp_sql_project;

select *
from courses;

select *
from students;

select *
from grades;

select *
from professors;

-- 5. Finding which student and professor have the most courses in common

SELECT
s.students_id, p.professors_id, COUNT(c.courses_id)
FROM students S
JOIN grades g
ON s.students_id = g.grades_students_id
JOIN courses C
ON c.courses_id = g.grades_courses_id
JOIN professors P
ON p.professors_id = c.courses_professors_id
GROUP BY s.students_id, p.professors_id ;


-- 4 Create a summary report of courses and their average grades, 
-- sorted by the most challenging course (course with the lowest average grade) to the easiest course

SELECT 
C.courses_name as 'Most Challeging Courses',
AVG(G.grades_score) AS 'Average Scores'
FROM courses C
JOIN grades G
ON C.courses_id = G.grades_courses_id
GROUP BY C.courses_name
ORDER BY AVG(G.grades_score) ASC;


-- 3. Sort students by the courses that they are enrolled in

select 
C.courses_name, S.students_email
FROM grades G
JOIN students S
ON S.students_id = G.grades_students_id
JOIN courses C
ON C.courses_id = grades_courses_id
ORDER BY C.courses_name ;




-- 2. The top grades for each student

SELECT 
s.students_email AS 'Email',
max(g.grades_score) as 'top_score'
FROM students S
JOIN grades G
ON G.grades_students_id = S.students_id
group by students_email
order by max(g.grades_score) desc;

-- 1. The average grade that is given by each professor

SELECT 
P.professors_email as 'Email', 
avg(grades_score) AS 'average_score'
FROM courses C
JOIN professors P
ON C.courses_professors_id = P.professors_id
JOIN grades G
ON G.grades_courses_id = C.courses_id
GROUP BY professors_email;


-- populate grades

INSERT INTO grades (grades_students_id, grades_courses_id, grades_score) VALUES
(1, 7, 2.94),
(1, 8, 6.79),
(1, 9, 8.96),
(1, 10, 1.47),
(1, 11, 1.82),
(1, 12, 4.74),
(2, 7, 3.84),
(2, 8, 2.22),
(2, 9, 1.28),
(2, 10, 4.18),
(2, 11, 0.08),
(2, 12, 8.5),
(3, 7, 5.15),
(3, 8, 9.63),
(3, 9, 9.53),
(3, 10, 9.74),
(3, 11, 4.11),
(3, 12, 1.85),
(4, 7, 6),
(4, 8, 5.73),
(4, 9, 3.64),
(4, 10, 6.54),
(4, 11, 3.91),
(4, 12, 4.34),
(5, 7, 5.23),
(5, 8, 4.72),
(5, 9, 9.11),
(5, 10, 8.07),
(5, 11, 3.52),
(5, 12, 7.29),
(6, 7, 3.19),
(6, 8, 9.37),
(6, 9, 5.47),
(6, 10, 0.05),
(6, 11, 3.59),
(6, 12, 4.75),
(7, 7, 7.67),
(7, 8, 0.64),
(7, 9, 6.96),
(7, 10, 3.26),
(7, 11, 8.64),
(7, 12, 2.45),
(8, 7, 5.78),
(8, 8, 7.76),
(8, 9, 8.81),
(8, 10, 0.84),
(8, 11, 3.6),
(8, 12, 3.8),
(9, 7, 7.42),
(9, 8, 1.57),
(9, 9, 0.27),
(9, 10, 5.37),
(9, 11, 9.81),
(9, 12, 6.2),
(10, 7, 8.86),
(10, 8, 8.85),
(10, 9, 3.5),
(10, 10, 7.73),
(10, 11, 3.11),
(10, 12, 8.39);

-- POPULATE COURSES


INSERT INTO courses (courses_name, courses_professors_id) VALUES
('INTRO REACT', 1),
('ADVANCED REACT', 1),
('INTRO PYTHON', 2),
('ADVANCED PYTHON', 2),
('INTRO JAVASCRIPT', 3),
('ADVANCED JAVASCRIPT', 3);

-- populate professors

INSERT INTO professors (professors_first_name, professors_last_name, professors_email) VALUES
('Professor', 'Brown', 'brown@test.com'),
('Professor', 'Davis', 'davis@test.com'),
('Professor', 'Wilson', 'wilson@test.com');

-- seed para los students

INSERT INTO students(students_first_name, students_last_name, students_email)
            VALUES ('firstName 1', 'lastName 1', 'test1@test.com' );
            
INSERT INTO students(students_first_name, students_last_name, students_email)
            VALUES ('firstName 2', 'lastName 2', 'test2@test.com' );
            
INSERT INTO students(students_first_name, students_last_name, students_email)
            VALUES ('firstName 3', 'lastName 3', 'test3@test.com' );
            
INSERT INTO students(students_first_name, students_last_name, students_email)
            VALUES ('firstName 4', 'lastName 4', 'test4@test.com' );
            
INSERT INTO students(students_first_name, students_last_name, students_email)
            VALUES ('firstName 5', 'lastName 5', 'test5@test.com' );
            
INSERT INTO students(students_first_name, students_last_name, students_email)
            VALUES ('firstName 6', 'lastName 6', 'test6@test.com' );
            
INSERT INTO students(students_first_name, students_last_name, students_email)
            VALUES ('firstName 7', 'lastName 7', 'test7@test.com' );
            
INSERT INTO students(students_first_name, students_last_name, students_email)
            VALUES ('firstName 8', 'lastName 8', 'test8@test.com' );
            
INSERT INTO students(students_first_name, students_last_name, students_email)
            VALUES ('firstName 9', 'lastName 9', 'test9@test.com' );
            
INSERT INTO students(students_first_name, students_last_name, students_email)
            VALUES ('firstName 10', 'lastName 10', 'test10@test.com' );
            
INSERT INTO students(students_first_name, students_last_name, students_email)
            VALUES ('firstName 11', 'lastName 11', 'test11@test.com' );
            
INSERT INTO students(students_first_name, students_last_name, students_email)
            VALUES ('firstName 12', 'lastName 12', 'test12@test.com' );
            
INSERT INTO students(students_first_name, students_last_name, students_email)
            VALUES ('firstName 13', 'lastName 13', 'test13@test.com' );
            
INSERT INTO students(students_first_name, students_last_name, students_email)
            VALUES ('firstName 14', 'lastName 14', 'test14@test.com' );
            
INSERT INTO students(students_first_name, students_last_name, students_email)
            VALUES ('firstName 15', 'lastName 15', 'test15@test.com' );
            
INSERT INTO students(students_first_name, students_last_name, students_email)
            VALUES ('firstName 16', 'lastName 16', 'test16@test.com' );
            
INSERT INTO students(students_first_name, students_last_name, students_email)
            VALUES ('firstName 17', 'lastName 17', 'test17@test.com' );
            
INSERT INTO students(students_first_name, students_last_name, students_email)
            VALUES ('firstName 18', 'lastName 18', 'test18@test.com' );
            
INSERT INTO students(students_first_name, students_last_name, students_email)
            VALUES ('firstName 19', 'lastName 19', 'test19@test.com' );
            
INSERT INTO students(students_first_name, students_last_name, students_email)
            VALUES ('firstName 20', 'lastName 20', 'test20@test.com' );
            
INSERT INTO students(students_first_name, students_last_name, students_email)
            VALUES ('firstName 21', 'lastName 21', 'test21@test.com' );
            
INSERT INTO students(students_first_name, students_last_name, students_email)
            VALUES ('firstName 22', 'lastName 22', 'test22@test.com' );
            
INSERT INTO students(students_first_name, students_last_name, students_email)
            VALUES ('firstName 23', 'lastName 23', 'test23@test.com' );
            
INSERT INTO students(students_first_name, students_last_name, students_email)
            VALUES ('firstName 24', 'lastName 24', 'test24@test.com' );
            
INSERT INTO students(students_first_name, students_last_name, students_email)
            VALUES ('firstName 25', 'lastName 25', 'test25@test.com' );
            
INSERT INTO students(students_first_name, students_last_name, students_email)
            VALUES ('firstName 26', 'lastName 26', 'test26@test.com' );
            
INSERT INTO students(students_first_name, students_last_name, students_email)
            VALUES ('firstName 27', 'lastName 27', 'test27@test.com' );
            
INSERT INTO students(students_first_name, students_last_name, students_email)
            VALUES ('firstName 28', 'lastName 28', 'test28@test.com' );
            
INSERT INTO students(students_first_name, students_last_name, students_email)
            VALUES ('firstName 29', 'lastName 29', 'test29@test.com' );
            
INSERT INTO students(students_first_name, students_last_name, students_email)
            VALUES ('firstName 30', 'lastName 30', 'test30@test.com' );
            
INSERT INTO students(students_first_name, students_last_name, students_email)
            VALUES ('firstName 31', 'lastName 31', 'test31@test.com' );
            
INSERT INTO students(students_first_name, students_last_name, students_email)
            VALUES ('firstName 32', 'lastName 32', 'test32@test.com' );
            
INSERT INTO students(students_first_name, students_last_name, students_email)
            VALUES ('firstName 33', 'lastName 33', 'test33@test.com' );
            
INSERT INTO students(students_first_name, students_last_name, students_email)
            VALUES ('firstName 34', 'lastName 34', 'test34@test.com' );
            
INSERT INTO students(students_first_name, students_last_name, students_email)
            VALUES ('firstName 35', 'lastName 35', 'test35@test.com' );
            
INSERT INTO students(students_first_name, students_last_name, students_email)
            VALUES ('firstName 36', 'lastName 36', 'test36@test.com' );
            
INSERT INTO students(students_first_name, students_last_name, students_email)
            VALUES ('firstName 37', 'lastName 37', 'test37@test.com' );
            
INSERT INTO students(students_first_name, students_last_name, students_email)
            VALUES ('firstName 38', 'lastName 38', 'test38@test.com' );
            
INSERT INTO students(students_first_name, students_last_name, students_email)
            VALUES ('firstName 39', 'lastName 39', 'test39@test.com' );
            
INSERT INTO students(students_first_name, students_last_name, students_email)
            VALUES ('firstName 40', 'lastName 40', 'test40@test.com' );
            
INSERT INTO students(students_first_name, students_last_name, students_email)
            VALUES ('firstName 41', 'lastName 41', 'test41@test.com' );
            
INSERT INTO students(students_first_name, students_last_name, students_email)
            VALUES ('firstName 42', 'lastName 42', 'test42@test.com' );
            
INSERT INTO students(students_first_name, students_last_name, students_email)
            VALUES ('firstName 43', 'lastName 43', 'test43@test.com' );
            
INSERT INTO students(students_first_name, students_last_name, students_email)
            VALUES ('firstName 44', 'lastName 44', 'test44@test.com' );
            
INSERT INTO students(students_first_name, students_last_name, students_email)
            VALUES ('firstName 45', 'lastName 45', 'test45@test.com' );
            
INSERT INTO students(students_first_name, students_last_name, students_email)
            VALUES ('firstName 46', 'lastName 46', 'test46@test.com' );
            
INSERT INTO students(students_first_name, students_last_name, students_email)
            VALUES ('firstName 47', 'lastName 47', 'test47@test.com' );
            
INSERT INTO students(students_first_name, students_last_name, students_email)
            VALUES ('firstName 48', 'lastName 48', 'test48@test.com' );
            
INSERT INTO students(students_first_name, students_last_name, students_email)
            VALUES ('firstName 49', 'lastName 49', 'test49@test.com' );
            
INSERT INTO students(students_first_name, students_last_name, students_email)
            VALUES ('firstName 50', 'lastName 50', 'test50@test.com' );
            
INSERT INTO students(students_first_name, students_last_name, students_email)
            VALUES ('firstName 51', 'lastName 51', 'test51@test.com' );
            
INSERT INTO students(students_first_name, students_last_name, students_email)
            VALUES ('firstName 52', 'lastName 52', 'test52@test.com' );
            
INSERT INTO students(students_first_name, students_last_name, students_email)
            VALUES ('firstName 53', 'lastName 53', 'test53@test.com' );
            
INSERT INTO students(students_first_name, students_last_name, students_email)
            VALUES ('firstName 54', 'lastName 54', 'test54@test.com' );
            
INSERT INTO students(students_first_name, students_last_name, students_email)
            VALUES ('firstName 55', 'lastName 55', 'test55@test.com' );
            
INSERT INTO students(students_first_name, students_last_name, students_email)
            VALUES ('firstName 56', 'lastName 56', 'test56@test.com' );
            
INSERT INTO students(students_first_name, students_last_name, students_email)
            VALUES ('firstName 57', 'lastName 57', 'test57@test.com' );
            
INSERT INTO students(students_first_name, students_last_name, students_email)
            VALUES ('firstName 58', 'lastName 58', 'test58@test.com' );
            
INSERT INTO students(students_first_name, students_last_name, students_email)
            VALUES ('firstName 59', 'lastName 59', 'test59@test.com' );
            
INSERT INTO students(students_first_name, students_last_name, students_email)
            VALUES ('firstName 60', 'lastName 60', 'test60@test.com' );
            
INSERT INTO students(students_first_name, students_last_name, students_email)
            VALUES ('firstName 61', 'lastName 61', 'test61@test.com' );
            
INSERT INTO students(students_first_name, students_last_name, students_email)
            VALUES ('firstName 62', 'lastName 62', 'test62@test.com' );
            
INSERT INTO students(students_first_name, students_last_name, students_email)
            VALUES ('firstName 63', 'lastName 63', 'test63@test.com' );
            
INSERT INTO students(students_first_name, students_last_name, students_email)
            VALUES ('firstName 64', 'lastName 64', 'test64@test.com' );
            
INSERT INTO students(students_first_name, students_last_name, students_email)
            VALUES ('firstName 65', 'lastName 65', 'test65@test.com' );
            
INSERT INTO students(students_first_name, students_last_name, students_email)
            VALUES ('firstName 66', 'lastName 66', 'test66@test.com' );
            
INSERT INTO students(students_first_name, students_last_name, students_email)
            VALUES ('firstName 67', 'lastName 67', 'test67@test.com' );
            
INSERT INTO students(students_first_name, students_last_name, students_email)
            VALUES ('firstName 68', 'lastName 68', 'test68@test.com' );
            
INSERT INTO students(students_first_name, students_last_name, students_email)
            VALUES ('firstName 69', 'lastName 69', 'test69@test.com' );
            
INSERT INTO students(students_first_name, students_last_name, students_email)
            VALUES ('firstName 70', 'lastName 70', 'test70@test.com' );
            
INSERT INTO students(students_first_name, students_last_name, students_email)
            VALUES ('firstName 71', 'lastName 71', 'test71@test.com' );
            
INSERT INTO students(students_first_name, students_last_name, students_email)
            VALUES ('firstName 72', 'lastName 72', 'test72@test.com' );
            
INSERT INTO students(students_first_name, students_last_name, students_email)
            VALUES ('firstName 73', 'lastName 73', 'test73@test.com' );
            
INSERT INTO students(students_first_name, students_last_name, students_email)
            VALUES ('firstName 74', 'lastName 74', 'test74@test.com' );
            
INSERT INTO students(students_first_name, students_last_name, students_email)
            VALUES ('firstName 75', 'lastName 75', 'test75@test.com' );
            
INSERT INTO students(students_first_name, students_last_name, students_email)
            VALUES ('firstName 76', 'lastName 76', 'test76@test.com' );
            
INSERT INTO students(students_first_name, students_last_name, students_email)
            VALUES ('firstName 77', 'lastName 77', 'test77@test.com' );
            
INSERT INTO students(students_first_name, students_last_name, students_email)
            VALUES ('firstName 78', 'lastName 78', 'test78@test.com' );
            
INSERT INTO students(students_first_name, students_last_name, students_email)
            VALUES ('firstName 79', 'lastName 79', 'test79@test.com' );
            
INSERT INTO students(students_first_name, students_last_name, students_email)
            VALUES ('firstName 80', 'lastName 80', 'test80@test.com' );
            
INSERT INTO students(students_first_name, students_last_name, students_email)
            VALUES ('firstName 81', 'lastName 81', 'test81@test.com' );
            
INSERT INTO students(students_first_name, students_last_name, students_email)
            VALUES ('firstName 82', 'lastName 82', 'test82@test.com' );
            
INSERT INTO students(students_first_name, students_last_name, students_email)
            VALUES ('firstName 83', 'lastName 83', 'test83@test.com' );
            
INSERT INTO students(students_first_name, students_last_name, students_email)
            VALUES ('firstName 84', 'lastName 84', 'test84@test.com' );
            
INSERT INTO students(students_first_name, students_last_name, students_email)
            VALUES ('firstName 85', 'lastName 85', 'test85@test.com' );
            
INSERT INTO students(students_first_name, students_last_name, students_email)
            VALUES ('firstName 86', 'lastName 86', 'test86@test.com' );
            
INSERT INTO students(students_first_name, students_last_name, students_email)
            VALUES ('firstName 87', 'lastName 87', 'test87@test.com' );
            
INSERT INTO students(students_first_name, students_last_name, students_email)
            VALUES ('firstName 88', 'lastName 88', 'test88@test.com' );
            
INSERT INTO students(students_first_name, students_last_name, students_email)
            VALUES ('firstName 89', 'lastName 89', 'test89@test.com' );
            
INSERT INTO students(students_first_name, students_last_name, students_email)
            VALUES ('firstName 90', 'lastName 90', 'test90@test.com' );
            
INSERT INTO students(students_first_name, students_last_name, students_email)
            VALUES ('firstName 91', 'lastName 91', 'test91@test.com' );
            
INSERT INTO students(students_first_name, students_last_name, students_email)
            VALUES ('firstName 92', 'lastName 92', 'test92@test.com' );
            
INSERT INTO students(students_first_name, students_last_name, students_email)
            VALUES ('firstName 93', 'lastName 93', 'test93@test.com' );
            
INSERT INTO students(students_first_name, students_last_name, students_email)
            VALUES ('firstName 94', 'lastName 94', 'test94@test.com' );
            
INSERT INTO students(students_first_name, students_last_name, students_email)
            VALUES ('firstName 95', 'lastName 95', 'test95@test.com' );
            
INSERT INTO students(students_first_name, students_last_name, students_email)
            VALUES ('firstName 96', 'lastName 96', 'test96@test.com' );
            
INSERT INTO students(students_first_name, students_last_name, students_email)
            VALUES ('firstName 97', 'lastName 97', 'test97@test.com' );
            
INSERT INTO students(students_first_name, students_last_name, students_email)
            VALUES ('firstName 98', 'lastName 98', 'test98@test.com' );
            
INSERT INTO students(students_first_name, students_last_name, students_email)
            VALUES ('firstName 99', 'lastName 99', 'test99@test.com' );
*/


/*  
function populate_students(n) {

    for (let i = 1; i < n; i++) {
        console.log(
            `INSERT INTO students(students_first_name, students_last_name, students_email)
            VALUES ('firstName ${i}', 'lastName ${i}', 'test${i}@test.com' );
            `
        );
        
    }
    
}

populate_students(100);

*/

/*

INSERT INTO professors (professors_first_name, professors_last_name, professors_email) VALUES
('Professor', 'Brown', 'brown@test.com'),
('Professor', 'Davis', 'davis@test.com'),
('Professor', 'Wilson', 'wilson@test.com');



INSERT INTO courses (courses_name, courses_professors_id) VALUES
('INTRO REACT', 1),
('ADVANCED REACT', 1),
('INTRO PYTHON', 2),
('ADVANCED PYTHON', 2),
('INTRO JAVASCRIPT', 3)
('ADVANCED JAVASCRIPT', 3);

*/

//s numero del studiante
//c numero de cursos
function populate_grades(s,c) {
    console.log(
        'INSERT INTO grades (grades_students_id, grades_courses_id, grades_score) VALUES'
    );
    for (let i = 1; i <= s; i++) {
        for (let j = 7; j <= c; j++) {
            console.log(`(${i}, ${j}, ${getRandomDecimal42()}),`);
        }
    
    }
}

function getRandomDecimal42() {
    const min = 0.01;  // Minimum value (e.g., 0.01)
    const max = 9.99; // Maximum value (e.g., 99.99)

    // Generate a random number between min and max
    const randomInRange = min + Math.random() * (max - min);

    // Round to 2 decimal places
    const roundedNumber = Math.round(randomInRange * 100) / 100;

    return roundedNumber;
}

// Example: Generate a random decimal(4,2) number
//const randomDecimal42 = getRandomDecimal42();


populate_grades(10, 12);


