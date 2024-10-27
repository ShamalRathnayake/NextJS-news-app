"use client";

import React, { useState } from "react";
import {
  Button,
  Typography,
  Tabs,
  TabsHeader,
  Tab,
} from "@material-tailwind/react";
import {
  ArrowSmallDownIcon,
  BuildingLibraryIcon,
  LockClosedIcon,
  PlusIcon,
} from "@heroicons/react/24/solid";
import ArticleCard from "../ArticleCard/ArticleCard";
import Modal from "../Modal/Modal";
import ArticleForm from "../ArticleForm/ArticleForm";
import { useAuthContext } from "../Context/AuthProvider";
import Link from "next/link";
import { useArticles } from "../Context/NewsContext";
import ArticleDetails from "../ArticleDetails/ArticleDetails";

export const ViewArticles = ({ isLandingPage }) => {
  const { user, loading } = useAuthContext();
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [isConfirmationOpen, setConfirmationOpen] = useState(false);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [viewingArticle, setViewingArticle] = useState(null);

  const {
    articles,
    loading: articlesLoading,
    error,
    addArticle,
    updateArticle,
    deleteArticle,
    setPage,
    fetchArticles,
    loadNextPage,
  } = useArticles();

  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => {
    setSelectedArticle(null);
    setModalOpen(false);
  };

  const handleArticleSubmit = async (newArticle) => {
    console.log("New Article Created: ", newArticle);
    await addArticle(newArticle);
    handleCloseModal();
  };

  const handleArticleEdit = (article) => {
    setSelectedArticle(article);
    handleOpenModal();
  };

  const handleArticleDelete = (article) => {
    setSelectedArticle(article);
    setConfirmationOpen(true);
  };

  const handleArticleDeleteSubmit = async () => {
    await deleteArticle(selectedArticle._id);
    handleCloseConfirmation();
  };

  const handleCloseConfirmation = () => {
    setSelectedArticle(null);
    setConfirmationOpen(false);
  };

  const handleOpenView = (article) => {
    setViewingArticle(article);
    setIsViewModalOpen(true);
  };

  const handleCloseView = () => {
    setViewingArticle(null);
    setIsViewModalOpen(false);
  };

  return (
    <>
      <div className="w-full flex flex-row items-center justify-between text-black">
        <Typography variant="h4" className="mb-5 text-black">
          Trending News
        </Typography>
        {!loading && !user && isLandingPage && (
          <Link
            href="/login"
            className="flex items-center bg-blue-600 text-white hover:bg-blue-700 rounded-lg p-3 transition duration-300 shadow-md"
          >
            <LockClosedIcon className="h-5 w-5 mr-2" />
            <span className="font-semibold">Login</span>
          </Link>
        )}
        {!loading && user && isLandingPage && (
          <Link
            href="/dashboard"
            className="flex items-center bg-blue-600 text-white hover:bg-blue-700 rounded-lg p-3 transition duration-300 shadow-md"
          >
            <BuildingLibraryIcon className="h-5 w-5 mr-2" />
            <span className="font-semibold">Dashboard</span>
          </Link>
        )}
      </div>

      <section className="grid min-h-screen place-items-center p-8">
        <div className="container my-auto grid grid-cols-1 gap-x-8 gap-y-16 items-start lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
          {articles &&
            !articlesLoading &&
            articles.map((article) => (
              <ArticleCard
                key={article._id}
                img={article.imageUrl}
                tag={article.category}
                title={article.title}
                desc={article.newsBody}
                date={article.createdAt}
                author={{
                  img: article.author.profileImageUrl,
                  name: article.author.username,
                }}
                onEdit={() => handleArticleEdit(article)}
                onDelete={() => handleArticleDelete(article)}
                onTextClick={() => handleOpenView(article)}
                hideButtons={isLandingPage}
              />
            ))}
        </div>
        <Button
          variant="text"
          size="lg"
          color="gray"
          className="flex items-center gap-2 mt-24"
          onClick={loadNextPage}
        >
          <ArrowSmallDownIcon className="h-5 w-5 font-bold text-gray-900" />
          VIEW MORE
        </Button>

        {!loading && user && !isLandingPage && (
          <div
            onClick={handleOpenModal}
            className="fixed bottom-6 right-6 z-50 bg-blue-500 text-white rounded-full p-4 shadow-lg hover:shadow-2xl cursor-pointer transition-transform transform hover:scale-105"
          >
            <PlusIcon className="h-6 w-6" />
          </div>
        )}
      </section>

      <Modal
        open={isModalOpen}
        onClose={handleCloseModal}
        title={selectedArticle ? "Edit Article" : "Create Article"}
      >
        <ArticleForm onSubmit={handleArticleSubmit} article={selectedArticle} />
      </Modal>

      <Modal
        open={isConfirmationOpen}
        onClose={handleCloseConfirmation}
        title="Confirm Deletion"
      >
        <Typography>
          Are you sure you want to{" "}
          <span className="text-black font-bold">delete</span> the article
          titled{" "}
          <strong className="font-bold text-black">
            {selectedArticle?.title}
          </strong>
          ?
        </Typography>
        <div className="flex justify-end mt-4">
          <Button
            variant="outlined"
            color="gray"
            onClick={handleCloseConfirmation}
          >
            Cancel
          </Button>
          <Button
            variant="filled"
            color="red"
            className="ml-2"
            onClick={handleArticleDeleteSubmit}
          >
            Delete
          </Button>
        </div>
      </Modal>

      <Modal
        open={isViewModalOpen}
        onClose={handleCloseView}
        title={"View News"}
        isWide={true}
      >
        <ArticleDetails news={viewingArticle} onClose={handleCloseView} />
      </Modal>
    </>
  );
};

export default ViewArticles;
