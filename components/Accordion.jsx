export default function Accordion({ id, isOpen, setIsOpen, heading, content }) {
  return (
    <>
      <button
        onClick={() => setIsOpen(id === isOpen ? null : id)}
        className="value__corden__entry"
      >
        <div className="value__corden__entry__title">{heading}</div>
        <div className="value__corden__entry__svg">
          {isOpen === id ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-minus"
            >
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
          ) : (
            <svg
              width="13"
              height="13"
              viewBox="0 0 13 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.41667 1V11.8333M1 6.41667H11.8333"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </div>
      </button>
      <div
        className="value__content"
        style={{
          maxHeight: isOpen === id ? "100%" : "0",
          display: isOpen === id ? "block" : "none",
        }}
      >
        {content}
      </div>
    </>
  );
}
