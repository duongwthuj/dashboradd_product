import { useSearchParams, useNavigate } from 'react-router-dom';
import { curriculum } from '../data/curriculum';
import VideoGrid from '../components/VideoGrid';
import VideoModal from '../components/VideoModal';
import { useState, useMemo } from 'react';

const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const navigate = useNavigate();
  const [selectedVideo, setSelectedVideo] = useState(null);

  const results = useMemo(() => {
    if (!query) return [];
    const lowerQuery = query.toLowerCase();
    const allVideos = [];
    
    curriculum.forEach(subject => {
      subject.modules.forEach(module => {
        module.videos.forEach(video => {
          if (video.title.toLowerCase().includes(lowerQuery) || 
              video.studentName.toLowerCase().includes(lowerQuery)) {
            allVideos.push({
              ...video,
              context: `${subject.name} > ${module.name}`
            });
          }
        });
      });
    });
    
    return allVideos;
  }, [query]);

  return (
    <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
      <div style={{ marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>
          Search Results for "<span style={{ color: 'var(--primary)' }}>{query}</span>"
        </h1>
        <p style={{ color: 'var(--text-muted)' }}>Found {results.length} videos</p>
      </div>

      {results.length > 0 ? (
        <VideoGrid videos={results} onVideoClick={setSelectedVideo} />
      ) : (
        <div style={{ textAlign: 'center', padding: '4rem', color: 'var(--text-muted)' }}>
          <p style={{ fontSize: '1.2rem' }}>No videos found matching your search.</p>
          <button 
            onClick={() => navigate('/')}
            style={{ marginTop: '1rem', color: 'var(--primary)', textDecoration: 'underline' }}
          >
            Back to Home
          </button>
        </div>
      )}

      <VideoModal video={selectedVideo} onClose={() => setSelectedVideo(null)} />
    </div>
  );
};

export default SearchPage;
