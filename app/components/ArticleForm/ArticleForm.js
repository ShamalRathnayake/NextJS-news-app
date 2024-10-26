import React from "react";
import {
  Button,
  Input,
  Select,
  Option,
  Typography,
} from "@material-tailwind/react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import TextEditor from "../TextEditor/TextEditor";
const categories = [
  "Technology",
  "Health",
  "Sports",
  "Politics",
  "Entertainment",
];

const validationSchema = Yup.object({
  title: Yup.string().required("Title is required"),
  imageUrl: Yup.string()
    .url("Enter a valid URL")
    .required("Image URL is required"),
  category: Yup.string().required("Please select a category"),
});

const ArticleForm = ({ article, onSubmit }) => {
  return (
    <>
      <Formik
        initialValues={{
          title: article?.title || "",
          imageUrl: article?.imageUrl || "",
          category: article?.category || categories[0],
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          // Assuming the TextEditor component has a method to get content
          const bodyContent = values.body; // You'll need to adjust this to match how you handle the editor content
          onSubmit({ ...values, body: bodyContent });
        }}
      >
        {({ values, setFieldValue }) => (
          <Form className="space-y-6 p-6 bg-white rounded-md  max-w-2xl mx-auto">
            {/* Title Field */}
            <div>
              <Field name="title">
                {({ field }) => (
                  <Input
                    {...field}
                    label="Title"
                    className="w-full"
                    value={field.value}
                    onChange={(e) => setFieldValue("title", e.target.value)}
                  />
                )}
              </Field>
              <ErrorMessage
                name="title"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>

            {/* Image URL Field */}
            <div>
              <Field name="imageUrl">
                {({ field }) => (
                  <Input
                    {...field}
                    label="Image URL"
                    className="w-full"
                    value={field.value}
                    onChange={(e) => setFieldValue("imageUrl", e.target.value)}
                  />
                )}
              </Field>
              <ErrorMessage
                name="imageUrl"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>

            {/* Category Dropdown */}
            <div>
              <Field name="category">
                {({ field }) => (
                  <Select
                    label="Category"
                    value={field.value}
                    onChange={(value) => setFieldValue("category", value)}
                  >
                    {categories.map((cat) => (
                      <Option key={cat} value={cat}>
                        {cat}
                      </Option>
                    ))}
                  </Select>
                )}
              </Field>
              <ErrorMessage
                name="category"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>
          </Form>
        )}
      </Formik>

      {/* TipTap News Body Editor */}
      <div className="p-6">
        <Typography variant="small" className="font-semibold mb-2">
          News Body
        </Typography>
        <div className="">
          <TextEditor onChange={(body) => setFieldValue("body", body)} />{" "}
          {/* Add onChange prop */}
        </div>
      </div>

      {/* Submit Button */}
      <div className="flex justify-end mt-4 px-6">
        <Button type="submit" color="blue">
          {article ? "Update Article" : "Create Article"}
        </Button>
      </div>
    </>
  );
};

export default ArticleForm;
