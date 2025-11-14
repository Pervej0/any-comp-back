import { RequestHandler } from 'express';
import { StatusCodes } from 'http-status-codes';
import asyncCatch from '../../shared/asyncCatch';
import {
  createSpecialistDB,
  deleteSpecialistDB,
  getAllSpecialistDB,
  updateSpecialistDB,
} from './specialist.service';
import sendResponse from '../../shared/sendResponse';

export const createSpecialist: RequestHandler = asyncCatch(async (req, res) => {
  const result = await createSpecialistDB(req.body);
  sendResponse(res, {
    statusCode: StatusCodes.CREATED,
    message: 'Specialists created successfully',
    data: result,
  });
});

export const getAllSpecialist: RequestHandler = asyncCatch(async (req, res) => {
  const result = await getAllSpecialistDB();
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    message: 'Specialists retrieved successfully',
    data: result,
  });
});

export const updateSpecialist: RequestHandler = asyncCatch(async (req, res) => {
  const { id } = req.params;
  const result = await updateSpecialistDB(id, req.body);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    message: 'Specialist updated successfully',
    data: result,
  });
});

export const deleteSpecialist: RequestHandler = asyncCatch(async (req, res) => {
  const { id } = req.params;
  const result = await deleteSpecialistDB(id);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    message: 'Specialist deleted successfully',
    data: result,
  });
});
