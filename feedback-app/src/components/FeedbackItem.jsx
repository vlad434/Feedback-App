import { useContext } from "react";
import { FaTimes, FaEdit } from "react-icons/fa";
import Card from "./shared/Card";
import FeedbackContext from "../context/FeebackContext";

function FeedbackItem({ item }) {
  const { deleteFeedback, editFeedback } = useContext(FeedbackContext);
  const { id, rating, text } = item;

  return (
    <Card reverse={true}>
      <div className="num-display">{rating}</div>
      <button className="close" onClick={() => deleteFeedback(id)}>
        <FaTimes color="purple" />
      </button>
      <button className="edit" onClick={() => editFeedback(item)}>
        <FaEdit color="purple" />
      </button>
      <div className="text-display">{text}</div>
    </Card>
  );
}

export default FeedbackItem;
