import { Request, Response, NextFunction } from "express";
import prisma from "@/prisma_db";
import { InventoryCreateDTO } from "@/schema";

const createInventory = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const paredBody = InventoryCreateDTO.safeParse(req.body);

        if(!paredBody.success) {
           return res.status(400).json({error: paredBody.error.errors});
        }

        const inventory = await prisma.inventory.create({
            data: {...paredBody.data}
        })

    } catch(error) {
        next(error);
    }
}