export const StyledJsx = () => {
  return (
    <>
      <div className="container">
        <p className="title">- Styled JSX -</p>
        <button className="button">FIGHT!</button>
      </div>
      <style jsx="true">{`
        .container {
          border: solid 2px;
          border-radius: 20px;
        }
        .title {
          margin: 0;
          color: #3d84a8;
        }
        .button {
          background-color: #abedd8;
          &:hover {
            background-color: #3d84a8;
          }
        }
      `}</style>
    </>
  );
};
