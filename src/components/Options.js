function Options({question}) {
  return (
    <div>
      <div className="options">
        {question.options.map((opt) => (
          <button className="btn btn-option" key={opt}>
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Options;
