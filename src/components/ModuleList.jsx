const ModuleList = ({ modules, activeModuleId, onModuleSelect }) => {
  return (
    <div style={{
      background: 'var(--surface)',
      borderRadius: 'var(--radius-xl)',
      overflow: 'hidden',
      border: '1px solid var(--border)',
      boxShadow: 'var(--shadow-md)'
    }}>
      <div style={{ 
        padding: 'var(--spacing-lg)', 
        borderBottom: '1px solid var(--border)',
        background: 'rgba(99, 102, 241, 0.05)'
      }}>
        <h3 style={{ 
          fontSize: '1.125rem', 
          color: 'var(--text)',
          fontWeight: 700,
          display: 'flex',
          alignItems: 'center',
          gap: 'var(--spacing-sm)'
        }}>
          <span>📚</span> Danh sách học phần
        </h3>
      </div>
      <div style={{ maxHeight: 'calc(100vh - 250px)', overflowY: 'auto' }}>
        {modules.map((module, index) => (
          <button
            key={module.id}
            onClick={() => onModuleSelect(module.id)}
            style={{
              width: '100%',
              textAlign: 'left',
              padding: 'var(--spacing-md) var(--spacing-lg)',
              background: activeModuleId === module.id ? 'rgba(99, 102, 241, 0.15)' : 'transparent',
              borderLeft: activeModuleId === module.id ? '4px solid var(--primary)' : '4px solid transparent',
              color: activeModuleId === module.id ? 'var(--primary-light)' : 'var(--text-muted)',
              transition: 'all var(--transition-base)',
              fontSize: '0.9rem',
              display: 'flex',
              alignItems: 'center',
              gap: 'var(--spacing-sm)',
              fontWeight: activeModuleId === module.id ? 600 : 500
            }}
            onMouseEnter={e => {
              if (activeModuleId !== module.id) {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)';
                e.currentTarget.style.color = 'var(--text)';
              }
            }}
            onMouseLeave={e => {
              if (activeModuleId !== module.id) {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.color = 'var(--text-muted)';
              }
            }}
          >
            <span style={{ 
              opacity: 0.6, 
              fontSize: '0.75rem', 
              minWidth: '24px',
              fontWeight: 700,
              color: activeModuleId === module.id ? 'var(--primary)' : 'inherit'
            }}>
              {String(index + 1).padStart(2, '0')}
            </span>
            <span style={{ flex: 1 }}>
              {module.name.split(': ')[1] || module.name}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ModuleList;
