import { RequestHandler } from 'express';
import { StatusCodes } from 'http-status-codes';
import asyncCatch from '../../shared/asyncCatch';
import {
  createMediaDB,
  deleteMediaDB,
  getAllMediaDB,
  getMediaByIdDB,
  updateMediaDB,
} from './media.service';
import sendResponse from '../../shared/sendResponse';

export const createMedia: RequestHandler = asyncCatch(async (req, res) => {
  const result = await createMediaDB(req.body);
  return sendResponse(res, {
    statusCode: StatusCodes.CREATED,
    message: 'Media created successfully',
    data: result,
  });
});

export const getAllMedia: RequestHandler = asyncCatch(async (req, res) => {
  const result = await getAllMediaDB();
  return sendResponse(res, {
    statusCode: StatusCodes.OK,
    message: 'All media retrieved successfully',
    data: result,
  });
});

export const getMediaById: RequestHandler = asyncCatch(async (req, res) => {
  const { id } = req.params;
  const result = await getMediaByIdDB(id);
  return sendResponse(res, {
    statusCode: StatusCodes.OK,
    message: 'Media retrieved successfully',
    data: result,
  });
});

export const updateMedia: RequestHandler = asyncCatch(async (req, res) => {
  const { id } = req.params;
  const result = await updateMediaDB(id, req.body);
  return sendResponse(res, {
    statusCode: StatusCodes.OK,
    message: 'Media updated successfully',
    data: result,
  });
});

export const deleteMedia: RequestHandler = asyncCatch(async (req, res) => {
  const { id } = req.params;
  const result = await deleteMediaDB(id);
  return sendResponse(res, {
    statusCode: StatusCodes.OK,
    message: 'Media deleted successfully',
    data: result,
  });
});
