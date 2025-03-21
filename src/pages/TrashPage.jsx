import React, { useState } from "react";
import Panel from "../components/Panel";
import Table from "../components/Table";
import Button from "../components/Button";
import Modal from "../components/Modal";

const TrashPage = () => {
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
  ];

  const handleClose = () => {
    setShowModal(false);
  };

  const handleOpen = () => {
    setShowModal(true);
  };

  const handleDelete = () => {
    console.log("Deleted");
  };

  const actionBar = (
    <div className="flex justify-between w-full">
      <Button danger rounded onClick={handleDelete}>
        OK
      </Button>
      <Button primary rounded onClick={handleClose}>
        Cancel
      </Button>
    </div>
  );

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
      <div className="flex justify-between">
        <div className="font-normal text-2xl mb-6">Trash</div>
        <Button primary rounded className="h-10" onClick={handleOpen}>
          Clear Trash
        </Button>
      </div>
      <Panel className="border-none rounded-lg p-3">
        <Table data={files} config={config} keyFn={keyFn} />
      </Panel>
      {showModal && (
        <Modal onClose={handleClose} actionBar={actionBar}>
          <div className="text-2xl font-bold">Are you sure ?</div>
        </Modal>
      )}
    </div>
  );
};

export default TrashPage;
