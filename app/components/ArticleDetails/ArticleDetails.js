"use client";

import DOMPurify from "dompurify";
import Image from "next/image";
import React from "react";

const ArticleDetails = ({ news, onClose }) => {
  return (
    <div className="bg-white rounded-lg py-6 px-3 max-w-4xl mx-auto max-h-full">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">{news.title}</h1>
      <div className="flex items-center mb-6">
        <Image
          src={news.author.profileImageUrl}
          alt={news.author.username}
          className="w-12 h-12 rounded-full mr-3"
          width={500}
          height={500}
        />
        <div className="text-sm text-gray-500">
          <p className="font-medium text-gray-800 break-words">
            {news.author.username}
          </p>
          <p>{new Date(news.createdAt).toLocaleDateString()}</p>
        </div>
      </div>

      <Image
        src={news.imageUrl}
        alt={news.title}
        className="w-max mx-auto h-max object-cover rounded-lg mb-6 pb-4"
        width={500}
        height={500}
      />
      <p className="text-lg text-gray-700 break-words max-h-96  prose ">
        <span
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(news.newsBody),
          }}
        ></span>
      </p>
    </div>
  );
};

export default ArticleDetails;
