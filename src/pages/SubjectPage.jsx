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
      <div style={{ 
        padding: '4rem', 
        textAlign: 'center',
        minHeight: 'calc(100vh - 70px)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '1rem'
      }}>
        <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="var(--text-muted)" strokeWidth="1.5">
          <circle cx="12" cy="12" r="10"/>
          <path d="M16 16s-1.5-2-4-2-4 2-4 2"/>
          <line x1="9" y1="9" x2="9.01" y2="9"/>
          <line x1="15" y1="9" x2="15.01" y2="9"/>
        </svg>
        <h2 style={{ color: 'var(--text)', fontSize: '1.5rem' }}>Không tìm thấy khóa học</h2>
        <p style={{ color: 'var(--text-muted)' }}>Khóa học bạn tìm kiếm không tồn tại.</p>
        <button 
          onClick={() => navigate('/')} 
          style={{ 
            marginTop: '1rem', 
            color: 'white',
            background: 'var(--primary)',
            padding: '0.75rem 1.5rem',
            borderRadius: 'var(--radius-full)',
            fontWeight: 600
          }}
        >
          Quay về trang chủ
        </button>
      </div>
    );
  }

  const activeModule = subject.modules.find(m => m.id === activeModuleId);

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div style={{ 
      padding: '2rem', 
      maxWidth: '1400px', 
      margin: '0 auto',
      minHeight: 'calc(100vh - 70px)'
    }}>
      <Breadcrumbs items={[
        { label: subject.name },
        { label: activeModule ? activeModule.name.split(':')[0] : 'Học phần' }
      ]} />

      {/* Subject Header */}
      <div style={{ 
        marginBottom: '2rem',
        padding: '1.5rem',
        background: 'var(--surface)',
        borderRadius: 'var(--radius-lg)',
        border: '1px solid var(--border)',
        display: 'flex',
        alignItems: 'center',
        gap: '1.5rem',
        boxShadow: 'var(--shadow-sm)'
      }}>
        <div style={{
          width: '72px',
          height: '72px',
          borderRadius: 'var(--radius-md)',
          overflow: 'hidden',
          flexShrink: 0,
          boxShadow: 'var(--shadow)'
        }}>
          <img 
            src={subject.thumbnail} 
            alt={subject.name}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover'
            }}
          />
        </div>
        <div style={{ flex: 1 }}>
          <h1 style={{ 
            fontSize: '1.75rem', 
            fontWeight: 700,
            color: 'var(--text)',
            marginBottom: '0.25rem'
          }}>
            {subject.name}
          </h1>
          <p style={{ 
            color: 'var(--text-muted)', 
            fontSize: '0.95rem',
            lineHeight: 1.5
          }}>
            {subject.description}
          </p>
        </div>
        <div style={{
          display: 'flex',
          gap: '1rem',
          flexShrink: 0
        }}>
          <div style={{
            textAlign: 'center',
            padding: '0.75rem 1.25rem',
            background: 'var(--background)',
            borderRadius: 'var(--radius)',
            border: '1px solid var(--border)'
          }}>
            <div style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--primary)' }}>
              {subject.modules.length}
            </div>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Học phần</div>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar Toggle */}
      <button 
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        style={{
          display: 'none',
          marginBottom: '1rem',
          padding: '0.75rem 1.25rem',
          background: 'var(--surface)',
          border: '1px solid var(--border)',
          borderRadius: 'var(--radius)',
          color: 'var(--text)',
          alignItems: 'center',
          gap: '0.5rem',
          fontWeight: 500,
          width: '100%',
          justifyContent: 'center',
          boxShadow: 'var(--shadow-sm)'
        }}
        className="mobile-sidebar-toggle"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <line x1="3" y1="12" x2="21" y2="12"/>
          <line x1="3" y1="6" x2="21" y2="6"/>
          <line x1="3" y1="18" x2="21" y2="18"/>
        </svg>
        {isSidebarOpen ? 'Ẩn danh sách học phần' : 'Hiện danh sách học phần'}
      </button>

      <div className="subject-layout" style={{ 
        display: 'grid', 
        gridTemplateColumns: '300px 1fr', 
        gap: '2rem', 
        alignItems: 'start' 
      }}>
        <div 
          className={`sidebar ${isSidebarOpen ? 'open' : ''}`}
          style={{ position: 'sticky', top: '90px' }}
        >
          <ModuleList 
            modules={subject.modules} 
            activeModuleId={activeModuleId} 
            onModuleSelect={(id) => {
              setActiveModuleId(id);
              setIsSidebarOpen(false);
            }} 
          />
        </div>

        <div>
          {activeModule ? (
            <div>
              {/* Module Header */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                marginBottom: '1.5rem'
              }}>
                <div style={{
                  width: '4px',
                  height: '32px',
                  background: 'var(--gradient-primary)',
                  borderRadius: 'var(--radius-full)'
                }} />
                <h2 style={{ 
                  fontSize: '1.5rem', 
                  fontWeight: 700,
                  color: 'var(--text)'
                }}>
                  {activeModule.name.split(':')[0]}
                </h2>
              </div>
              
              {/* Module Description */}
              {activeModule.description && (
                <div style={{
                  background: 'var(--surface)',
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--radius-lg)',
                  padding: '1.25rem',
                  marginBottom: '1.5rem',
                  boxShadow: 'var(--shadow-sm)'
                }}>
                  <p style={{ 
                    fontSize: '0.95rem', 
                    lineHeight: 1.7, 
                    color: 'var(--text-secondary)' 
                  }}>
                    {activeModule.description}
                  </p>
                </div>
              )}

              {/* Roadmap */}
              {activeModule.roadmap && (
                <div style={{ 
                  background: 'rgba(46, 158, 138, 0.05)', 
                  border: '1px solid rgba(46, 158, 138, 0.2)',
                  borderRadius: 'var(--radius-lg)',
                  padding: '1.5rem',
                  marginBottom: '2rem'
                }}>
                  <h3 style={{ 
                    fontSize: '1.1rem', 
                    marginBottom: '1rem', 
                    color: 'var(--primary)', 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '0.5rem',
                    fontWeight: 600
                  }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"/>
                      <line x1="8" y1="2" x2="8" y2="18"/>
                      <line x1="16" y1="6" x2="16" y2="22"/>
                    </svg>
                    Lộ trình & Nội dung học
                  </h3>
                  <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gap: '0.75rem' }}>
                    {Array.isArray(activeModule.roadmap) ? activeModule.roadmap.map((item, index) => (
                      <li key={index} style={{ 
                        display: 'flex', 
                        gap: '0.75rem', 
                        alignItems: 'start', 
                        lineHeight: 1.5 
                      }}>
                        <span style={{ 
                          background: 'var(--primary)', 
                          color: 'white', 
                          width: '1.5rem', 
                          height: '1.5rem', 
                          borderRadius: 'var(--radius-full)', 
                          display: 'flex', 
                          alignItems: 'center', 
                          justifyContent: 'center',
                          fontSize: '0.75rem',
                          fontWeight: 600,
                          flexShrink: 0,
                          marginTop: '2px'
                        }}>{index + 1}</span>
                        <span style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>{item}</span>
                      </li>
                    )) : (
                      <li style={{ color: 'var(--text-secondary)' }}>{activeModule.roadmap}</li>
                    )}
                  </ul>
                </div>
              )}

              {/* Final Products Header */}
              <div style={{ 
                marginBottom: '1.5rem', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'space-between'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <h3 style={{ 
                    fontSize: '1.25rem', 
                    fontWeight: 600,
                    color: 'var(--text)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"/>
                      <line x1="7" y1="2" x2="7" y2="22"/>
                      <line x1="17" y1="2" x2="17" y2="22"/>
                      <line x1="2" y1="12" x2="22" y2="12"/>
                      <line x1="2" y1="7" x2="7" y2="7"/>
                      <line x1="2" y1="17" x2="7" y2="17"/>
                      <line x1="17" y1="17" x2="22" y2="17"/>
                      <line x1="17" y1="7" x2="22" y2="7"/>
                    </svg>
                    Sản phẩm cuối khóa
                  </h3>
                </div>
                <span style={{ 
                  fontSize: '0.875rem', 
                  padding: '0.35rem 0.75rem', 
                  background: 'var(--surface)', 
                  borderRadius: 'var(--radius-full)', 
                  border: '1px solid var(--border)', 
                  color: 'var(--text-muted)',
                  fontWeight: 500
                }}>
                  {activeModule.videos.length} video
                </span>
              </div>

              <VideoGrid videos={activeModule.videos} onVideoClick={setSelectedVideo} />
            </div>
          ) : (
            <div style={{ 
              padding: '4rem', 
              textAlign: 'center', 
              color: 'var(--text-muted)',
              background: 'var(--surface)',
              borderRadius: 'var(--radius-lg)',
              border: '1px solid var(--border)'
            }}>
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ marginBottom: '1rem', opacity: 0.5 }}>
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
              </svg>
              <p>Chọn một học phần để xem video</p>
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
