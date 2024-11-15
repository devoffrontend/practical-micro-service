import prisma from "@/prisma_db";

const getInventories = async (req, res, next) => {
  try {
    // Fetch all inventory records from the database
    const inventories = await prisma.inventory.findMany();

    // Send the inventories in the response
    return res.status(200).json(inventories);
  } catch (error) {
    // Pass the error to the error handler middleware
    next(error);
  }
};

export default getInventories;
