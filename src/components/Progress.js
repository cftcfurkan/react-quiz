function Progress({ numQuestions, index, points, maxPoints, answer }) {
  return (
    <header className="progress">
      <progress max={numQuestions} value={index + 1} />
      <p>
        Question <strong>{index + 1}</strong> / {numQuestions}
      </p>
      <p>
        <strong>{points}</strong> / {maxPoints} points
      </p>
    </header>
  );
}

export default Progress;
