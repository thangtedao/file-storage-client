import React, { useState } from "react";
import Panel from "../components/Panel";
import Table from "../components/Table";
import Button from "../components/Button";
import Modal from "../components/Modal";
import {
  emptyTrash,
  getDeletedFiles,
  permanentDeleteFile,
  restoreFile,
} from "../services/fileService";
import { useLoaderData } from "react-router-dom";

export const loader = async () => {
  try {
    const data = await getDeletedFiles();
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

const TrashPage = () => {
  const data = useLoaderData();

  const [files, setFiles] = useState(data || []);
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => {
    setShowModal(false);
  };

  const handleOpen = () => {
    setShowModal(true);
  };

  const handleDelete = () => {
    console.log("Deleted");
  };

  const handleRestore = async (id) => {
    try {
      await restoreFile(id);
      setFiles((prev) => prev.filter((value) => value.id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  const handlePermanentDelete = async (id) => {
    try {
      await permanentDeleteFile(id);
      setFiles((prev) => prev.filter((value) => value.id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  const handleEmptyTrash = async () => {
    try {
      await emptyTrash();
      setFiles([]);
    } catch (error) {
      console.log(error);
    }
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
      render: (file) => file.originalFileName,
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
