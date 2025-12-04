import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { curriculum } from '../data/curriculum';
import ModuleList from '../components/ModuleList';
import VideoGrid from '../components/VideoGrid';
import VideoModal from '../components/VideoModal';
import Breadcrumbs from '../components/Breadcrumbs';

const SubjectPage = () => {
  const { subjectId } = useParams();
  const navigate = useNavigate();
  const [activeModuleId, setActiveModuleId] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const subject = curriculum.find(s => s.id === subjectId);

  useEffect(() => {
    if (subject && subject.modules.length > 0 && !activeModuleId) {
      setActiveModuleId(subject.modules[0].id);
    }
  }, [subject, activeModuleId]);

  if (!subject) {
    return (
      <div style={{ padding: '4rem', textAlign: 'center' }}>
        <h2>Subject not found</h2>
        <button onClick={() => navigate('/')} style={{ marginTop: '1rem', color: 'var(--primary)' }}>Go Home</button>
      </div>
    );
  }

  const activeModule = subject.modules.find(m => m.id === activeModuleId);

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div style={{ padding: '2rem', maxWidth: '1400px', margin: '0 auto' }}>
      <Breadcrumbs items={[
        { label: subject.name },
        { label: activeModule ? activeModule.name.split(':')[0] : 'Modules' }
      ]} />

      <div style={{ marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 700 }}>{subject.name}</h1>
        <p style={{ color: 'var(--text-muted)', maxWidth: '800px' }}>{subject.description}</p>
      </div>

      {/* Mobile Sidebar Toggle */}
      <button 
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        style={{
          display: 'none', // Hidden on desktop by default, controlled via CSS media query ideally, but inline for now we can use window width or just always show on mobile
          marginBottom: '1rem',
          padding: '0.5rem 1rem',
          background: 'var(--surface)',
          border: '1px solid rgba(255,255,255,0.1)',
          borderRadius: '0.5rem',
          color: 'var(--text)',
          alignItems: 'center',
          gap: '0.5rem'
        }}
        className="mobile-sidebar-toggle"
      >
        ☰ {isSidebarOpen ? 'Hide Modules' : 'Show Modules'}
      </button>

      <div className="subject-layout" style={{ display: 'grid', gridTemplateColumns: '300px 1fr', gap: '2rem', alignItems: 'start' }}>
        <div 
          className={`sidebar ${isSidebarOpen ? 'open' : ''}`}
          style={{ position: 'sticky', top: '100px' }}
        >
          <ModuleList 
            modules={subject.modules} 
            activeModuleId={activeModuleId} 
            onModuleSelect={(id) => {
              setActiveModuleId(id);
              setIsSidebarOpen(false); // Close on selection on mobile
            }} 
          />
        </div>

        <div>
          {activeModule ? (
            <div>
              <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <span style={{ color: 'var(--primary)' }}>{activeModule.name.split(':')[0]}</span>
                <span style={{ height: '1px', flex: 1, background: 'rgba(255, 255, 255, 0.1)' }}></span>
              </h2>
              
              {/* Module Description */}
              {activeModule.description && (
                <p style={{ fontSize: '1.1rem', lineHeight: 1.6, marginBottom: '2rem', color: 'var(--text-muted)' }}>
                  {activeModule.description}
                </p>
              )}

              {/* Roadmap */}
              {activeModule.roadmap && (
                <div style={{ 
                  background: 'rgba(99, 102, 241, 0.1)', 
                  border: '1px solid rgba(99, 102, 241, 0.2)',
                  borderRadius: '1rem',
                  padding: '1.5rem',
                  marginBottom: '3rem'
                }}>
                  <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem', color: 'var(--primary)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span>🗺️</span> Lộ trình & Nội dung học
                  </h3>
                  <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gap: '0.5rem' }}>
                    {Array.isArray(activeModule.roadmap) ? activeModule.roadmap.map((item, index) => (
                      <li key={index} style={{ display: 'flex', gap: '0.75rem', alignItems: 'start', lineHeight: 1.5 }}>
                        <span style={{ 
                          background: 'var(--primary)', 
                          color: 'white', 
                          width: '1.5rem', 
                          height: '1.5rem', 
                          borderRadius: '50%', 
                          display: 'flex', 
                          alignItems: 'center', 
                          justifyContent: 'center',
                          fontSize: '0.8rem',
                          flexShrink: 0,
                          marginTop: '2px'
                        }}>{index + 1}</span>
                        <span style={{ color: 'var(--text-muted)' }}>{item}</span>
                      </li>
                    )) : (
                      <li style={{ color: 'var(--text-muted)' }}>{activeModule.roadmap}</li>
                    )}
                  </ul>
                </div>
              )}

              {/* Final Products Header */}
              <div style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 600 }}>🎬 Sản phẩm cuối khóa</h3>
                <span style={{ fontSize: '0.9rem', padding: '0.2rem 0.6rem', background: 'var(--surface)', borderRadius: '1rem', border: '1px solid rgba(255,255,255,0.1)', color: 'var(--text-muted)' }}>
                  {activeModule.videos.length} video
                </span>
              </div>

              <VideoGrid videos={activeModule.videos} onVideoClick={setSelectedVideo} />
            </div>
          ) : (
            <div style={{ padding: '4rem', textAlign: 'center', color: 'var(--text-muted)' }}>
              Select a module to view videos
            </div>
          )}
        </div>
      </div>

      <VideoModal video={selectedVideo} onClose={() => setSelectedVideo(null)} />
      
      <style>{`
        @media (max-width: 768px) {
          .subject-layout {
            grid-template-columns: 1fr !important;
          }
          .sidebar {
            display: none;
          }
          .sidebar.open {
            display: block;
          }
          .mobile-sidebar-toggle {
            display: flex !important;
          }
        }
      `}</style>
    </div>
  );
};

export default SubjectPage;
