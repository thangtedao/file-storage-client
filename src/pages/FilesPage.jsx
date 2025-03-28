import React, { useState } from "react";
import Table from "../components/Table";
import Panel from "../components/Panel";
import {
  HiOutlineDotsHorizontal,
  HiDownload,
  HiShare,
  HiTrash,
} from "react-icons/hi";
import FileMenu from "../components/FileMenu";
import FileShareModal from "../components/FileShareModal";
import {
  deleteFile,
  downloadFile,
  getActiveFiles,
} from "../services/fileService";
import { useLoaderData, useNavigate, useRevalidator } from "react-router-dom";
import { saveAs } from "file-saver";
import { formatFileSize } from "../utils/formatFileSize";

export const loader = async () => {
  try {
    const data = await getActiveFiles();
    return { data };
  } catch (error) {
    console.log(error);
    return error;
  }
};

const FilesPage = () => {
  const { data } = useLoaderData();

  const [files, setFiles] = useState(data || []);
  const [fileShare, setFileShare] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = async (id) => {
    setIsDownloading(true);
    try {
      const response = await downloadFile(id);

      // Tạo Blob từ dữ liệu và download file
      const blob = new Blob([response.data]);

      // Lấy tên file từ header
      let downloadFileName = fileName;
      const contentDisposition = response.headers["content-disposition"];
      if (contentDisposition) {
        const fileNameMatch = contentDisposition.match(/filename="(.+)"/);
        if (fileNameMatch.length === 2) {
          downloadFileName = fileNameMatch[1];
        }
      }

      saveAs(blob, downloadFileName);
    } catch (error) {
      console.log(error);
    } finally {
      setIsDownloading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteFile(id);
      setFiles((prev) => prev.filter((value) => value.id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const menuOptions = [
    {
      label: (
        <div className="flex items-center gap-2">
          <HiDownload /> Download
        </div>
      ),
      onClick: (file) => {
        handleDownload(file.id);
      },
    },
    {
      label: (
        <div className="flex items-center gap-2">
          <HiShare /> Share
        </div>
      ),
      onClick: (file) => {
        setShowModal(true);
        setFileShare(file);
      },
    },
    {
      label: (
        <div className="flex items-center gap-2">
          <HiTrash /> Delete
        </div>
      ),
      onClick: (file) => {
        handleDelete(file.id);
      },
    },
  ];

  const config = [
    {
      label: "Name",
      render: (file) => (
        <div className="flex gap-2 items-center">
          {file.share && <HiShare />} {file.originalFileName}
        </div>
      ),
    },
    {
      label: "Owner",
      render: (file) => file.owner,
    },
    {
      label: "Type",
      render: (file) => file.fileType,
    },
    {
      label: "Size",
      render: (file) => formatFileSize(file.fileSize),
    },
    {
      label: "",
      render: (file) => (
        <FileMenu options={menuOptions} data={file}>
          <HiOutlineDotsHorizontal className="cursor-pointer" />
        </FileMenu>
      ),
    },
  ];

  const keyFn = (file) => file.id;

  return (
    <div className="w-full h-full flex flex-col">
      <p className="font-normal text-2xl mb-6">All Files</p>
      {files.length > 0 ? (
        <Panel className="border-none rounded-lg p-3 overflow-visible">
          <Table data={files} config={config} keyFn={keyFn} />
        </Panel>
      ) : (
        <div className="w-full h-full flex justify-center items-center text-2xl  mb-30">
          Empty
        </div>
      )}

      {showModal && (
        <FileShareModal onClose={handleCloseModal} file={fileShare} />
      )}
    </div>
  );
};

export default FilesPage;
