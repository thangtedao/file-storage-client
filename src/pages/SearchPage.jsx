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

const SearchPage = () => {
  const [fileShare, setFileShare] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const files = [
    {
      id: 1,
      fileName: "Tai lieu Tieng Anh",
      fileSize: 100,
      owner: "thang",
      fileType: "pdf",
    },
    {
      id: 2,
      fileName: "Tai lieu Tieng Anh",
      fileSize: 100,
      owner: "nam",
      fileType: "pdf",
    },
    {
      id: 3,
      fileName: "Tai lieu Tieng Anh",
      fileSize: 100,
      owner: "cuong",
      fileType: "pdf",
    },
    {
      id: 4,
      fileName: "Tai lieu Tieng Anh",
      fileSize: 100,
      owner: "vy",
      fileType: "pdf",
    },
    {
      id: 5,
      fileName: "Tai lieu Tieng Anh",
      fileSize: 100,
      owner: "bi",
      fileType: "pdf",
    },
    {
      id: 6,
      fileName: "Tai lieu Tieng Anh",
      fileSize: 100,
      owner: "tan",
      fileType: "pdf",
    },
    {
      id: 7,
      fileName: "Tai lieu Tieng Anh",
      fileSize: 100,
      owner: "thang",
      fileType: "pdf",
    },
    {
      id: 8,
      fileName: "Tai lieu Tieng Anh",
      fileSize: 100,
      owner: "nam",
      fileType: "pdf",
    },
    {
      id: 9,
      fileName: "Tai lieu Tieng Anh",
      fileSize: 100,
      owner: "cuong",
      fileType: "pdf",
    },
    {
      id: 10,
      fileName: "Tai lieu Tieng Anh",
      fileSize: 100,
      owner: "vy",
      fileType: "pdf",
    },
    {
      id: 11,
      fileName: "Tai lieu Tieng Anh",
      fileSize: 100,
      owner: "bi",
      fileType: "pdf",
    },
    {
      id: 12,
      fileName: "Tai lieu Tieng Anh",
      fileSize: 100,
      owner: "tan",
      fileType: "pdf",
    },
  ];

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
        console.log("Download" + file.owner);
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
        console.log("Delete" + file.owner);
      },
    },
    {
      label: (
        <div className="flex items-center gap-2">
          <HiTrash /> Nothing
        </div>
      ),
      onClick: () => {
        console.log("Chúng ta không thuộc về nhau");
      },
    },
  ];

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
      render: (file) => file.fileSize + " MB",
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
    <div className="flex flex-col">
      <p className="font-normal text-2xl mb-6">Search Results</p>
      <Panel className="border-none rounded-lg p-3">
        <Table data={files} config={config} keyFn={keyFn} />
      </Panel>
      {showModal && (
        <FileShareModal onClose={handleCloseModal} fileShare={fileShare} />
      )}
    </div>
  );
};

export default SearchPage;
