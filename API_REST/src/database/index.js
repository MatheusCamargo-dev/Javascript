import Sequelize from 'sequelize';
import dataBaseConfig from '../config/database';
import Student from '../models/Student';
import User from '../models/User';
import Photo from '../models/Photo';

const models = [
  Student,
  User,
  Photo,
];

const connection = new Sequelize(dataBaseConfig);

models.forEach((model) => model.init(connection));
models.forEach((model) => model.associate && model.associate(connection.models));
