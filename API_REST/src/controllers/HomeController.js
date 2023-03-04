import Student from '../models/Student';

class HomeController {
  async index(req, res) {
    const newStudent = await Student.create({
      name: 'Sanji',
      last_name: 'Vinsmoke',
      email: 'sanji@mugiwara.com',
      age: 21,
      weight: 80,
      height: 1.77,
    });
    res.json(newStudent);
  }
}

export default new HomeController();
