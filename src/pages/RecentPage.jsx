import React from "react";
import Panel from "../components/Panel";
import Table from "../components/Table";

const RecentPage = () => {
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
  ];

  const config = [
    {
      label: "Name",
      render: (file) => file.fileName,
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
  ];

  const keyFn = (file) => file.id;

  return (
    <div className="flex flex-col">
      <p className="font-normal text-2xl mb-6">All Files</p>
      <Panel className="border-none rounded-lg">
        <Table data={files} config={config} keyFn={keyFn} />
      </Panel>
    </div>
  );
};

export default RecentPage;
