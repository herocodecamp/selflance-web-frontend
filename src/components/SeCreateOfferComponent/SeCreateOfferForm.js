import { Label, Select, TextInput } from "flowbite-react";
import { Formik, useFormik } from "formik";
import React, { useState } from "react";
import { ValidateSchema } from "./CreateOfferSchema";
import axios from "axios";
import { useParams } from "react-router-dom";
import { toast } from "react-hot-toast";

const initialValues = {
  description: "",
  delivery_time: "",
  revision: "",
  price: "",
  additional: "",
  isChecked: false,
  expiry: "",
};

const SeCreateOfferForm = () => {
  const { sellerID } = useParams();
  const { values, handleBlur, handleChange, handleSubmit, errors, touched } =
    useFormik({
      initialValues,
      validationSchema: ValidateSchema,
      validateOnChange: true,
      validateOnBlur: false,

      onSubmit: async (values, action) => {
        try {
          const response = await axios.post(
            `http://localhost:8000/api/v1/sellerOffer/${sellerID}`,
            values
          );
          console.log(response.data, "response");
          action.resetForm();
        } catch (error) {
          console.log("post error", error);
        }
      },
    });

  console.log("errors", errors);

  return (
    <div className="sm:py-10 py-6">
      <form onSubmit={handleSubmit}>
        <div className="space-y-4">
          <label className="text-[#00538F] text-xl sm:text-2xl font-semibold">
            Your Offer
          </label>
          <br />
          <textarea
            className="resize-none text-[#0000000] placeholder-text-[#979797] w-full rounded-md drop-shadow-md border-1 border-[#E3E3E3] px-6 py-4 focus:ring-0"
            placeholder="Describe your offer here.....e.g. deliverables, timelines, and more"
            cols="30"
            rows="10"
            name="description"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.description}
          ></textarea>

          {errors.description && touched.description ? (
            <p className="text-sm font-bold text-red-400">
              {errors.description}
            </p>
          ) : null}
        </div>

        <div className="grid sm:grid-cols-2 grid-cols-1 gap-2.5 py-6">
          <div id="select" className="sm:col-span-1">
            <div className="mb-2 block">
              <label className="text-[#00538F] text-xl sm:text-2xl font-semibold">
                Delivery Time
              </label>
            </div>
            <Select
              required={true}
              name="delivery_time"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.delivery_time}
              className=" rounded-md"
            >
              <option>2 days</option>
              <option>3 days</option>
              <option>7 days</option>
              <option>15 days</option>
            </Select>

            {errors.delivery_time && touched.delivery_time ? (
              <p className="text-sm font-bold text-red-400">
                {errors.delivery_time}
              </p>
            ) : null}
          </div>

          <div id="select" className="sm:col-span-1">
            <div className="mb-2 block">
              <label className="text-[#00538F] text-xl sm:text-2xl font-semibold">
                Revision
              </label>
            </div>
            <Select
              required={true}
              name="revision"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.revision}
              className=" rounded-md"
            >
              <option>unlimited</option>
              <option>3 days</option>
              <option>7 days</option>
              <option>15 days</option>
            </Select>

            {errors.revision && touched.revision ? (
              <p className="text-sm font-bold text-red-400">
                {errors.revision}
              </p>
            ) : null}
          </div>

          <div id="select" className="sm:col-span-1">
            <div className="mb-2 block">
              <label className="text-[#979797] text-xl sm:text-2xl font-semibold">
                Total price
              </label>
            </div>
            <TextInput
              id="base"
              type="text"
              sizing="md"
              name="price"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.price}
              placeholder="$500"
            />

            {errors.price && touched.price ? (
              <p className="text-sm font-bold text-red-400">{errors.price}</p>
            ) : null}
          </div>

          <div id="select" className="sm:col-span-1">
            <div className="mb-2  block">
              <label className="text-[#00538F] text-xl sm:text-2xl font-semibold">
                Additional Option
              </label>
            </div>
            <Select
              required={true}
              name="additional"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.additional}
              className=" rounded-md"
            >
              <option>service option</option>
              <option>service</option>
              <option>option</option>
              <option>service option</option>
            </Select>

            {errors.additional && touched.additional ? (
              <p className="text-sm font-bold text-red-400">
                {errors.additional}
              </p>
            ) : null}
          </div>

          <div className="col-span-2">
            <div className="mb-2  block">
              <label className="text-[#00538F] text-xl sm:text-2xl font-semibold">
                Offer Setting:
              </label>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              <div>
                <div className="sm:col-span-1 flex items-center justify-between border rounded-md py-2 px-4 border-[#E3E3E3]">
                  <p className="bg-[#ffff] text-[#979797] text-xl font-sm">
                    Request Requirements
                  </p>
                  <label class="relative inline-flex items-center cursor-pointer">
                    <input
                      checked={values.isChecked}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      type="checkbox"
                      name="isChecked"
                      value={values.isChecked}
                      className="sr-only peer "
                    />
                    <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                  </label>
                </div>
                {errors.isChecked && touched.isChecked ? (
                  <p className="mt-4 text-sm font-bold text-red-400">
                    {errors.isChecked}
                  </p>
                ) : null}
              </div>

              <div id="select" className="sm:col-span-1">
                <Select
                  required={true}
                  name="expiry"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.expiry}
                  className=" rounded-md"
                >
                  <option>expiry time (optional)</option>
                  <option>20</option>
                  <option>30</option>
                  <option>40</option>
                </Select>

                {errors.expiry && touched.expiry ? (
                  <p className="text-sm font-bold text-red-400">
                    {errors.expiry}
                  </p>
                ) : null}
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center sm:mt-4">
          <button
            type="submit"
            className=" bg-[#00538F] text-white w-[120px] sm:w-[160px] lg:w-[200px] px-6 py-3 font-bold rounded-md whitespace-nowrap"
          >
            Send Offer
          </button>
        </div>
      </form>
    </div>
  );
};

export default SeCreateOfferForm;
