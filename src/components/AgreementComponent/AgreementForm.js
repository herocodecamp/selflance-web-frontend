import { useFormik } from "formik";
import React, { useState } from "react";
import { AgreementSchema } from "../SeCreateOfferComponent/CreateOfferSchema";

const initialValues = {
  title: "",
  description: "",
  price: 0,
  revision: 0,
  deliver: 0,
  extra_revision: 0,
  isChecked: false,
};

const AgreementForm = () => {
  const { values, handleBlur, handleChange, handleSubmit, errors, touched } =
    useFormik({
      initialValues,
      validationSchema: AgreementSchema,
      validateOnChange: true,
      validateOnBlur: false,

      onSubmit: (values, action) => {
        console.log(values);
        action.resetForm();
      },
    });

  console.log("errors", errors);

  return (
    <div className="sm:pt-8 pt-6 px-4 sm:px-6">
      <form onSubmit={handleSubmit}>
        <div className="space-y-3">
          <label className="block text-xl sm:text-2xl font-semibold text-[#121F3E]">
            Title
          </label>

          <input
            className=" w-full  border focus:ring-0 border-[#E3E3E3] rounded-md bg-[#FFFFFF] text-[#000000] placeholder-[#8E8E8E] text-base sm:text-xl font-semibold px-4 py-2"
            type="text"
            name="title"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.title}
            placeholder="Mobile UI Design"
          />

          {errors.title && touched.title ? (
            <p className="block text-sm font-bold text-red-400">
              {errors.title}
            </p>
          ) : null}
        </div>

        <div className="space-y-3 py-4 sm:py-6 relative">
          <label className="block text-xl sm:text-2xl font-semibold text-[#121F3E]">
            Brief
          </label>

          <textarea
            className=" w-full  border focus:ring-0 border-[#E3E3E3] rounded-md bg-[#FFFFFF] text-[#000000] placeholder-[#8E8E8E] text-base sm:text-xl font-semibold px-4 py-2 resize-none"
            name="description"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.description}
            id=""
            cols="30"
            rows="10"
            placeholder="Buyer says 2 screens of mobile app which is onboarding screens...logo will be provided by buyer and color scheme also... I will give the 2 screens with source figma file...Thank you"
          />

          <span className="text-[#979797] text-sm font-sm absolute right-1 bottom-8">
            Max 3000 Words
          </span>
          {errors.description && touched.description ? (
            <p className="block text-sm font-bold text-red-400">
              {errors.description}
            </p>
          ) : null}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          <div className="space-y-3 sm:col-span-1">
            <label className="block text-xl  font-semibold text-[#121F3E]">
              Price
            </label>

            <input
              className=" w-full  border focus:ring-0 border-[#E3E3E3] rounded-md bg-[#FFFFFF] text-[#000000] placeholder-[#8E8E8E] text-base  font-semibold px-4 py-2"
              type="text"
              name="price"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.price}
              placeholder="$150"
            />
            {errors.price && touched.price ? (
              <p className="block text-sm font-bold text-red-400">
                {errors.price}
              </p>
            ) : null}
          </div>

          <div className="space-y-3 sm:col-span-1">
            <label className="block text-xl  font-semibold text-[#121F3E]">
              No of Revisions
            </label>

            <input
              className=" w-full  border focus:ring-0 border-[#E3E3E3] rounded-md bg-[#FFFFFF] text-[#000000] placeholder-[#8E8E8E] text-base  font-semibold px-4 py-2"
              type="text"
              name="revision"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.revision}
              placeholder="3"
            />
            {errors.revision && touched.revision ? (
              <p className="block text-sm font-bold text-red-400">
                {errors.revision}
              </p>
            ) : null}
          </div>

          <div className="space-y-3 sm:col-span-1">
            <label className="block text-xl  font-semibold text-[#121F3E]">
              No of Days to Deliver
            </label>

            <input
              className=" w-full  border focus:ring-0 border-[#E3E3E3] rounded-md bg-[#FFFFFF] text-[#000000] placeholder-[#8E8E8E] text-base font-semibold px-4 py-2"
              type="text"
              name="deliver"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.deliver}
              placeholder="3"
            />
            {errors.deliver && touched.deliver ? (
              <p className="block text-sm font-bold text-red-400">
                {errors.deliver}
              </p>
            ) : null}
          </div>

          <div className="space-y-3 sm:col-span-1">
            <label className="block text-xl  font-semibold text-[#121F3E]">
              Extra Charges for Extra Revision
            </label>

            <input
              className=" w-full  border focus:ring-0 border-[#E3E3E3] rounded-md bg-[#FFFFFF] text-[#000000] placeholder-[#8E8E8E] text-base  font-semibold px-4 py-2"
              type="text"
              name="extra_revision"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.extra_revision}
              placeholder="$15 per revision"
            />
            {errors.extra_revision && touched.extra_revision ? (
              <p className="block text-sm font-bold text-red-400">
                {errors.extra_revision}
              </p>
            ) : null}
          </div>
        </div>

        <div>
          <div className="flex items-center space-x-4 py-6">
            <input
              checked={values.isChecked}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.isChecked}
              className="w-[36px] h-[36px] rounded-md"
              type="checkbox"
              name="isChecked"
            />
            <p className="text-[#8E8E8E] font-semibold text-xl">
              I’ve accepted all the terms & conditions.{" "}
            </p>
          </div>
          {errors.isChecked && touched.isChecked ? (
            <p className="text-sm font-bold text-red-400">{errors.isChecked}</p>
          ) : null}
        </div>

        <div className="flex items-center justify-end py-4">
          <button
            type="submit"
            className="text-[#00538F] text-xl sm:text-2xl font-semibold underline "
          >
            Continue
          </button>
        </div>
      </form>
    </div>
  );
};

export default AgreementForm;
