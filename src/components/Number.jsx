import "../styles/elements.css";

export default function Number({ className, element, onElementClick }) {
  return (
    <>
      <div
        className={`input-box ${className}`}
        onClick={() => onElementClick(element)}
      >
        <span>{element}</span>
      </div>
    </>
  );
}
