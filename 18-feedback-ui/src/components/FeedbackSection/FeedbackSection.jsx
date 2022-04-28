import "./FeedbackSection.css";
import { Link } from "react-router-dom";
import ReviewForm from "../ReviewForm/ReviewForm";
import FeedbackCard from "../FeedbackCard/FeedbackCard";
import FeebackStats from "../FeebackStats/FeebackStats";
import Loading from "../Loading/Loading";
import { FeedbackContextHook } from "../Context/FeedbackContext";
import { FaQuestionCircle } from "react-icons/fa";

const FeedbackSection = () => {
	const { isLoading, feedback } = FeedbackContextHook();

	return (
		<section className="feedback-section">
			<Link to="about">
				{" "}
				<FaQuestionCircle className="about-btn" />
			</Link>

			<ReviewForm />
			<FeebackStats />
			{isLoading && <Loading />}
			{!isLoading &&
				feedback?.map((item) => {
					return <FeedbackCard key={item.id} {...item} />;
				})}
		</section>
	);
};

export default FeedbackSection;
