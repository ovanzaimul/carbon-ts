import React, { useState, useEffect } from 'react';
import './App.scss';
import TableC from './components/Table';
import { Button } from 'carbon-components-react';
import ModalC from './components/Modal';
import { IArticleWithSource, IFilteredArticle } from './interfaces';

const url =
  'https://newsapi.org/v2/everything?q=bitcoin&apiKey=fb9a01961a354bde95a89f74f155179a';

function App() {
  const [loading, setLoading] = useState(false);
  // const [articles, setArticles] = useState<IEverythingResponse | null>(null);
  const [articles, setArticles] = useState<IFilteredArticle[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState('');

  const closeModal = (): void => {
    setIsModalOpen(false);
  };

  const openModal = (id: string): void => {
    setIsModalOpen(true);
    setActiveIndex(id);
  };

  const fetchNews = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const { articles } = await response.json();
      console.log('arrr:', articles);

      const filteredArticle = articles.map(
        (singleArticle: IArticleWithSource, index: number) => {
          // console.log(article);
          // return { ...article, id: index, source: 'ovan' };
          const { source, ...newArticle } = singleArticle;
          // return { ...newArticle, id: index.toString(), isExpanded: false };
          return { ...newArticle, id: index.toString() };
        }
      );
      setArticles(filteredArticle);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  if (loading) {
    return <p>loading....</p>;
  }

  console.log(articles);
  return (
    <div className="App">
      <TableC articles={articles} openModal={openModal} />
      {/* <TableC /> */}
      <ModalC
        isModalOpen={isModalOpen}
        closeModal={closeModal}
        articles={articles}
        activeModal={activeIndex}
      />
      <Button kind="secondary" onClick={() => setIsModalOpen(true)}>
        open modal
      </Button>
    </div>
  );
}

export default App;
