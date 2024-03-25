import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Article: React.FC = () => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [picture, setPicture] = useState<File | null>(null);
  const navigate = useNavigate();
  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setDescription(e.target.value);
  };

  const handlePictureChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setPicture(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Ketika pengguna membuat postingan artikel
    const loggedInUser = localStorage.getItem("username");

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("picture", picture as Blob);
    formData.append("username", loggedInUser !== null ? loggedInUser : "");

    try {
      // Kirim permintaan POST ke backend
      const response = await fetch("http://localhost:5000/api/v1/articles", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        console.log("Artikel berhasil dibuat");
        navigate("/dashboard");
        setTitle("");
        setDescription("");
        setPicture(null);
      } else {
        console.error("Gagal membuat artikel");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Form</h1>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title" className="block text-gray-700 font-bold mb-2">
            Title:
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={handleTitleChange}
            className="w-full border rounded px-3 py-2 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter title"
            required
          />
        </div>
        <div>
          <label
            htmlFor="description"
            className="block text-gray-700 font-bold mb-2"
          >
            Description:
          </label>
          <textarea
            id="description"
            value={description}
            onChange={handleDescriptionChange}
            className="w-full border rounded px-3 py-2 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter description"
            required
          ></textarea>
        </div>
        <div>
          <label
            htmlFor="picture"
            className="block text-gray-700 font-bold mb-2"
          >
            Picture:
          </label>
          <input
            type="file"
            id="picture"
            name="picture"
            accept="image/*"
            onChange={handlePictureChange}
            className="w-full border rounded px-3 py-2 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        {picture && (
          <div>
            <img
              src={URL.createObjectURL(picture)}
              alt="Uploaded"
              className="w-full"
            />
          </div>
        )}

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Article;
