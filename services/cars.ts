import { Car } from "../models/Car";
import express, { Request, Response } from "express";
const { cloudinary } = require("../utils/cloudinary");

// -------------------firing express app
const app = express();
app.use(express.json());
app.use(express.urlencoded({ limit: "50mb", extended: false }));

export const list = async (req: Request, res: Response): Promise<Response> => {
  const allCars: Car[] = await Car.findAll();
  return res.status(200).json({
    status: "OK",
    message: "Success",
    data: allCars,
  });
};

export const create = async (
  req: Request,
  res: Response,
  next: any
): Promise<Response> => {
  const {
    no_police,
    brand,
    model,
    price_perday,
    capacity,
    status,
    transmision,
    type,
  } = req.body;
  const result = await cloudinary.uploader.upload(req.file?.path);
  const image = result.url;

  const car: Car = await Car.create({
    no_police,
    brand,
    model,
    image,
    price_perday,
    capacity,
    status,
    transmision,
    type,
  });
  if (!car) {
    return res.status(400).json({
      status: "Failed",
      message: "Error Can't create data",
      data: "Error",
    });
  } else {
    return res.status(201).json({
      status: "OK",
      message: "Success",
      data: car,
    });
  }
};

export const get = async (req: Request, res: Response): Promise<Response> => {
  const { id } = req.params;
  const car = await Car.findByPk(id);
  if (!car) {
    return res.status(404).json({
      status: "Failed",
      message: "Can't find data Car.",
      data: "Error",
    });
  } else {
    return res.status(200).json({
      status: "OK",
      message: "Success",
      data: car,
    });
  }
};

export const update = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { id } = req.params;
  await Car.update({ ...req.body }, { where: { id } });
  const updatedCar: Car | null = await Car.findByPk(id);
  if (!updatedCar) {
    return res.status(400).json({
      status: "Failed",
      message: "Error id not found, can't update the data.",
      data: "Error",
    });
  } else {
    return res.status(200).json({
      status: "OK",
      message: "Success",
      data: updatedCar,
    });
  }
};

export const deleted = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { id } = req.params;
  const car = await Car.findByPk(id);
  if (!car) {
    return res.status(404).json({
      status: "Failed",
      message: "Data Not Found.",
      data: "Error",
    });
  } else {
    await Car.destroy({ where: { id } });
    return res.status(200).json({
      status: "OK",
      message: "Data Successfully Deleted !",
    });
  }
};

module.exports = {
  list,
  get,
  create,
  update,
  deleted,
};
