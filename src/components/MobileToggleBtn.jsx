function MobileToggleBtn({ handleTggl }) {
  return (
    <div className="mobile-tggl-btn">
      <button
        onClick={() => {
          handleTggl();
        }}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
  );
}

export default MobileToggleBtn;
