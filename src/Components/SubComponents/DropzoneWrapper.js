import React, { useState } from 'react';

export function DropzoneWrapper(props) {
  const [state, setState] = useState({ highlight: false });
  const testref = React.useRef(null);
  const { disabled = false, onDrop, className } = props;
  const handleDragOver = (event) => {
    event.preventDefault();
    if (disabled) return;
    setState({ highlight: true });
  };
  const handleDragLeave = (event) => {
    if (testref && testref.current) {
      const el = testref.current;
      const { left, right, bottom, top } = el.getBoundingClientRect();
      const { clientX, clientY } = event;
      if (clientX >= left && clientX <= right && clientY >= top && clientY <= bottom) {
        console.log('highlighting');
      } else {
        setState({ highlight: false });
      }
    }
  };
  const handleDrop = (event) => {
    event.preventDefault();
    if (disabled) return;
    if (onDrop) {
      onDrop(event);
    }
    setState({ highlight: false });
  };
  return (
    <div
      style={{ width: '100%' }}
      ref={testref}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      className={className}
    >
      <div style={{ background: state.highlight ? 'rgba(255,255,255,0.5)' : '', border: state.highlight ? 'orange 5px dashed' : '' }}>
        <div style={{ width: '100%', filter: state.highlight ? 'blur(5px)' : '' }}>{props.children}</div>
      </div>
    </div>
  );
}
