import React, { useState, useEffect } from "react";
import { X, Star } from "lucide-react";
import { toast } from "sonner";
import { useSendReviewMutation } from "../redux/features/user/userApi";

const FeedbackModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);

  // RTK Query mutation hook
  const [sendReview, { isLoading }] = useSendReviewMutation();

  // Timer effect for 1-hour popup
  useEffect(() => {
    // Check if modal has been shown in this session
    const lastShownTime = localStorage.getItem("feedbackModalLastShown");
    const now = Date.now();

    if (!lastShownTime || now - parseInt(lastShownTime) >= 3600000) {
      // 3600000ms = 1 hour
      const timer = setTimeout(() => {
        setIsOpen(true);
        localStorage.setItem("feedbackModalLastShown", now.toString());
      }, 1000); // Show after 1 second for testing, change to 3600000 for 1 hour

      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    setComment("");
    setRating(0);
    setHoveredRating(0);
  };

  const handleSubmit = async () => {
    if (!comment || rating === 0) {
      toast.error("Please provide both a comment and a rating");
      return;
    }

    try {
      const result = await sendReview({
        comment,
        rating,
      });

      if (result.error) {
        toast.error(result.error.data?.message || "Failed to submit feedback.");
        return;
      }

      if (result.data?.status) {
        toast.success("Thank you for your feedback!");
        handleClose();
      } else {
        toast.error(result.data?.message || "Failed to submit feedback.");
      }
    } catch (err) {
      console.error("Failed to send review:", err);
      toast.error("Failed to submit feedback. Please try again.");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full mx-4 p-6 animate-in fade-in">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-gray-900">Share Your Feedback</h2>
          <button
            onClick={handleClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {/* Description */}
        <p className="text-gray-600 mb-6">
          Help us improve by sharing your experience with Planeer
        </p>

        {/* Rating Section */}
        <div className="mb-6">
          <label className="block text-gray-900 font-medium mb-3">
            How would you rate your experience?
          </label>
          <div className="flex gap-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                onClick={() => setRating(star)}
                onMouseEnter={() => setHoveredRating(star)}
                onMouseLeave={() => setHoveredRating(0)}
                className="transition-transform hover:scale-110"
              >
                <Star
                  size={32}
                  className={`${
                    star <= (hoveredRating || rating)
                      ? "fill-yellow-400 text-yellow-400"
                      : "text-gray-300"
                  } transition-colors`}
                />
              </button>
            ))}
          </div>
        </div>

        {/* Comment Section */}
        <div className="mb-6">
          <label className="block text-gray-900 font-medium mb-2">
            Your Feedback
          </label>
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Tell us what you think..."
            rows="4"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
          />
        </div>

        {/* Buttons */}
        <div className="flex gap-3">
          <button
            onClick={handleClose}
            className="flex-1 px-4 py-3 border border-gray-300 text-gray-900 font-medium rounded-lg hover:bg-gray-50 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            disabled={isLoading}
            className={`flex-1 px-4 py-3 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg transition-colors ${
              isLoading ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {isLoading ? "Submitting..." : "Submit"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeedbackModal;
