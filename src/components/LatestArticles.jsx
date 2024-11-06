import React, { useState } from 'react';

const LatestArticles = () => {
  const articles = [
    { id: 1, title: "Grilled Tomatoes at Home", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...", image: "/public/Recipe/tomatoes.svg" },
    { id: 2, title: "Snacks for Travel", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...", image: "/public/Recipe/peach.svg" },
    { id: 3, title: "Post-workout Recipes", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...", image: "/public/Recipe/workout.svg" },
    { id: 4, title: "How To Grill Corn", description: "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...", image: "/public/Recipe/grillcorn.svg" },
    { id: 5, title: "Crunchwrap Supreme", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...", image: "/public/Recipe/crunch.svg" },
    { id: 6, title: "Broccoli Cheese Soup", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...", image: "/public/Recipe/brocc.svg" },
  ];

  const [currentPage, setCurrentPage] = useState(0);
  const articlesPerPage = 3;
  const startIndex = currentPage * articlesPerPage;
  const currentArticles = articles.slice(startIndex, startIndex + articlesPerPage);

  const nextPage = () => {
    if ((currentPage + 1) * articlesPerPage < articles.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="py-14">
      <h2 className="text-4xl font-bold ml-32 text-blue mb-8">Latest Articles</h2>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row ml-32 justify-between gap-12">
        {currentArticles.map((article) => (
          <div 
            key={article.id} 
            className="bg-white border-2 border-gray-300 rounded-2xl m-0 p-8 flex flex-col items-center"
            style={{ width: '381px', height: '554px', opacity: 1 }}
          >
            <img 
              src={article.image} 
              alt={article.title} 
              className="w-[326px] h-[258px] object-cover rounded-md mb-4"                  
            />
            <h3 className="text-xl font-bold text-blue mb-2">{article.title}</h3>
            <p className="text-gray-700 mb-4">{article.description}</p>
            <button className="border border-gray-700 text-gray-700 font-semibold text-[16px] ml-7 px-4 py-2 w-[131px] mr-52 rounded-3xl hover:bg-gray-700 hover:text-white transition">
              Read More
            </button>
          </div>
        ))}
      </div>
      
      <div className="flex justify-center items-center mt-6">
        <button 
          onClick={prevPage} 
          className={`mr-1 w-8 h-8 rounded-md flex justify-center items-center ml-2 transition ${
            currentPage === 0 ? "border border-gray-300 text-gray-300" : "border border-gray-700 text-gray-700 hover:bg-gray-700 hover:text-white"
          }`}
          disabled={currentPage === 0}
        >
          <img src="/public/left.svg" alt="left" className="h-4 w-4" />
        </button>

        <span className="text-gray-700">
          {currentPage + 1} / {Math.ceil(articles.length / articlesPerPage)}
        </span>

        <button 
          onClick={nextPage} 
          className={`w-8 h-8 rounded-md flex justify-center items-center ml-2 transition ${
            currentPage !== 0 ? "border border-gray-300 text-gray-300" : "border border-gray-700 text-gray-700 hover:bg-gray-700 hover:text-white"
          }`}
          disabled={(currentPage + 1) * articlesPerPage >= articles.length}
        >
          <img src="/public/right.svg" alt="right" className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

export default LatestArticles;
