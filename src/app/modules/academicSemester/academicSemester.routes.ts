import express from 'express';

const router = express.Router();

import validateRequest from '../../middlewares/validateRequest';
import { AcademicSemesterController } from './academicSemester.controller';
import { AcademicSemesterValidation } from './academicSemester.validation';

router.get('/', AcademicSemesterController.getAllFromDB);
router.get('/:id', AcademicSemesterController.getDataById);

router.post(
  '/',
  validateRequest(AcademicSemesterValidation.create),
  AcademicSemesterController.insertIntoDB
);

export const AcademicSemesterRoutes = router;
