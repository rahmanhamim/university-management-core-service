import express from 'express';

const router = express.Router();

import { AcademicSemesterController } from './academicSemester.controller';

router.post('/', AcademicSemesterController.insertIntoDB);

export const AcademicSemesterRoutes = router;
