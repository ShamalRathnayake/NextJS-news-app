"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuthContext } from "../Context/AuthProvider";
import Modal from "../Modal/Modal";
import { Button, Typography } from "@material-tailwind/react";

export default function Sidebar() {
  const { logout } = useAuthContext();
  const [collapseShow, setCollapseShow] = useState("hidden");
  const router = useRouter();

  const [isConfirmationOpen, setConfirmationOpen] = useState(false);

  return (
    <>
      <nav className="md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-white flex flex-wrap items-center justify-between relative  z-10 py-4 px-8">
        <div className="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto">
          <button
            className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
            type="button"
            onClick={() => setCollapseShow("bg-white m-2 py-3 px-6")}
          >
            <i className="fas fa-bars"></i>
          </button>

          <Link
            href="/"
            className="md:block text-left md:pb-2 text-blue-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
          >
            News App
          </Link>

          <div
            className={`md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-col flex-1 rounded ${collapseShow}`}
          >
            <div className="md:min-w-full md:hidden block pb-4 mb-4 border-b border-solid border-blueGray-200">
              <div className="flex flex-wrap">
                <div className="w-6/12">
                  <Link
                    href="/"
                    className="md:block text-left md:pb-2 text-blue-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
                  >
                    News App
                  </Link>
                </div>
                <div className="w-6/12 flex justify-end">
                  <button
                    type="button"
                    className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
                    onClick={() => setCollapseShow("hidden")}
                  >
                    <i className="fas fa-times"></i>
                  </button>
                </div>
              </div>
            </div>

            <ul className="md:flex-col md:min-w-full flex flex-col list-none">
              <li className="items-center">
                <Link
                  href="dashboard"
                  className={`text-xs uppercase py-3 font-bold block ${
                    router.pathname === "/dashboard"
                      ? "text-blue-500 hover:text-lightBlue-600"
                      : "text-blue-500 hover:text-blue-500"
                  }`}
                >
                  <i
                    className={`fas fa-tv mr-2 text-sm ${
                      router.pathname === "/dashboard"
                        ? "opacity-75"
                        : "text-blueGray-300"
                    }`}
                  ></i>{" "}
                  Dashboard
                </Link>
              </li>

              {/* <li className="items-center">
                <Link
                  href="/admin/settings"
                  className={`text-xs uppercase py-3 font-bold block ${
                    router.pathname === "/admin/settings"
                      ? "text-lightBlue-500 hover:text-lightBlue-600"
                      : "text-blue-gray-700 hover:text-blue-500"
                  }`}
                >
                  <i
                    className={`fas fa-tools mr-2 text-sm ${
                      router.pathname === "/admin/settings"
                        ? "opacity-75"
                        : "text-blueGray-300"
                    }`}
                  ></i>{" "}
                  Admins
                </Link>
              </li> */}
            </ul>

            <hr className="my-4 md:min-w-full" />

            <ul className="md:flex-col md:min-w-full flex flex-col list-none md:mb-4 justify-end flex-1 ">
              <li className="inline-flex">
                <Link
                  href="/"
                  className="text-blue-gray-700 hover:text-blue-500 text-sm block mb-4 no-underline font-semibold"
                >
                  <i className="fas fa-house mr-2 text-blue-gray-700 text-base"></i>
                  Landing Page
                </Link>
              </li>

              <li className="inline-flex text-center">
                <Link
                  href=""
                  className="text-blue-gray-700 hover:text-blue-500 text-sm block mb-4 no-underline font-semibold"
                  onClick={() => setConfirmationOpen(true)}
                >
                  <i className="fas fa-lock mr-3 text-blue-gray-700 text-base"></i>
                  Log out
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Confirmation Modal */}
        <Modal
          open={isConfirmationOpen}
          onClose={() => setConfirmationOpen(false)}
          title="Confirm Logout"
        >
          <Typography>Are you sure you want to logout?</Typography>
          <div className="flex justify-end mt-4">
            <Button
              variant="outlined"
              color="gray"
              onClick={() => setConfirmationOpen(false)}
            >
              Cancel
            </Button>
            <Button
              variant="filled"
              color="red"
              className="ml-2"
              onClick={() => {
                setConfirmationOpen(false);
                logout();
              }}
            >
              Logout
            </Button>
          </div>
        </Modal>
      </nav>
    </>
  );
}
