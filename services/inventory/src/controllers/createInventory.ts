import prisma from "@/prisma_db";
import { InventoryCreateDTO } from "@/schema";

const createInventory = async (req, res, next) => {
  try {
    const paredBody = InventoryCreateDTO.safeParse(req.body);

    if (!paredBody.success) {
      return res.status(400).json({ error: paredBody.error.errors });
    }

    const inventory = await prisma.inventory.create({
      data: {
        ...paredBody.data,
        histories: {
          create: {
            actionType: "IN",
            quantityChanged: paredBody.data.quantity,
            lastQuantity: 0,
            newQuantity: paredBody.data.quantity,
          },
        },
      },
      select: {
        id: true,
        quantity: true,
      },
    });

    return res.status(200).json({ inventory });
  } catch (error) {
    next(error);
  }
};

export default createInventory;
