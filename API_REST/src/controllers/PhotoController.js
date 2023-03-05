/* eslint-disable camelcase */
import multer from 'multer';
import multerConfig from '../config/multer';
import Photo from '../models/Photo';

const upload = multer(multerConfig).single('photo');

class PhotoController {
  async store(req, res) {
    try {
      return upload(req, res, async (error) => {
        if (error) {
          return res.status(401).json({
            errors: [error.code],
          });
        }
        const { student_id } = req.body;

        const { originalname, filename } = req.file;
        const photo = await Photo.create({ student_id, original_name: originalname, filename });
        return res.json(photo);
      });
    } catch (e) {
      return res.status(401).json({
        errors: ['Student not exists.'],
      });
    }
  }
}

export default new PhotoController();
