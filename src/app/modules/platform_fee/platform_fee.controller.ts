import { RequestHandler } from 'express';
import { StatusCodes } from 'http-status-codes';
import {
  createPlatformFeeDB,
  getAllPlatformFeesDB,
  getPlatformFeeByIdDB,
  updatePlatformFeeDB,
  deletePlatformFeeDB,
} from './platform_fee.service';
import asyncCatch from '../../shared/asyncCatch';
import sendResponse from '../../shared/sendResponse';

export const createPlatformFee: RequestHandler = asyncCatch(async (req, res) => {
  const result = await createPlatformFeeDB(req.body);
  return sendResponse(res, {
    statusCode: StatusCodes.CREATED,
    message: 'Platform fee created successfully',
    data: result,
  });
});

export const getAllPlatformFees: RequestHandler = asyncCatch(async (req, res) => {
  const result = await getAllPlatformFeesDB();
  return sendResponse(res, {
    statusCode: StatusCodes.OK,
    message: 'All platform fees retrieved successfully',
    data: result,
  });
});

export const getPlatformFeeById: RequestHandler = asyncCatch(async (req, res) => {
  const { id } = req.params;
  const result = await getPlatformFeeByIdDB(id);
  return sendResponse(res, {
    statusCode: StatusCodes.OK,
    message: 'Platform fee retrieved successfully',
    data: result,
  });
});

export const updatePlatformFee: RequestHandler = asyncCatch(async (req, res) => {
  const { id } = req.params;
  const result = await updatePlatformFeeDB(id, req.body);
  return sendResponse(res, {
    statusCode: StatusCodes.OK,
    message: 'Platform fee updated successfully',
    data: result,
  });
});

export const deletePlatformFee: RequestHandler = asyncCatch(async (req, res) => {
  const { id } = req.params;
  const result = await deletePlatformFeeDB(id);
  return sendResponse(res, {
    statusCode: StatusCodes.OK,
    message: 'Platform fee deleted successfully',
    data: result,
  });
});
