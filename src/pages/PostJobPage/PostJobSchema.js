import * as Yup from "yup";
export const ValidateSchema = Yup.object({
    title: Yup.string().required("job title is required"),
    category: Yup.string().required("category is required"),
    duration: Yup.string().required("duration is required"),
    experience: Yup.string().required("experience is required"),
    language: Yup.string().required("language is required"),
    hourlyFrom: Yup.number().min(5).required("hourly rate is required"),
    hourlyTo: Yup.number().required("hourly rate is required"),
    description: Yup.string().max(5000).required("description is required"),
    terms: Yup.boolean(),
});
