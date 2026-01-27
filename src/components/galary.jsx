import React, { useState } from 'react';

const Gallery = () => {
  const [selectedMedia, setSelectedMedia] = useState(null);
  const [filter, setFilter] = useState('all');

  // Sample company media data (photos and videos)
  const companyMedia = [
    {
      id: 1,
      type: 'image',
      src: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop',
      alt: 'Company Office Building',
      category: 'office',
      title: 'Main Office Building'
    },
    {
      id: 2,
      type: 'video',
      src: 'https://player.vimeo.com/video/347119375',
      thumbnail: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=600&fit=crop',
      alt: 'Company Introduction Video',
      category: 'about',
      title: 'Company Introduction'
    },
    {
      id: 3,
      type: 'image',
      src: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=400&h=500&fit=crop',
      alt: 'Team Meeting',
      category: 'team',
      title: 'Team Collaboration'
    },
    {
      id: 4,
      type: 'image',
      src: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=400&fit=crop',
      alt: 'Office Interior',
      category: 'office',
      title: 'Modern Workspace'
    },
    {
      id: 5,
      type: 'video',
      src: 'https://player.vimeo.com/video/76979871',
      thumbnail: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&h=300&fit=crop',
      alt: 'Product Demo Video',
      category: 'products',
      title: 'Product Showcase'
    },
    {
      id: 6,
      type: 'image',
      src: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&h=600&fit=crop',
      alt: 'Company Event',
      category: 'events',
      title: 'Annual Conference'
    },
    {
      id: 7,
      type: 'image',
      src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop',
      alt: 'CEO Portrait',
      category: 'team',
      title: 'Leadership Team'
    },
    {
      id: 8,
      type: 'image',
      src: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=500&fit=crop',
      alt: 'Office Building Night',
      category: 'office',
      title: 'Evening View'
    },
    {
      id: 9,
      type: 'video',
      src: 'https://player.vimeo.com/video/90509568',
      thumbnail: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=400&fit=crop',
      alt: 'Behind the Scenes',
      category: 'about',
      title: 'Behind the Scenes'
    },
    {
      id: 10,
      type: 'image',
      src: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=400&h=600&fit=crop',
      alt: 'Team Workshop',
      category: 'team',
      title: 'Innovation Workshop'
    }
  ];

  const categories = [
    { id: 'all', label: 'All' },
    { id: 'office', label: 'Office' },
    { id: 'team', label: 'Team' },
    { id: 'events', label: 'Events' },
    { id: 'products', label: 'Products' },
    { id: 'about', label: 'About Us' }
  ];

  const filteredMedia = filter === 'all' 
    ? companyMedia 
    : companyMedia.filter(item => item.category === filter);

  const openModal = (media) => {
    setSelectedMedia(media);
  };

  const closeModal = () => {
    setSelectedMedia(null);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <div className="pt-20 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-light text-gray-900 mb-4">
            Gallery
          </h1>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Discover our company through images and videos
          </p>
        </div>
      </div>

      {/* Filter Buttons */}
      <div className="px-4 sm:px-6 lg:px-8 mb-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`px-6 py-2 text-sm font-medium transition-all duration-200 border border-gray-200 ${
                  filter === category.id
                    ? 'bg-gray-900 text-white border-gray-900'
                    : 'bg-white text-gray-600 hover:border-gray-300 hover:text-gray-900'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Masonry Grid */}
      <div className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
            {filteredMedia.map((media, index) => (
              <div 
                key={media.id}
                className="break-inside-avoid cursor-pointer group"
                onClick={() => openModal(media)}
              >
                <div className="relative overflow-hidden bg-gray-100 transition-all duration-300 hover:shadow-lg">
                  {media.type === 'image' ? (
                    <img
                      src={media.src}
                      alt={media.alt}
                      className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  ) : (
                    <div className="relative">
                      <img
                        src={media.thumbnail}
                        alt={media.alt}
                        className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
                        <div className="w-16 h-16 bg-white bg-opacity-90 rounded-full flex items-center justify-center">
                          <svg className="w-8 h-8 text-gray-800 ml-1" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M6.3 2.84A1 1 0 004 3.69v12.62a1 1 0 001.6.8l8.4-6.32a1 1 0 000-1.58L5.6 2.84z"/>
                          </svg>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-white font-medium text-sm">
                        {media.title}
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedMedia && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4">
          <div className="relative max-w-5xl max-h-full">
            <button
              onClick={closeModal}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            {selectedMedia.type === 'image' ? (
              <img
                src={selectedMedia.src}
                alt={selectedMedia.alt}
                className="max-w-full max-h-full object-contain"
              />
            ) : (
              <div className="w-full h-96 md:h-[32rem]">
                <iframe
                  src={selectedMedia.src}
                  className="w-full h-full"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            )}
            
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
              <h3 className="text-white text-xl font-medium">
                {selectedMedia.title}
              </h3>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
