function NextQuestion({ dispatch, answer }) {
  if (answer === null) return null;

  return (
    <div>
      {" "}
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "nextQuestion" })}
      >
        Next
      </button>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "prevQuestion" })}
      >
        Previous
      </button>
    </div>
  );
}

export default NextQuestion;
