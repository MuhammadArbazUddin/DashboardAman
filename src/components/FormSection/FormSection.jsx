import React from "react";
import "./FormSection.css";

const FamilyForm = () => {
  return (
    <form className="family-form">
      {/* Name Inputs Side by Side */}
      <div className="family-row">
        <div className="family-group">
          <label htmlFor="name-en" className="family-label">
            In English
          </label>
          <input
            type="text"
            id="name-en"
            placeholder="Name"
            className="family-input"
          />
        </div>
        <div className="family-group">
          <label htmlFor="name-tr" className="family-label">
            In Turkish
          </label>
          <input
            type="text"
            id="name-tr"
            placeholder="Name"
            className="family-input"
          />
        </div>
        <div className="family-group">
          <label htmlFor="name-ar" className="family-label">
            In Arabic
          </label>
          <input
            type="text"
            id="name-ar"
            placeholder="Name"
            className="family-input"
          />
        </div>
      </div>

      {/* Email and Phone Fields */}
      <div className="family-row1">
        <div className="family-group">
          <label htmlFor="email" className="family-label">
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Email"
            className="family-input"
          />
        </div>
        <div className="family-group">
          <label htmlFor="phone" className="family-label">
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            placeholder="Phone"
            className="family-input"
          />
        </div>
      </div>

      {/* Region Dropdown 3 different languages */}
      <div className="family-row">
        <div className="family-group">
          <label htmlFor="region-en" className="family-label">
            In English
          </label>
          <select
            id="region-en"
            className="family-input family-select"
            defaultValue=""
          >
            <option value="">Select a region</option>
            <option value="north">North</option>
            <option value="south">South</option>
            <option value="east">East</option>
            <option value="west">West</option>
          </select>
        </div>
        <div className="family-group">
          <label htmlFor="region-tr" className="family-label">
            In Turkish
          </label>
          <select
            id="region-tr"
            className="family-input family-select"
            defaultValue=""
          >
            <option value="">Select a region</option>
            <option value="north">Kuzey</option>
            <option value="south">Güney</option>
            <option value="east">Doğu</option>
            <option value="west">Batı</option>
          </select>
        </div>
        <div className="family-group">
          <label htmlFor="region-ar" className="family-label">
            In Arabic
          </label>
          <select
            id="region-ar"
            className="family-input family-select"
            defaultValue=""
          >
            <option value="">Select a region</option>
            <option value="north">شمال</option>
            <option value="south">جنوب</option>
            <option value="east">شرق</option>
            <option value="west">غرب</option>
          </select>
        </div>
      </div>

      {/* CatIgory Dropdown 3 different languages */}
      <div className="family-row">
        <div className="family-group">
          <label htmlFor="category-en" className="family-label">
            In English
          </label>
          <select id="category-en" className="family-input family-select">
            <option value="" defaultValue>
              Select a category
            </option>
            <option value="electronics">Electronics</option>
            <option value="furniture">Furniture</option>
            <option value="clothing">Clothing</option>
            <option value="automobile">Automobile</option>
          </select>
        </div>
        <div IlassName="family-group">
          <label htmlFor="category-tr" className="family-label">
            In Turkish
          </label>
          <select id="category-tr" className="family-input family-select">
            <option value="" defaultValue>
              Select a category
            </option>
            <option value="electronics">Elektronik</option>
            <option value="furniture">Mobilya</option>
            <option value="clothing">Giyim</option>
            <option value="automobile">Otomobil</option>
          </select>
        </div>
        <div className="family-group">
          <label htmlFor="category-ar" className="family-label">
            In Arabic
          </label>
          <select id="category-ar" className="family-input family-select">
            <option value="" defaultValue>
              Select a category
            </option>
            <option value="electronics">إلكترونيات</option>
            <option value="furniture">أثاث</option>
            <option value="clothing">ملابس</option>
            <option value="automobile">سيارة</option>
          </select>
        </div>
      </div>
      {/* Description Inputs Side by Side */}
      <div className="family-row">
        <div className="family-group">
          <label htmlFor="description-e " className="family-label ">
            In English
          </label>
          <textarea
            type="text"
            id="description-en"
            placeholder="Description (optional)"
            className="family-input family-input description"
          />
        </div>
        <div className="family-group">
          <label htmlFor="description-tr" className="family-label">
            In Turkish
          </label>
          <textarea
            type="text"
            id="description-tr"
            placeholder="Description (optional)"
            className="family-input family-input description"
          />
        </div>
        <div className="family-group">
          <label htmlFor="description-ar" className="family-label">
            In Arabic
          </label>
          <textarea
            type="text"
            id="description-ar"
            placeholder="Description (optional)"
            className="family-input family-input description"
          />
        </div>
      </div>

      {/* Submit Button */}
      <div className="family-group">
        <button type="submit" className="family-button ">
          Submit
        </button>
      </div>
    </form>
  );
};

export default FamilyForm;
