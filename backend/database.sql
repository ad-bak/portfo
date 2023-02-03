DROP TABLE IF EXISTS `item`;
CREATE TABLE item (
  id int(11) UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
  title varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO item (title) VALUES ('Stuff'), ('Doodads');

DROP TABLE IF EXISTS `project`;
CREATE TABLE project(
  id INT AUTO_INCREMENT PRIMARY KEY,
  project_name VARCHAR(255) NOT NULL,
  project_link VARCHAR(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO project (project_name, project_link) 
VALUES 
('Book of the Wilders', "https://book-of-wilders.netlify.app/"), 
('Legends', "https://github.com/WildCodeSchool/2022-09-JS-Reims-project-2-legends"), 
("Enedis", "https://github.com/WildCodeSchool/2022-09-JS-Reims-project-3-enedis"), 
("Food Order", "https://github.com/ad-bak/food-order-firebase");

CREATE TABLE skill (
  id INT AUTO_INCREMENT PRIMARY KEY,
  skill_name VARCHAR(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO skill (skill_name) 
VALUES 
('React'), 
('Javascript'),
('HTML'), 
('CSS'), 
('Express.js'), 
('MySQL'), 
('Bootstrap'), 
("Tailwind"), 
("TypeScript"), 
("Redux"), 
("ES7"), 
("Node.js"), 
("Python"), 
("Firebase");

CREATE TABLE project_skills (
  id INT AUTO_INCREMENT PRIMARY KEY,
  project_id INT NOT NULL,
  skill_id INT NOT NULL,
  FOREIGN KEY (project_id) REFERENCES project(id),
  FOREIGN KEY (skill_id) REFERENCES skill(id)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO project_skills (project_id, skill_id)
VALUES
(1, 2),
(1, 3),
(1, 4),
(1, 7),
(2, 1),
(2, 3),
(2, 2),
(2, 8),
(3, 1),
(3, 4),
(3, 5),
(3, 6),
(3,12),
(4, 1),
(4, 4),
(4,14);


CREATE TABLE user (
  id INT AUTO_INCREMENT PRIMARY KEY,
  login VARCHAR(255) NOT NULL,
  hashedPassword VARCHAR(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO user (login, hashedPassword)
VALUES
('adminadmin', "$argon2i$v=19$m=16,t=2,p=1$M1JzUzlscWd0aExtcnlvTQ$/HDw50BIeA8rrm90j+BdSg")