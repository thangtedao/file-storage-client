import React, { useEffect, useState } from "react";
import { HiDownload } from "react-icons/hi";
import Panel from "../components/Panel";
import Table from "../components/Table";
import { useLoaderData } from "react-router-dom";
import { useRootContext } from "./Root";
import {
  downloadShareFile,
  getFilesShareWithMe,
} from "../services/fileService";
import { formatFileSize } from "../utils/formatFileSize";

export const loader = async () => {
  try {
    const data = await getFilesShareWithMe();
    return { data };
  } catch (error) {
    console.log(error);
  }
};

const FileSharePage = () => {
  const { user } = useRootContext();
  const { data } = useLoaderData();

  const [files, setFiles] = useState(data || []);
  const [isDownloading, setIsDownloading] = useState(false);

  useEffect(() => {
    const filterData = () => {
      setFiles((prev) => prev.filter((value) => value.owner !== user.email));
    };
    filterData();
  }, []);

  const handleDownload = async (token) => {
    setIsDownloading(true);
    try {
      const response = await downloadShareFile(token);

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

  const config = [
    {
      label: "Name",
      render: (file) => <div className="">{file.fileName}</div>,
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
        <HiDownload
          className="text-lg cursor-pointer"
          onClick={() => handleDownload(file.shareToken)}
        />
      ),
    },
  ];

  const keyFn = (file) => file.id;

  return (
    <div className="w-full h-full flex flex-col">
      <p className="font-normal text-2xl mb-6">Shared with me</p>
      {files.length > 0 ? (
        <Panel className="border-none rounded-lg p-3 overflow-visible">
          <Table data={files} config={config} keyFn={keyFn} />
        </Panel>
      ) : (
        <div className="w-full h-full flex justify-center items-center text-2xl  mb-30">
          Empty
        </div>
      )}
    </div>
  );
};

export default FileSharePage;
