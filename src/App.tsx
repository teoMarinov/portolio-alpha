import { useEffect, useRef, useState } from "react";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  const scrollToRef = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: "smooth",
    });
  };

  const redRef = useRef(null);
  const greenRef = useRef(null);
  const blueRef = useRef(null);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {loading ? (
        <div>Loading</div>
      ) : (
        <div>
          <div className=" space-x-1">
            <span className="text-red-200" onClick={() => scrollToRef(redRef)}>
              red
            </span>
            <span
              className="text-green-200"
              onClick={() => scrollToRef(greenRef)}
            >
              green
            </span>
            <span
              className="text-blue-200"
              onClick={() => scrollToRef(blueRef)}
            >
              blue
            </span>
          </div>
          <div ref={redRef} className="w-full h-[100vh] bg-red-900">
            red
          </div>
          <div ref={greenRef} className="w-full h-[100vh] bg-green-900">
            green
          </div>
          <div ref={blueRef} className="w-full h-[100vh] bg-blue-900">
            blue
          </div>

          <button
            onClick={scrollToTop}
            className="fixed bottom-4 right-4 bg-gray-800 text-white px-4 py-2 rounded-md"
          >
            Scroll to Top
          </button>
        </div>
      )}
    </>
  );
}
