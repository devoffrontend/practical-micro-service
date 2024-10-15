import { z } from "zod";

export const InventoryCreateDTO = z.object({
    productId: z.string(),
    sku: z.string(),
    quantity: z.number().int().positive().optional().default(0),
})

export type TypeInventoryCreateDTO = z.infer<typeof InventoryCreateDTO>;