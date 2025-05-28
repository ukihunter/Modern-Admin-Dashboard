"use client";
import styles from "../../../ui/dashboard/produts/addprodut/addproduts.module.css";
import React from "react";

const Addprodutpage = () => {
  const [imagePreview, setImagePreview] = React.useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className={styles.container}>
      <form action="" className={styles.form}>
        <input type="text" placeholder="title" name="title" required />
        <select name="cat" id="cat">
          <option value="genaral">Choose the catogory</option>
          <option value="mobile">Mobiel</option>
          <option value="accesories">Accesories</option>
          <option value="computer">Computers</option>
        </select>
        <input type="number" placeholder="price" name="price" required />
        <input type="number" placeholder="stock" name="stock" required />
        <input type="text" placeholder="color" name="color" />
        <input type="text" placeholder="size" name="size" />
        <textarea
          name="desc"
          id="desc"
          rows={15}
          placeholder="discription"
        ></textarea>
        <div className={styles.imageborder}>
          <input
            className={styles.imageInput}
            type="file"
            name="image"
            id="image"
            required
            onChange={handleImageChange}
          />
          <label htmlFor="image" className={styles.customFileInput}>
            Choose File
          </label>
          {imagePreview && (
            <div className={styles.imagePreviewContainer}>
              <span>Image Preview</span>
              <img
                src={imagePreview}
                alt="Preview"
                className={styles.imagePreview}
              />
            </div>
          )}
        </div>
        <button type="submit">Add produts</button>
      </form>
    </div>
  );
};

export default Addprodutpage;
