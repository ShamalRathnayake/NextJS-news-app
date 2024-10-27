"use client";
import React, { useState } from "react";
import Image from "next/image";
import {
  Typography,
  Card,
  CardHeader,
  CardBody,
  Avatar,
  Button,
} from "@material-tailwind/react";
import { useAuthContext } from "../Context/AuthProvider";
import DOMPurify from "dompurify";

export const ArticleCard = ({
  img,
  tag,
  title,
  desc,
  author,
  date,
  onEdit,
  onDelete,
  hideButtons,
  onTextClick,
}) => {
  const { user, loading } = useAuthContext();

  const [isHovered, setIsHovered] = useState(false);

  const truncateText = (inputText, maxLength = 70) => {
    if (inputText.length <= maxLength) {
      return inputText;
    }
    const truncatedText = inputText.slice(0, maxLength);
    const lastSpaceIndex = truncatedText.lastIndexOf(" ");

    return lastSpaceIndex > -1
      ? truncatedText.slice(0, lastSpaceIndex) + "..."
      : truncatedText + "...";
  };

  return (
    <Card
      shadow={true}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="h-[500px] flex flex-col justify-around"
    >
      <CardHeader className="cursor-pointer" onClick={onTextClick}>
        <Image
          width={768}
          height={768}
          src={img}
          alt={title}
          className="h-full w-full scale-110 object-cover"
        />
      </CardHeader>
      <CardBody className="p-6">
        <div className="cursor-pointer" onClick={onTextClick}>
          <Typography
            variant="small"
            color="blue"
            className="mb-2 !font-medium"
          >
            {tag}
          </Typography>
          <Typography
            as="a"
            href="#"
            variant="h5"
            color="blue-gray"
            className="mb-2 normal-case transition-colors hover:text-gray-900"
          >
            {truncateText(title, 40)}
          </Typography>
          <Typography className="mb-6 font-normal !text-gray-500  h-12 overflow-hidden">
            <span
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(desc),
              }}
            ></span>
          </Typography>
        </div>

        <div className="flex items-center justify-between gap-4 md:flex-col sm:flex-row lg:flex-row">
          <div className="flex items-center">
            <Avatar
              size="sm"
              variant="circular"
              src={author.img}
              alt={author.name}
            />
            <div className="ml-2">
              <Typography
                variant="small"
                color="blue-gray"
                className="mb-0.5 !font-medium"
              >
                {author.name}
              </Typography>
              <Typography
                variant="small"
                color="gray"
                className="text-xs !text-gray-500 font-normal"
              >
                {new Date(date).toLocaleDateString()}
              </Typography>
            </div>
          </div>
          {isHovered && !loading && user && !hideButtons && (
            <div className="flex items-center space-x-2">
              <Button
                size="sm"
                variant="filled"
                color="blue"
                className="w-10 h-10 p-0 rounded-full hover:bg-blue-600 flex items-center justify-center"
                title="Edit"
                onClick={onEdit}
              >
                <i className="fas fa-edit text-white"></i>
              </Button>
              <Button
                size="sm"
                variant="filled"
                color="red"
                className="w-10 h-10 p-0 rounded-full hover:bg-red-600 flex items-center justify-center"
                title="Delete"
                onClick={onDelete}
              >
                <i className="fas fa-trash text-white"></i>
              </Button>
            </div>
          )}
        </div>
      </CardBody>
    </Card>
  );
};

export default ArticleCard;
