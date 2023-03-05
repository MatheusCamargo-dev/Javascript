import Student from '../models/Student';

class HomeController {
  async index(req, res) {
    const newStudent = await Student.create({
      name: 'Nico',
      last_name: 'Robin',
      email: 'nicorobin@mugiwara.com',
      age: 30,
      weight: 56.3,
      height: 1.88,
    });
    res.json(newStudent);
  }
}

export default new HomeController();
