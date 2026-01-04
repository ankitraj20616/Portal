import * as ReactRouterDOM from "react-router-dom";

const { useNavigate } = ReactRouterDOM;

export const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-4xl w-full mx-auto animate-fadeIn">
      <div className="bg-[#24262d] rounded-lg shadow-2xl p-12 text-center transform transition-all duration-500 hover:scale-[1.01]">
        <h2 className="text-4xl font-bold mb-8 text-white">
          Stock Prediction App
        </h2>

        <p className="text-gray-300 text-lg leading-relaxed mb-10 max-w-3xl mx-auto">
          This stock prediction application utilizes machine learning
          techniques, specifically employing Keras, TensorFlow, and LSTM models,
          integrated within the Django framework. It forecasts future stock
          prices by analyzing 100-day and 200-day moving averages, essential
          indicators widely used by stock analysts to inform trading and
          investment decisions.
        </p>

        <button
          onClick={() => navigate("/login")}
          className="px-8 py-3 bg-cyan-500 text-white text-lg font-semibold rounded-md shadow-lg shadow-cyan-500/20 hover:bg-cyan-600 hover:shadow-cyan-500/40 transform active:scale-95 transition-all duration-200"
        >
          Login now
        </button>
      </div>
    </div>
  );
};
