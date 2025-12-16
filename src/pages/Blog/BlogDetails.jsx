import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import { Calendar, User as UserIcon } from 'lucide-react';

const BlogDetails = () => {
  const [post] = useState({
    title: 'Insider Tips For An Unforgettable Stay\nAt Farm Fort',
     date: '2024-10-05',
    author: 'John Doe',
    authorImage: '/author1.jpg'
  });

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Background Image */}
      <div className="relative">
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <div className="bg-cover bg-center h-[80vh]" style={{ backgroundImage: 'url("/Hero.jpeg")' }}>
          <div className="relative z-20">
            <Navbar />
            
            {/* Page Title Section */}
            <div className="container mx-auto px-4 h-[calc(80vh-80px)] flex flex-col justify-center items-start text-left text-white relative z-20">
              <div className="max-w-4xl">
                <div className="mb-6">
                 
                </div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-[1.2]">
{post.title.split('\n').map((line, i) => (
                    <React.Fragment key={i}>
                      {line}
                      {i < post.title.split('\n').length - 1 && <div className="h-2"></div>}
                    </React.Fragment>
                  ))}
                </h1>
                
                {/* Author and Date */}
                <div className="flex items-center space-x-4 mb-8 font-['Roboto']">
                  <div className="flex items-center">
                    <UserIcon className="h-5 w-5 text-white mr-2" />
                    <span className="text-white font-roboto">{post.author}</span>
                  </div>
                  <div className="h-4 w-px bg-white/50"></div>
                  <div className="flex items-center text-white/80">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span className="font-roboto">{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                  </div>
                </div>
                
               
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Blog Content Image */}
      <div className="relative w-full h-[400px] overflow-hidden px-4">
        <img 
          src="/room2.jpeg" 
          alt="Blog content" 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Blog Content */}
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 pt-8 pb-12 lg:pt-10 lg:pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h1 className="font-gilda text-3xl lg:text-4xl font-semibold mb-4">Description</h1>
          <div className="space-y-5 mb-6">
            <p className="text-base leading-relaxed font-roboto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
            <p className="text-base leading-relaxed font-roboto">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
          </div>

          <h2 className="font-gilda text-2xl md:text-xl lg:text-2xl mb-4">Designing Exceptional and Lasting Guest Journeys</h2>
          <div className="space-y-5 mb-6">
            <p className="text-base leading-relaxed font-roboto">
              Himenaeos augue fringilla curabitur tempus natoque quisque odio malesuada. Hendrerit in dapibus pulvinar nec amet faucibus. Dolor lacinia penatibus dapibus montes porttitor ex? Gravida gravida suscipit magnis nulla dolor. Est placerat velit quis interdum mauris facilisi aptent integer euismod. Lectus urna nibh dis consequat potenti aliquam.
            </p>
           
            
            <ul className="space-y-3 list-disc pl-5">
              <li className="text-base leading-relaxed font-roboto">Nascetur tristique vel donec; nisi facilisis euismod conubia conubia</li>
              <li className="text-base leading-relaxed font-roboto">Pulvinar massa diam integer condimentum; aliquet dis varius ac</li>
              <li className="text-base leading-relaxed font-roboto">Turpis adipiscing tempor condimentum posuere pharetra rutrum</li>
              <li className="text-base leading-relaxed font-roboto">Ultrices nulla molestie aliquet venenatis posuere; hac elementum</li>
              <li className="text-base leading-relaxed font-roboto">Sapien sem sagittis justo vulputate proin</li>
              <li className="text-base leading-relaxed font-roboto">Vestibulum rhoncus scelerisque ipsum nulla orci ipsum</li>
            </ul>
            
            <p className="text-base leading-relaxed font-roboto">
              Nascetur tristique vel donec; nisi facilisis euismod conubia conubia. Pulvinar massa diam integer condimentum; aliquet dis varius ac. Turpis adipiscing tempor condimentum posuere pharetra rutrum. Ultrices nulla molestie aliquet venenatis posuere; hac elementum. Sapien sem sagittis justo vulputate proin. Vestibulum rhoncus scelerisque ipsum nulla orci ipsum.
            </p>

          </div>

       
         
          
          {/* Related Articles */}
          <div className="mt-12">
            <h3 className="text-2xl font-bold mb-6">Related Articles</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {[1, 2].map((item) => (
                <div key={item} className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="h-48 bg-gray-100">
                    <img 
                      src={`/room${item}.jpeg`} 
                      alt={`Related article ${item}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <span className="text-sm text-amber-600">Travel Tips</span>
                    <h4 className="text-lg font-semibold mt-2 mb-2">
                      {item === 1 
                        ? 'Best Time to Visit Our Resort' 
                        : 'Top 10 Activities at Farm Fort'}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {item === 1
                        ? 'Discover the perfect time to experience our resort at its best.'
                        : 'Explore the most exciting activities we offer to our guests.'}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      {/* <Footer /> */}
    </div>
  );
};

export default BlogDetails;