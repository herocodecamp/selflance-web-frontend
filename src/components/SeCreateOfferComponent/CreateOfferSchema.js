import * as Yup from "yup";
export const ValidateSchema = Yup.object({
  description: Yup.string().max(5000).required("description is required"),
  delivery_time: Yup.string().required("enter delivery time"),
  revision: Yup.string().required("enter revision time"),
  price: Yup.number().required("price is required"),
  additional: Yup.string(),
  isChecked: Yup.boolean().oneOf(
    [true],
    "request requirement is must be checked"
  ).required(),
  expiry: Yup.string().required("expiry is required"),
});
