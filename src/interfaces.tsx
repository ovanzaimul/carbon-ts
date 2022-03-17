// export interface IModalProps {
//   isModalOpen?: boolean;
//   closeModal: () => void;
// }

// Table

export interface ITable {
  // source: ISource,

  // author?: string;
  rows?: any;
  headers?: any;
  getHeaderProps?: any;
  getRowProps?: any;
  getTableProps?: any;
}
export interface IHeader {
  key: string;
  header: string;
}

export interface IRow {
  id: string;
  name: string;
  status: string;
}

export interface ISource {
  id: string | null;
  name: string;
}

export interface IArticlesProps {
  articles: {
    source: ISource;
    author: string;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
    content: string;
  }[];
}
// App

export interface ISource {
  id: string | null;
  name: string;
}

export interface IArticle {
  author: string | null;
  content: string;
  description: string;
  title: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  // [keys: string]: string | number | null | ISource | boolean;
}

export interface IArticleWithSource extends IArticle {
  source: ISource;
}

export interface IEverythingResponse {
  // status: string,
  // totalResults: number,
  articles: Array<IArticle>;
}

export interface IFilteredArticle extends IArticle {
  id: string;
  // [keys: string]: string | number | null;
  isExpanded: boolean;
}
