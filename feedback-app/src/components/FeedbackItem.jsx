import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import Card from "./shared/Card";

function FeedbackItem({ item, handleDelete }) {
  const { id, rating, text } = item;

  return (
    <Card reverse={true}>
      <div className="num-display">{rating}</div>
      <button className="close" onClick={() => handleDelete(id)}>
        <FaTimes color="purple" />
      </button>
      <div className="text-display">{text}</div>
    </Card>
  );
}

export default FeedbackItem;
