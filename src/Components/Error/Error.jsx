const ErrorPage = () => {
   // Ager page-e ferot jaoar jonno hander function
   const handleGoBack = () => {
     window.history.back();
   };

   return (
     <div className="min-h-screen bg-gray-50 flex flex-col justify-between font-sans text-gray-800">
      
        {/* Top Section: Breadcrumb */}
        <div className="max-w-7xl w-full mx-auto px-4 pt-6 sm:px-6 lg:px-8">
          <nav className="flex items-center space-x-2 text-sm text-gray-500">
            <a href="/" className="hover:text-blue-600 transition-colors">Home</a>
            <span>/</span>
            <span className="text-gray-400 font-medium">Error 404</span>
          </nav>
        </div>

        {/* Main Content Section */}
        <main className="flex-grow flex flex-col items-center justify-center text-center px-4">
          {/* Error Code / Visual Element */}
          <h1 className="text-9xl font-extrabold text-blue-600 tracking-widest animate-pulse">
            404
          </h1>
        
          <div className="bg-white px-6 py-2 text-sm font-semibold rounded-md shadow-sm border border-gray-100 text-blue-600 -mt-4 mb-6">
            Page Not Found
          </div>

          {/* Message */}
          <h2 className="text-3xl font-bold text-gray-900 mb-3">
            Oops! Kichu ekta vul hoyeche.
//          </h2>
//          <p className="text-gray-600 max-w-md mb-8 leading-relaxed">
//            Apni jei pata ti khujchen ta hoyto muche fela hoyeche, tar nam poriborton kora hoyeche ba samoyikvabe opasthorji ache.
//          </p>

//          {/* Call to Action Buttons */}
//          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
//            {/* Back Button */}
//            <button
//              onClick={handleGoBack}
//              className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 shadow-sm text-base font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all cursor-pointer"
//            >
//              <svg 
//                className="mr-2 -ml-1 h-5 w-5 text-gray-500" 
//                fill="none" 
//                viewBox="0 0 24 24" 
//                stroke="currentColor"
//              >
//                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
//              </svg>
//              Ager Page-e Fire Jan
//            </button>

//            {/* Home Button */}
//            <a
//              href="/"
//              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all"
//            >
//              Home-e Fire Jan
//            </a>
//          </div>
//        </main>

//        {/* Footer / Bottom Spacing */}
//        <footer className="py-6 text-center text-sm text-gray-400 border-t border-gray-100 bg-white">
//          &copy; {new Date().getFullYear()} Your Company. All rights reserved.
//        </footer>
//      </div>
//    );
//  };

//  export default ErrorPage;