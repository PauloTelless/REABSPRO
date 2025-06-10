import React, { useState } from 'react';
import { Play, Minimize2 } from 'lucide-react';
import { Exercise } from '../types';

interface ExerciseCardProps {
  exercise: Exercise;
}

const ExerciseCard: React.FC<ExerciseCardProps> = ({ exercise }) => {
  const [videoExpanded, setVideoExpanded] = useState(false);
  
  // Extract video ID from YouTube URL
  const getYoutubeVideoId = (url: string) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };
  
  const videoId = getYoutubeVideoId(exercise.videoUrl);
  const thumbnailUrl = videoId ? `https://img.youtube.com/vi/${videoId}/mqdefault.jpg` : '';
  
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6 transition-all duration-300">
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{exercise.name}</h3>
        <p className="text-gray-600 mb-4">{exercise.description}</p>
        
        {!videoExpanded ? (
          <div 
            className="relative rounded-lg overflow-hidden cursor-pointer group"
            onClick={() => setVideoExpanded(true)}
          >
            <img 
              src={thumbnailUrl} 
              alt={exercise.name} 
              className="w-full rounded-lg object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 group-hover:bg-opacity-20 transition-all duration-300">
              <div className="bg-white bg-opacity-90 rounded-full p-3 shadow-lg transform transition-transform duration-300 group-hover:scale-110">
                <Play className="h-8 w-8 text-teal-600 fill-current" />
              </div>
            </div>
          </div>
        ) : (
          <div className="relative pt-2">
            <button 
              className="absolute top-0 right-0 z-10 bg-white rounded-full p-1 shadow-md"
              onClick={() => setVideoExpanded(false)}
            >
              <Minimize2 className="h-5 w-5 text-gray-600" />
            </button>
            <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-lg">
              <iframe 
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1`} 
                title={exercise.name}
                className="absolute top-0 left-0 w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ExerciseCard;