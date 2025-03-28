
CREATE TABLE `notes` (
                         `id` int(11) NOT NULL AUTO_INCREMENT,
                         `title` varchar(80) NOT NULL,
                         `description` text NOT NULL,
                         primary key (`id`)
)

    INSERT INTO `notes` (`id`, `title`, `description`) VALUES
(1, 'Internet and Web Programming', 'Learn HTML, JS, JSON, PHP, and more'),
(2, 'Graphic Design', 'Learn Photoshop and the Adobe Creative Suite'),
(3, 'Advanced Python', 'Learn Advanced Python and SQL skills'),
(4, 'Markting Strategy', 'Create a plan for a startup company'),
(5, 'Data Driven Marketing Decisions', 'Make marketing decisions');

-- Update
UPDATE notes SET description = 'Make marketing decisions using SPSS and Excel data' WHERE id = 5);

-- Insert
INSERT INTO `notes` (`id`,`title`,`description`) VALUES
    (6, 'Class to Drop', 'This is the class to drop')

-- Delete
DELETE FROM notes WHERE id = 6;

-- 7A
select * from notes order by title DESC;

-- 7B
select * from notes limit 1 offset 1;

-- 7C
SELECT * FROM notes
WHERE description LIKE '%a%'
   OR description LIKE '%e%'
   OR description LIKE '%i%'
   OR description LIKE '%o%'
   OR description LIKE '%u%';
