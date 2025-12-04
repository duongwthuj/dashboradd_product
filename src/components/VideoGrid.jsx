import VideoCard from './VideoCard';

const VideoGrid = ({ videos, onVideoClick }) => {
  return (
    <div style={{ 
      display: 'grid', 
      gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', 
      gap: '1.5rem' 
    }}>
      {videos.map(video => (
        <VideoCard key={video.id} video={video} onClick={onVideoClick} />
      ))}
    </div>
  );
};

export default VideoGrid;
