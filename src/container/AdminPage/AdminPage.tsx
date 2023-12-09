import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosApi from '../../axiosApi';

interface Props {}

const AdminPage: React.FC<Props> = () => {
  const [selectedPage, setSelectedPage] = useState<string>('');
  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');
  const [pages, setPages] = useState<string[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await axiosApi.get('pages.json');
        const pageData = response.data;
        const pageList: string[] = Object.keys(pageData);
        setPages(pageList);
      } catch (error) {
        console.error('Error list page', error);
      }
    };
    void fetch();
  }, []);

  const handlePageChange = async (pageName: string) => {
    try {
      const response = await axiosApi.get(`pages/${pageName}.json`);
      setTitle(response.data.title);
      setContent(response.data.content);
    } catch (error) {
      console.error('Error content page', error);
    }
  };

  const handleSave = async () => {
    try {
      if (!selectedPage) {
        console.error('No page select for edit');
        return;
      }

      await axiosApi.patch(`pages/${selectedPage}.json`, { title, content });
      navigate(`/pages/${selectedPage}`);
    } catch (error) {
      console.error('Error save content', error);
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Edit pages</h1>
      <div className="mb-3">
        <label htmlFor="pageSelect" className="form-label">Selected page</label>
        <select
          id="pageSelect"
          className="form-select"
          onChange={(e) => {
            void setSelectedPage(e.target.value);
            void handlePageChange(e.target.value);
          }}
          value={selectedPage}
        >
          <option value="">Selected page</option>
          {pages.map((page) => (
            <option key={page} value={page}>
              {page}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-3">
        <label htmlFor="titleInput" className="form-label">Title</label>
        <input
          type="text"
          id="titleInput"
          className="form-control"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="contentTextarea" className="form-label">Content</label>
        <textarea
          id="contentTextarea"
          className="form-control"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleSave}>Save</button>
    </div>
  );
};

export default AdminPage;
