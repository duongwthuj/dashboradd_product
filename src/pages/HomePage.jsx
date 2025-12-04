import { curriculum } from '../data/curriculum';
import SubjectCard from '../components/SubjectCard';

const HomePage = () => {
  return (
    <div style={{ padding: 'var(--spacing-xl)', maxWidth: '1400px', margin: '0 auto' }}>
      <div style={{ textAlign: 'center', marginBottom: 'var(--spacing-2xl)', paddingTop: 'var(--spacing-2xl)' }}>
        <div style={{ marginBottom: 'var(--spacing-md)' }}>
          <span style={{ 
            fontSize: '0.875rem', 
            fontWeight: 600, 
            textTransform: 'uppercase', 
            letterSpacing: '0.1em',
            color: 'var(--primary-light)',
            padding: '0.5rem 1rem',
            background: 'rgba(99, 102, 241, 0.1)',
            borderRadius: 'var(--radius-full)',
            border: '1px solid rgba(99, 102, 241, 0.2)'
          }}>
            Nền tảng học tập
          </span>
        </div>
        <h1 className="gradient-text" style={{ 
          fontSize: 'clamp(2.5rem, 5vw, 4rem)', 
          fontWeight: 800, 
          marginBottom: 'var(--spacing-lg)',
          lineHeight: 1.1
        }}>
          Student Product Showcase
        </h1>
        <p style={{ 
          fontSize: '1.25rem', 
          color: 'var(--text-secondary)', 
          maxWidth: '700px', 
          margin: '0 auto',
          lineHeight: 1.6
        }}>
          Khám phá những dự án sáng tạo và bài thuyết trình xuất sắc từ các học sinh tài năng
        </p>
      </div>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
        gap: 'var(--spacing-xl)' 
      }}>
        {curriculum.map(subject => (
          <SubjectCard key={subject.id} subject={subject} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
