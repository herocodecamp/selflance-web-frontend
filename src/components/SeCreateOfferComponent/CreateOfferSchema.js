import * as Yup from "yup";
export const ValidateSchema = Yup.object({
  description: Yup.string().max(5000).required("description is required"),
  delivery_time: Yup.string().required("enter delivery time"),
  revision: Yup.string().required("enter revision time"),
  price: Yup.number().required("price is required"),
  additional: Yup.string(),
  isChecked: Yup.boolean()
    .oneOf([true], "request requirement is must be checked")
    .required(),
  expiry: Yup.string().required("expiry is required"),
});

export const AgreementSchema = Yup.object({
  title: Yup.string().max(60).required("title field is required"),
  description: Yup.string().max(5000).required("description field is required"),
  price: Yup.number().required("price is required"),
  revision: Yup.number().required("revision field is required"),
  deliver: Yup.number().required("set delivery time"),
  extra_revision: Yup.number(),
  isChecked: Yup.boolean()
    .oneOf([true], "accepted all the terms & conditions")
    .required(),
});
