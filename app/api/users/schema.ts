import { z } from "zod";

const schema = z.object({
  firstname: z
    .string()
    .min(3, { message: "Name must be 5 or more characters!" }),
  lastname: z
    .string()
    .min(3, { message: "Name must be 5 or more characters!" }),
  email: z.string().email(),
});

export default schema;
