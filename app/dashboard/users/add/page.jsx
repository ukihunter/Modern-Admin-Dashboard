"use client";
import styles from "../../../ui/dashboard/users/adduser/adduser.module.css";
import React from "react";

const Adduserpage = () => {
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
        <input type="text" placeholder="Name" name="Name" required />

        <input type="email" placeholder="email" name="email" required />
        <input
          type="password"
          placeholder="Password"
          name="password"
          required
        />
        <input type="phone" placeholder="Phone number" name="phone" />
        <select name="isadmin" id="admin" defaultValue={false}>
          <option value={false}>is admin</option>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>
        <select name="isstatus" id="status" defaultValue={false}>
          <option value={true}>is Active</option>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>
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
        <button type="submit">Add User</button>
      </form>
    </div>
  );
};

export default Adduserpage;
