import Student from '../models/Student';

class StudentController {
  async index(req, res) {
    const students = await Student.findAll({ attributes: ['id', 'name', 'last_name', 'email', 'age', 'weight', 'height'] });
    res.json(students);
  }
}

export default new StudentController();
