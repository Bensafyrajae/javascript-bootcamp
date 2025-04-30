import React from 'react';
import BuggyCounter from './BuggyCounter';
import ErrorBoundary from './ErrorBoundary';
import LifecycleDemo from './Color';

function App() {
  return (
    <div className="App">
      <h2>Simulation 1 : Deux counters avec UNE ErrorBoundary</h2>
      <ErrorBoundary>
        <BuggyCounter />
        <BuggyCounter />
      </ErrorBoundary>

      <hr />

      <h2>Simulation 2 : Deux counters avec CHAQUE ErrorBoundary</h2>
      <ErrorBoundary>
        <BuggyCounter />
      </ErrorBoundary>
      <ErrorBoundary>
        <BuggyCounter />
      </ErrorBoundary>

      <hr />

      <h2>Simulation 3 : Un counter SANS ErrorBoundary</h2>
      <BuggyCounter />

      <hr />

      <h2>Lifecycle Demo (Exercice 2 et 3)</h2>
      <LifecycleDemo />
    </div>
  );
}

export default App;
