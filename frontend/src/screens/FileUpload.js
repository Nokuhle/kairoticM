import React, { useState } from "react";
import { FaFolderOpen } from "react-icons/fa6";
import "../assets/fileUpload.css";
import MyDropzone from "../components/dragAndDrop";

export default function FileUploadScreen() {
  const [iconUrl, setIconUrl] = useState(null);
  const [file, setFile] = useState({});

  // const handleFileUpload = (e) => {
  //   const file = e.target.files[0];
  //   const reader = new FileReader();

  //   reader.onload = () => {
  //     setIconUrl(reader.result);
  //   };

  //   reader.readAsDataURL(file);
  // };

  const handleUpload = (event) => {
    setFile(event.target.files[0]);
    file.data = event.target.files[0];
    console.log(file);
  };

  const handleSubmit = () => {
    const formData = new FormData();
    formData.append('file', file)
    fetch(
      // file desitnation path
      'localhost:3000', 
      {
        method: 'POST',
        body: formData
      }
    ).then((response) => response.json()
    .then(
      (result) => {
        console.log('success', result);
      }
    ))
    .catch(error => {
      console.error("Error", error);
    })
  };

  return (
    <div className="containerOne">
      <h4 className="text-success">Uploading Document</h4>
      <form>
        <div
          className="w-100 container border border-3 border-dark-subtle d-flex flex-column align-items-center"
          style={{ borderStyle: "dashed" }}
        >
          {/* Drag and drop */}
          <div className="my-2">
            <MyDropzone />
          </div>
          <p className="fw-bold">OR</p>
          {/* File upload */}
          <div className="w-25">
            <div>
              <label
                htmlFor="file-upload"
                className="cursor-pointer"
                id="fileUpload"
              >
                <FaFolderOpen size={50} color="brown" className="mx-4" />
                <p className="block text-gray-400 font-normal">
                  {
                    !file.data ? "Browse Your Files" : file.data.name.toString()
                  }
                </p>
              </label>
            </div>
            <input
              id="file-upload"
              type="file"
              className="h-full w-full opacity-0 border"
              name="file"
              onChange={handleUpload}
            />
          </div>
        </div>
      </form>
    </div>
  );
}
