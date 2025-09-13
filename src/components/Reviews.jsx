import { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { motion, AnimatePresence } from "framer-motion";
import { FaStar } from "react-icons/fa";
import "swiper/css";
import "swiper/css/pagination";

const API_URL = "https://portfolio-backend-pzr9.onrender.com/api/review";

const ReviewSection = () => {
  const [reviews, setReviews] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);
  const [newReview, setNewReview] = useState({ name: "", message: "", rating: 0 });
  const [loading, setLoading] = useState(false);
  const [hoverRating, setHoverRating] = useState(0);
  const inputRef = useRef(null);

  // Fetch reviews
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const res = await fetch(API_URL);
        const data = await res.json();
        setReviews(data);
      } catch (err) {
        console.error("❌ Error fetching reviews:", err);
      }
    };
    fetchReviews();
  }, []);

  // Modal accessibility
  useEffect(() => {
    if (showModal && inputRef.current) inputRef.current.focus();
    const handleEsc = (e) => {
      if (e.key === "Escape" && showModal) setShowModal(false);
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [showModal]);

  // Thank you modal auto-close
  useEffect(() => {
    if (showThankYou) {
      const tid = setTimeout(() => setShowThankYou(false), 2000);
      return () => clearTimeout(tid);
    }
  }, [showThankYou]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewReview({ ...newReview, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!newReview.name || !newReview.message || !newReview.rating) {
      alert("Please fill in all fields.");
      return;
    }
    setLoading(true);
    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newReview),
      });
      if (res.ok) {
        const savedReview = await res.json();
        setReviews([savedReview, ...reviews]);
        setNewReview({ name: "", message: "", rating: 0 });
        setShowModal(false);
        setHoverRating(0);
        setShowThankYou(true);
      } else {
        alert("Failed to submit review.");
      }
    } catch {
      alert("Error submitting review.");
    } finally {
      setLoading(false);
    }
  };

  // Animations for cards and modal
  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.94 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 80, damping: 17 },
    },
  };
  const modalVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 50 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.3 } },
    exit: { opacity: 0, scale: 0.9, y: 50, transition: { duration: 0.2 } },
  };
  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.2 } },
    exit: { opacity: 0, transition: { duration: 0.2 } },
  };

  return (
    <section className="py-14 px-2 sm:px-4 md:px-10 bg-gradient-to-b from-slate-900 to-gray-900 min-h-screen text-white relative overflow-x-hidden">
      {/* Review display (blur when modal open) */}
      <div className={`max-w-4xl mx-auto transition duration-300 ${showModal ? "blur-sm pointer-events-none select-none" : ""}`}>
        <motion.h2
          initial={{ opacity: 0, y: -20, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.12 }}
          className="text-center text-3xl xs:text-4xl sm:text-5xl font-extrabold mb-10 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent drop-shadow-lg"
        >
          What People Say
        </motion.h2>
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{ delay: 3400, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1 },
            900: { slidesPerView: 2 },
            1280: { slidesPerView: 3 },
          }}
        >
          {reviews.map((review, idx) => (
            <SwiperSlide key={review._id || idx} className="pb-12">
              <motion.div
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ scale: 1.04, boxShadow: "0 0 30px #06b6d4" }}
                className="group bg-gradient-to-br from-gray-800/80 via-gray-900/70 to-slate-900/90 border border-cyan-400/20 p-7 rounded-3xl mx-3 shadow-xl max-w-md min-h-[230px] flex flex-col items-center justify-between transition-all duration-200"
              >
                <div className="flex justify-center mb-2">
                  {[...Array(5)].map((_, i) =>
                    <FaStar
                      key={i}
                      className={i < review.rating ? "text-yellow-400" : "text-gray-600"}
                      size={22}
                    />
                  )}
                </div>
                <p className="italic text-gray-200 text-base sm:text-lg mb-4">
                  "{review.message}"
                </p>
                <h4 className="font-semibold text-cyan-400 text-lg">- {review.name}</h4>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="flex justify-center mt-8">
          <button
            onClick={() => setShowModal(true)}
            className="flex items-center gap-2 px-7 py-2.5 sm:px-8 sm:py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-bold rounded-full shadow-md hover:scale-105 hover:from-cyan-300 hover:to-blue-400 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          >
            <span className="text-lg">＋</span> Add Review
          </button>
        </div>
      </div>
      {/* REVIEW MODAL */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center z-50 px-2 bg-black/60"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={overlayVariants}
            onClick={() => !loading && setShowModal(false)}
            aria-modal="true"
            role="dialog"
          >
            <motion.div
              variants={modalVariants}
              className="w-full max-w-md bg-gray-900 rounded-3xl shadow-2xl p-7 relative"
              onClick={e => e.stopPropagation()}
            >
              <h3 className="text-2xl font-bold text-center mb-4 text-cyan-400">Leave a Review</h3>
              <form onSubmit={handleSubmit} className="space-y-5">
                <input
                  type="text"
                  ref={inputRef}
                  name="name"
                  value={newReview.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full px-4 py-2 rounded-lg bg-gray-800 border-none ring-1 ring-cyan-400/40 focus:ring-2 focus:ring-cyan-400 outline-none"
                  disabled={loading}
                  autoComplete="off"
                />
                <textarea
                  name="message"
                  value={newReview.message}
                  onChange={handleChange}
                  placeholder="Your Review"
                  className="w-full px-4 py-2 rounded-lg bg-gray-800 border-none ring-1 ring-cyan-400/40 focus:ring-2 focus:ring-cyan-400 outline-none"
                  rows={4}
                  disabled={loading}
                />
                {/* Animated Star Rating */}
                <div className="flex items-center gap-2 justify-center py-1">
                  {[1,2,3,4,5].map(num => (
                    <button
                      type="button"
                      key={num}
                      onMouseEnter={() => setHoverRating(num)}
                      onMouseLeave={() => setHoverRating(0)}
                      onClick={() => setNewReview(prev => ({ ...prev, rating: num }))}
                      className="transition-transform duration-100"
                      aria-label={`${num} Star${num > 1 ? "s" : ""}`}
                      tabIndex={0}
                    >
                      <FaStar
                        size={28}
                        className={`
                          drop-shadow
                          transition-colors duration-200
                          ${num <= (hoverRating || newReview.rating) ? "text-yellow-400 scale-110" : "text-gray-600"}
                        `}
                      />
                    </button>
                  ))}
                </div>
                {/* Modal Actions */}
                <div className="flex flex-row-reverse gap-3 pt-3">
                  <button
                    type="submit"
                    disabled={loading}
                    className="px-6 py-2 bg-gradient-to-r from-cyan-400 to-blue-500 text-black rounded-full font-bold shadow hover:from-cyan-300 hover:to-blue-400 hover:scale-105 transition-all duration-200 disabled:opacity-70"
                  >
                    {loading ? "Submitting..." : "Submit"}
                  </button>
                  <button
                    type="button"
                    disabled={loading}
                    onClick={() => setShowModal(false)}
                    className="px-4 py-2 bg-gray-700 rounded-full text-white hover:bg-gray-600 transition"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* THANK YOU POPUP */}
      <AnimatePresence>
        {showThankYou && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 40 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 40 }}
              className="bg-white/80 text-cyan-500 py-7 px-10 rounded-3xl shadow-2xl text-2xl font-black text-center"
            >
              Thank you for your valuable time! ❤️
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ReviewSection;
