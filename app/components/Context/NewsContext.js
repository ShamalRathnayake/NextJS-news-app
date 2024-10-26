"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { useAuthContext } from "./AuthProvider";
import { toast } from "react-toastify";

const ArticlesContext = createContext();

export const ArticlesProvider = ({ children }) => {
  const { token } = useAuthContext();
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);

  const fetchArticles = async (pageNum = 1) => {
    setLoading(true);
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BE_URL}news?page=${pageNum}&limit=${
          9 * page
        }`
      );

      const data = await response.json();

      if (!response.ok)
        throw new Error(data.message || "Failed to fetch articles");

      setArticles(data.data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const loadNextPage = async () => {
    setPage(page + 1);
    await fetchArticles();
  };

  const addArticle = async (newArticle) => {
    try {
      const response = await fetch("/api/articles", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(newArticle),
      });

      const data = await response.json();

      if (!response.ok)
        throw new Error(data.message || "Failed to add article");
      await fetchArticles(page);
    } catch (err) {
      setError(err.message);
    }
  };

  const updateArticle = async (id, updatedArticle) => {
    try {
      const response = await fetch(`/api/articles/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(updatedArticle),
      });

      const data = await response.json();

      if (!response.ok)
        throw new Error(data.message || "Failed to update article");
      await fetchArticles(page);
    } catch (err) {
      setError(err.message);
    }
  };

  const deleteArticle = async (id) => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BE_URL}news/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = await response.json();

      if (!response.ok)
        throw new Error(data.message || "Failed to delete article");
      await fetchArticles(page);

      toast.success("Delete Successful");
    } catch (err) {
      setError(err.message);
      toast.error(err.message || "Delete Failed");
    }
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  return (
    <ArticlesContext.Provider
      value={{
        articles,
        loading,
        error,
        addArticle,
        updateArticle,
        deleteArticle,
        setPage,
        fetchArticles,
        loadNextPage,
      }}
    >
      {children}
    </ArticlesContext.Provider>
  );
};

export const useArticles = () => useContext(ArticlesContext);