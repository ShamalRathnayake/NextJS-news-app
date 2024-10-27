"use client";

import React, { useState } from "react";
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
  body: Yup.string().required("News body is required"),
});

const ArticleForm = ({ article, onSubmit }) => {
  const [editorContent, setEditorContent] = useState(article?.newsBody || "");

  return (
    <Formik
      initialValues={{
        title: article?.title || "",
        imageUrl: article?.imageUrl || "",
        category: article?.category || categories[0],
        body: editorContent,
      }}
      validationSchema={validationSchema}
      onSubmit={({ title, category, imageUrl }) => {
        onSubmit({ title, category, imageUrl, newsBody: editorContent });
      }}
    >
      {({ values, setFieldValue, errors, touched }) => (
        <Form className="space-y-6 p-6 bg-white rounded-md max-w-2xl mx-auto">
          <div>
            <Field name="title">
              {({ field }) => (
                <Input {...field} label="Title" className="w-full" />
              )}
            </Field>
            <ErrorMessage
              name="title"
              component="div"
              className="text-red-500 text-sm"
            />
          </div>

          <div>
            <Field name="imageUrl">
              {({ field }) => (
                <Input {...field} label="Image URL" className="w-full" />
              )}
            </Field>
            <ErrorMessage
              name="imageUrl"
              component="div"
              className="text-red-500 text-sm"
            />
          </div>

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

          <div className="">
            <Typography variant="small" className="font-semibold mb-2">
              News Body
            </Typography>
            <TextEditor
              onChange={(body) => {
                setEditorContent(body);
                setFieldValue("body", body);
              }}
              editorContent={editorContent}
            />
            <ErrorMessage
              name="body"
              component="div"
              className="text-red-500 text-sm"
            />
          </div>

          <div className="flex justify-end mt-4 px-6">
            <Button
              type="submit"
              color="blue"
              disabled={
                !Object.keys(errors).length === 0 || !editorContent.trim()
              }
            >
              {article ? "Update Article" : "Create Article"}
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default ArticleForm;
