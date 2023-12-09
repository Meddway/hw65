import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import axiosApi from '../../axiosApi';

interface Page {
  title: string;
  content: string;
}

interface PageData {
  [key: string]: Page;
}

const InfoPage: React.FC = () => {
  const {pageName} = useParams<{ pageName: string | undefined }>();
  const [page, setPage] = useState<Page | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetch = async () => {
      try {
        if (!pageName) {
          console.error('Имя страницы не определено');
          return;
        }

        const response = await axiosApi.get<PageData>('pages.json');
        const pagesFromFirebase: PageData = response.data;

        if (pageName.trim() === '') {
          console.error('Имя страницы пусто');
          return;
        }

        const currentPage = pagesFromFirebase[pageName.toLowerCase()];

        if (currentPage) {
          setPage(currentPage);
        } else {
          console.error(`Страница с заголовком '${pageName}' не найдена`);
        }
      } catch (error) {
        console.error('Ошибка при получении данных страниц', error);
      } finally {
        setLoading(false);
      }
    };

    void fetch();
  }, [pageName]);

  return (
    <div>
      {loading && <p>Загрузка...</p>}
      {!loading && !page && <p>Страница не найдена</p>}
      {!loading && page && (
        <div>
          <h1>{page.title}</h1>
          <p>{page.content}</p>
        </div>
      )}
    </div>
  );
};

export default InfoPage;
