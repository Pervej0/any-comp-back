import { RequestHandler } from 'express';
import { StatusCodes } from 'http-status-codes';

import {
  createServiceOfferingDB,
  getAllServiceOfferingsDB,
  getServiceOfferingByIdDB,
  updateServiceOfferingDB,
  deleteServiceOfferingDB,
} from './service_offerings.service';
import asyncCatch from '../../shared/asyncCatch';
import sendResponse from '../../shared/sendResponse';

export const createServiceOffering: RequestHandler = asyncCatch(async (req, res) => {
  const result = await createServiceOfferingDB(req.body);
  return sendResponse(res, {
    statusCode: StatusCodes.CREATED,
    message: 'Service offering created successfully',
    data: result,
  });
});

export const getAllServiceOfferings: RequestHandler = asyncCatch(async (req, res) => {
  const result = await getAllServiceOfferingsDB();
  return sendResponse(res, {
    statusCode: StatusCodes.OK,
    message: 'All service offerings retrieved successfully',
    data: result,
  });
});

export const getServiceOfferingById: RequestHandler = asyncCatch(async (req, res) => {
  const { id } = req.params;
  const result = await getServiceOfferingByIdDB(id);
  return sendResponse(res, {
    statusCode: StatusCodes.OK,
    message: 'Service offering retrieved successfully',
    data: result,
  });
});

export const updateServiceOffering: RequestHandler = asyncCatch(async (req, res) => {
  const { id } = req.params;
  const result = await updateServiceOfferingDB(id, req.body);
  return sendResponse(res, {
    statusCode: StatusCodes.OK,
    message: 'Service offering updated successfully',
    data: result,
  });
});

export const deleteServiceOffering: RequestHandler = asyncCatch(async (req, res) => {
  const { id } = req.params;
  const result = await deleteServiceOfferingDB(id);
  return sendResponse(res, {
    statusCode: StatusCodes.OK,
    message: 'Service offering deleted successfully',
    data: result,
  });
});
