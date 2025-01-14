"use client";

import React, { useState } from "react";
import { addMovie } from "../../../services/movieService";
import { getAuthHeaders } from "../../../utils/auth";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";

/**
 * Removed `trailer` entirely from this interface.
 */
interface Movie {
  name: string;
  description: string;
  durationMinutes: number;
  rating?: number;
  price: number;
  genre: string;
  categoryId: string;
  director: string;
  cast: string[];
  isHero: boolean;
  thumbnailImage: File | string | null;
  heroImage: File | string | null;
  releaseDate: string;
}

const AddMovies = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  /**
   * Removed `trailer` from our `useState` default.
   */
  const [formData, setFormData] = useState<Movie>({
    name: "",
    description: "",
    durationMinutes: 0,
    rating: 0,
    price: 0,
    genre: "",
    categoryId: "",
    director: "",
    cast: [],
    isHero: false,
    thumbnailImage: null,
    heroImage: null,
    releaseDate: ""
  });

  const [castInput, setCastInput] = useState("");

  // Handle text/checkbox/select changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;

    if (type === "checkbox") {
      // For checkbox inputs
      const checkbox = e.target as HTMLInputElement;
      setFormData({ ...formData, [name]: checkbox.checked });
      return;
    }

    if (name === "price" || name === "rating" || name === "durationMinutes") {
      // Numeric fields
      setFormData({ ...formData, [name]: parseFloat(value) || 0 });
      return;
    }

    // Otherwise, treat as string
    setFormData({ ...formData, [name]: value });
  };

  // Handle file input changes (for thumbnail / hero)
  const handleFileChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    key: "thumbnailImage" | "heroImage"
  ) => {
    const file = e.target.files?.[0] || null;
    setFormData({ ...formData, [key]: file });
  };

  // Add cast member
  const handleAddCast = () => {
    if (castInput.trim()) {
      setFormData((prev) => ({
        ...prev,
        cast: [...prev.cast, castInput.trim()]
      }));
      setCastInput("");
    }
  };

  // Remove cast member
  const handleRemoveCast = (indexToRemove: number) => {
    setFormData((prev) => ({
      ...prev,
      cast: prev.cast.filter((_, i) => i !== indexToRemove)
    }));
  };

  // This function fetches a presigned URL from our backend, then uploads the file to S3.
  const getPresignedUrl = async (file: File): Promise<string> => {
    try {
      console.log("Getting presigned URL for file:", file.name);

      // 1) Request the presigned URL from our backend
      const response = await fetch("http://localhost:8080/v1/s3/generate-presigned-url", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...getAuthHeaders()
        },
        body: JSON.stringify({
          fileName: file.name,
          contentType: file.type,
          domain: "Avatar" // Make sure this is what your backend expects
        })
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Presigned URL error:", errorData);
        throw new Error(errorData.message || "Failed to get presigned URL");
      }

      // 2) Parse the JSON the server returns
      const data = await response.json();
      console.log("Raw API Response:", JSON.stringify(data, null, 2));

      // 3) Directly extract presignedUrl and s3url
      const presignedUrl = data.presignedUrl;
      const fileUrl = data.s3url;

      if (!presignedUrl || !fileUrl) {
        console.error("Response data structure:", data);
        throw new Error("Missing presignedUrl or s3url in response");
      }

      // 4) Upload the file to S3 using the presigned URL
      console.log("Uploading file to presigned URL:", presignedUrl);
      const uploadResponse = await fetch(presignedUrl, {
        method: "PUT",
        body: file,
        headers: {
          "Content-Type": file.type
        }
      });

      if (!uploadResponse.ok) {
        throw new Error(`Failed to upload file: ${uploadResponse.statusText}`);
      }

      console.log("File uploaded successfully. File URL:", fileUrl);
      return fileUrl;
    } catch (error) {
      console.error("Error in getPresignedUrl:", error);
      throw error;
    }
  };

  // Handle SAVE button
  const handleSave = async () => {
    try {
      setIsLoading(true);

      let thumbnailUrl = "";
      let heroUrl = "";

      // If thumbnailImage is a File, upload it
      if (formData.thumbnailImage && typeof formData.thumbnailImage !== "string") {
        thumbnailUrl = await getPresignedUrl(formData.thumbnailImage);
        // Overwrite the thumbnailImage with the actual S3 URL
        setFormData((prev) => ({
          ...prev,
          thumbnailImage: thumbnailUrl
        }));
      }

      // If heroImage is a File, upload it
      if (formData.heroImage && typeof formData.heroImage !== "string") {
        heroUrl = await getPresignedUrl(formData.heroImage);
        // Overwrite the heroImage with the actual S3 URL
        setFormData((prev) => ({
          ...prev,
          heroImage: heroUrl
        }));
      }

      // Construct the movie data to pass to addMovie()
      // Because state updates are async, we rely on local thumbnailUrl/heroUrl
      // to ensure we have the correct final values
      const movieData = {
        ...formData,
        thumbnailImage:
          typeof formData.thumbnailImage === "string"
            ? formData.thumbnailImage
            : thumbnailUrl,
        heroImage:
          typeof formData.heroImage === "string"
            ? formData.heroImage
            : heroUrl
      };

      await addMovie(movieData);
      toast.success("Movie added successfully!");
      router.push("/movies");
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Failed to add movie");
    } finally {
      setIsLoading(false);
    }
  };

  // Handle CANCEL / form reset
  const handleCancel = () => {
    setFormData({
      name: "",
      description: "",
      durationMinutes: 0,
      rating: 0,
      price: 0,
      genre: "",
      categoryId: "",
      director: "",
      cast: [],
      isHero: false,
      thumbnailImage: null,
      heroImage: null,
      releaseDate: ""
    });
    setCastInput("");
    toast.success("Form reset!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-800 via-black to-black p-8 text-white">
      <h1 className="text-3xl font-bold mb-6 text-center">Add Movie</h1>

      <div className="bg-gray-800 rounded-lg shadow-lg p-6 max-w-4xl mx-auto">
        <form onSubmit={(e) => e.preventDefault()}>
          {/* Title/Name */}
          <div className="mb-4">
            <label className="block text-sm mb-1">Movie Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 rounded-md bg-gray-700 border border-gray-600 focus:outline-none focus:border-purple-500"
            />
          </div>

          {/* Description */}
          <div className="mb-4">
            <label className="block text-sm mb-1">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows={4}
              className="w-full p-2 rounded-md bg-gray-700 border border-gray-600 focus:outline-none focus:border-purple-500"
            />
          </div>

          {/* Duration, Rating, Price, Genre */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
            <div>
              <label className="block text-sm mb-1">Duration (minutes)</label>
              <input
                type="number"
                name="durationMinutes"
                value={formData.durationMinutes}
                onChange={handleChange}
                min="0"
                className="w-full p-2 rounded-md bg-gray-700 border border-gray-600 focus:outline-none focus:border-purple-500"
              />
            </div>
            <div>
              <label className="block text-sm mb-1">Rating</label>
              <input
                type="number"
                name="rating"
                value={formData.rating}
                onChange={handleChange}
                step="0.1"
                min="0"
                max="10"
                className="w-full p-2 rounded-md bg-gray-700 border border-gray-600 focus:outline-none focus:border-purple-500"
              />
            </div>
            <div>
              <label className="block text-sm mb-1">Price</label>
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                step="0.01"
                min="0"
                className="w-full p-2 rounded-md bg-gray-700 border border-gray-600 focus:outline-none focus:border-purple-500"
              />
            </div>
            <div>
              <label className="block text-sm mb-1">Genre</label>
              <select
                name="genre"
                value={formData.genre}
                onChange={handleChange}
                className="w-full p-2 rounded-md bg-gray-700 border border-gray-600 focus:outline-none focus:border-purple-500"
              >
                <option value="" disabled>Select a genre</option>
                <option value="Action">Action</option>
                <option value="Comedy">Comedy</option>
                <option value="Drama">Drama</option>
                <option value="Sci-Fi">Sci-Fi</option>
                <option value="Horror">Horror</option>
                <option value="Romance">Romance</option>
                <option value="Thriller">Thriller</option>
              </select>
            </div>
          </div>

          {/* Director and Category ID */}
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm mb-1">Director</label>
              <input
                type="text"
                name="director"
                value={formData.director}
                onChange={handleChange}
                className="w-full p-2 rounded-md bg-gray-700 border border-gray-600 focus:outline-none focus:border-purple-500"
              />
            </div>
            <div>
              <label className="block text-sm mb-1">Category ID</label>
              <input
                type="text"
                name="categoryId"
                value={formData.categoryId}
                onChange={handleChange}
                className="w-full p-2 rounded-md bg-gray-700 border border-gray-600 focus:outline-none focus:border-purple-500"
              />
            </div>
          </div>

          {/* Cast Members */}
          <div className="mb-4">
            <label className="block text-sm mb-1">Cast Members</label>
            <div className="flex gap-2 mb-2">
              <input
                type="text"
                value={castInput}
                onChange={(e) => setCastInput(e.target.value)}
                className="flex-1 p-2 rounded-md bg-gray-700 border border-gray-600 focus:outline-none focus:border-purple-500"
                placeholder="Enter cast member name"
              />
              <button
                type="button"
                onClick={handleAddCast}
                className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700"
              >
                Add
              </button>
            </div>
            <div className="flex flex-wrap gap-2">
              {formData.cast.map((member, index) => (
                <span
                  key={index}
                  className="bg-purple-600 text-white px-3 py-1 rounded-full flex items-center gap-2"
                >
                  {member}
                  <button
                    type="button"
                    onClick={() => handleRemoveCast(index)}
                    className="text-white hover:text-red-300"
                  >
                    ×
                  </button>
                </span>
              ))}
            </div>
          </div>

          {/* Is Hero Movie */}
          <div className="mb-4">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                name="isHero"
                checked={formData.isHero}
                onChange={handleChange}
                className="w-4 h-4 rounded"
              />
              <span className="text-sm">Feature as Hero Movie</span>
            </label>
          </div>

          {/* Release Date */}
          <div className="mb-4">
            <label className="block text-sm mb-1">Release Date</label>
            <input
              type="date"
              name="releaseDate"
              value={formData.releaseDate.split("T")[0]}
              onChange={handleChange}
              className="w-full p-2 rounded-md bg-gray-700 border border-gray-600 focus:outline-none focus:border-purple-500"
            />
          </div>

          {/* Thumbnail and Hero Banner */}
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm mb-1">Thumbnail Image</label>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => handleFileChange(e, "thumbnailImage")}
                className="w-full p-2 rounded-md bg-gray-700 border border-gray-600 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm mb-1">Hero Image</label>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => handleFileChange(e, "heroImage")}
                className="w-full p-2 rounded-md bg-gray-700 border border-gray-600 focus:outline-none"
              />
            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-4 mt-6">
            <button
              type="button"
              onClick={handleSave}
              disabled={isLoading}
              className={`px-6 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 text-sm ${
                isLoading ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {isLoading ? "Saving..." : "SAVE"}
            </button>
            <button
              type="button"
              onClick={handleCancel}
              disabled={isLoading}
              className="px-6 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 text-sm"
            >
              CANCEL
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddMovies;
