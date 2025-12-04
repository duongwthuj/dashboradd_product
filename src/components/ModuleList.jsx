const ModuleList = ({ modules, activeModuleId, onModuleSelect }) => {
  return (
    <div style={{
      background: 'var(--surface)',
      borderRadius: '1rem',
      overflow: 'hidden',
      border: '1px solid rgba(255, 255, 255, 0.05)'
    }}>
      <div style={{ padding: '1.5rem', borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}>
        <h3 style={{ fontSize: '1.2rem', color: 'var(--text)' }}>Modules</h3>
      </div>
      <div style={{ maxHeight: 'calc(100vh - 250px)', overflowY: 'auto' }}>
        {modules.map((module, index) => (
          <button
            key={module.id}
            onClick={() => onModuleSelect(module.id)}
            style={{
              width: '100%',
              textAlign: 'left',
              padding: '1rem 1.5rem',
              background: activeModuleId === module.id ? 'rgba(99, 102, 241, 0.1)' : 'transparent',
              borderLeft: activeModuleId === module.id ? '4px solid var(--primary)' : '4px solid transparent',
              color: activeModuleId === module.id ? 'var(--primary)' : 'var(--text-muted)',
              transition: 'all 0.2s',
              fontSize: '0.95rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}
            onMouseEnter={e => {
              if (activeModuleId !== module.id) {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.02)';
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
            <span style={{ opacity: 0.5, fontSize: '0.8rem', minWidth: '20px' }}>{index + 1}.</span>
            {module.name.split(': ')[1] || module.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ModuleList;
