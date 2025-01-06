import { z } from "zod";

const phoneSchema = z
  .string()
  .startsWith("09", { message: "شماره همراه وارد شده صحیح نیست" })
  .length(11, { message: "شماره همراه وارد شده صحیح نیست" });

export default phoneSchema;
