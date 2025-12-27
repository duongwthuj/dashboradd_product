import { curriculum } from '../data/curriculum';
import SubjectCard from '../components/SubjectCard';

const HomePage = () => {
  return (
    <div style={{ 
      padding: '2rem', 
      maxWidth: '1400px', 
      margin: '0 auto',
      minHeight: 'calc(100vh - 70px)'
    }}>
      {/* Hero Section */}
      <div style={{ 
        textAlign: 'center', 
        marginBottom: '3rem', 
        paddingTop: '2.5rem',
        paddingBottom: '2rem'
      }}>
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.5rem',
          background: 'var(--secondary-soft)',
          padding: '0.5rem 1.25rem',
          borderRadius: 'var(--radius-full)',
          marginBottom: '1.25rem',
          color: 'var(--secondary)',
          fontSize: '0.9rem',
          fontWeight: 600
        }}>
          Khám phá tài năng nhí
        </div>
        <h1 style={{ 
          fontSize: '2.75rem', 
          fontWeight: 800, 
          marginBottom: '1rem',
          color: 'var(--text)',
          lineHeight: 1.25,
          letterSpacing: '-0.02em'
        }}>
          Triển lãm <span style={{ 
            background: 'var(--gradient-primary)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>Sản phẩm</span> Học sinh
        </h1>
        <p style={{ 
          fontSize: '1.15rem', 
          color: 'var(--text-muted)', 
          maxWidth: '600px', 
          margin: '0 auto',
          lineHeight: 1.7
        }}>
          Cùng xem những dự án tuyệt vời được tạo ra bởi các bạn học sinh TEKY nhé!
        </p>
      </div>

      {/* Stats Section */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
        gap: '1.25rem',
        marginBottom: '3rem'
      }}>
        {[
          { label: 'Khóa học', value: curriculum.length, suffix: '', color: 'var(--primary)' },
          { label: 'Video sản phẩm', value: '100', suffix: '+', color: '#E53E3E' },
          { label: 'Học sinh', value: '500', suffix: '+', color: 'var(--secondary)' },
          { label: 'Đánh giá', value: '4.9', suffix: '/5', color: '#9F7AEA' }
        ].map((stat, index) => (
          <div key={index} style={{
            background: 'var(--surface)',
            borderRadius: 'var(--radius-lg)',
            padding: '1.5rem 1.25rem',
            textAlign: 'center',
            border: '1px solid var(--border)',
            boxShadow: 'var(--shadow-sm)',
            transition: 'all var(--transition-bounce)',
            cursor: 'default'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-4px) scale(1.02)';
            e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0) scale(1)';
            e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
          }}
          >
            <div style={{ fontSize: '1.75rem', fontWeight: 700, color: stat.color }}>
              {stat.value}{stat.suffix}
            </div>
            <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)', marginTop: '0.25rem', fontWeight: 500 }}>
              {stat.label}
            </div>
          </div>
        ))}
      </div>

      {/* Section Header */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: '1.5rem'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <div style={{
            width: '4px',
            height: '28px',
            background: 'var(--gradient-primary)',
            borderRadius: 'var(--radius-full)'
          }} />
          <h2 style={{ 
            fontSize: '1.4rem', 
            fontWeight: 700, 
            color: 'var(--text)'
          }}>
            Các khóa học
          </h2>
        </div>
        <span style={{
          fontSize: '0.875rem',
          color: 'var(--text-muted)',
          padding: '0.5rem 1rem',
          background: 'var(--surface)',
          borderRadius: 'var(--radius-full)',
          border: '1px solid var(--border)',
          fontWeight: 500
        }}>
          {curriculum.length} khóa học
        </span>
      </div>

      {/* Subjects Grid */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
        gap: '1.5rem' 
      }}>
        {curriculum.map(subject => (
          <SubjectCard key={subject.id} subject={subject} />
        ))}
      </div>

      {/* Footer CTA */}
      <div style={{
        marginTop: '4rem',
        padding: '3rem 2rem',
        background: 'var(--gradient-primary)',
        borderRadius: 'var(--radius-2xl)',
        textAlign: 'center',
        color: 'white',
        boxShadow: '0 12px 40px -12px rgba(46, 158, 138, 0.5)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{ position: 'relative', zIndex: 1 }}>
          <h3 style={{ fontSize: '1.6rem', fontWeight: 700, marginBottom: '0.75rem' }}>
            Bạn muốn trở thành một phần của TEKY?
          </h3>
          <p style={{ fontSize: '1.05rem', opacity: 0.9, marginBottom: '1.75rem', maxWidth: '500px', margin: '0 auto 1.75rem' }}>
            Đăng ký ngay để được học tập trong môi trường sáng tạo và vui vẻ nhất!
          </p>
          <a 
            href="https://teky.edu.vn" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              background: 'white',
              color: 'var(--primary)',
              padding: '1rem 2.25rem',
              borderRadius: 'var(--radius-full)',
              fontSize: '1.05rem',
              fontWeight: 700,
              boxShadow: 'var(--shadow-lg)',
              transition: 'all var(--transition-bounce)',
              textDecoration: 'none'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-3px) scale(1.03)';
              e.currentTarget.style.boxShadow = '0 12px 28px rgba(0, 0, 0, 0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0) scale(1)';
              e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
            }}
          >
            Đăng ký học ngay
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </div>
      </div>

      {/* Footer info */}
      <div style={{
        marginTop: '3rem',
        paddingTop: '2rem',
        borderTop: '1px solid var(--border)',
        textAlign: 'center',
        color: 'var(--text-muted)',
        fontSize: '0.875rem'
      }}>
        <p>Made with love by TEKY Students</p>
      </div>
    </div>
  );
};

export default HomePage;
