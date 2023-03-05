import Student from '../models/Student';

class StudentController {
  async store(req, res) {
    try {
      const newStudent = await Student.create(req.body);
      return res.json({ newStudent });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((error) => error.message),
      });
    }
  }

  async index(req, res) {
    const students = await Student.findAll({ attributes: ['id', 'name', 'last_name', 'email', 'age', 'weight', 'height'] });
    res.json(students);
  }

  async show(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).res.json({
          errors: ['Missing id.'],
        });
      }
      const student = await Student.findByPk(id);
      if (!student) {
        return res.status(400).json({
          errors: ['student not found.'],
        });
      }
      const { name, email } = student;
      return res.json({ id, name, email });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((error) => error.message),
      });
    }
  }

  async update(req, res) {
    try {
      if (!req.params.id) {
        return res.status(400).json({
          errors: ['Missing id.'],
        });
      }

      const student = await Student.findByPk(req.params.id);

      if (!student) {
        return res.status(400).json({
          errors: ['student doesn\'t exits.'],
        });
      }

      const update = await student.update(req.body);
      const { id, name, email } = update;
      return res.json({ id, name, email });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((error) => error.message),
      });
    }
  }

  async delete(req, res) {
    try {
      if (!req.params.id) {
        return res.status(400).json({
          errors: ['Missing id.'],
        });
      }

      const student = await Student.findByPk(req.params.id);

      if (!student) {
        return res.status(400).json({
          errors: ['student doesn\'t exits.'],
        });
      }

      await student.destroy();
      return res.json({
        deleted: true,
        msg: 'student deleted with success!',
      });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((error) => error.message),
      });
    }
  }
}

export default new StudentController();
