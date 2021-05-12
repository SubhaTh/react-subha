import React from 'react';
//import { Link } from 'react-router-dom';
import ArticlesList from '../components/ArticlesList';
import articleContent from './article-content';

const ArticlesListPage = () => (
    <>
    <h1>Articles</h1>
    <ArticlesList articles={articleContent} />
   
    
    </>
);

export default ArticlesListPage;
/* {articleContent.map((article, key) => (
        <Link className="article-list-item" key={key} to={`/article/${article.name}`}>
            <h3>{article.title}</h3>
            <p>{article.content[0].substring(0, 150)}...</p>
        </Link>
    ))}  */
/*import React from 'react';

const ArticlesList = () => (
    <>
    <h1>ArticlesList!</h1>
  
    </>
);

export default ArticlesList; */