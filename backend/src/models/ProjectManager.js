const AbstractManager = require("./AbstractManager");

class ProjectManager extends AbstractManager {
  constructor() {
    super({ table: "project" });
  }

  insert(project) {
    return this.connection.query(
      `insert into ${this.table} (title) values (?)`,
      [project.title]
    );
  }

  update(project) {
    return this.connection.query(
      `update ${this.table} set title = ? where id = ?`,
      [project.title, project.id]
    );
  }

  getProject() {
    return this.connection.query(
      `SELECT 
  project.*, 
  JSON_ARRAYAGG(skill.skill_name) AS tools
FROM 
  ${this.table} 
  JOIN project_skills ON project.id = project_skills.project_id 
  JOIN skill ON project_skills.skill_id = skill.id
GROUP BY 
  project.id, project.project_name`
    );
  }
}

/*    SELECT project.*, skills.*
FROM ${this.table}
JOIN project_skills ON project_skills.project_id = project.id
JOIN skills ON skills.id = project_skills.skill_id
WHERE project.id = [your_project_id];
*/

module.exports = ProjectManager;
