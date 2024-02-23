import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import YouTube from "react-youtube";
// import { useAuth0 } from "@auth0/auth0-react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAuth } from "../mystore/auth";
// Set the app element
Modal.setAppElement("#root");

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    
  },
};

function ViewMovie({ movieId }) {
  const { isLoggedIn } = useAuth();
  // const { isAuthenticated } = useAuth0();
  const [videos, setVideos] = useState(["no videos"]);
  const [modalIsOpen, setIsOpen] = useState(false);

  const getVideos = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=b1f0abf698a6e6e6b9c3c559900fe4ca&language=en-US`
      );
      const json = await response.json();
      setVideos(json.results);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getVideos();
  }, []);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <div>
        <button
          className="w-[135px]"
          onClick={() =>
            isLoggedIn ? openModal() : toast.warning("Please login")
          }
        >
          Watch Now
        </button>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
        >
          {videos.length > 0 && <YouTube videoId={videos[0].key} />}
          {/* {videos.length > 0 ? <YouTube videoId={videos[0].key} /> : <p>No videos available</p>} */}
        </Modal>
        <ToastContainer />
      </div>
    </>
  );
}

export default ViewMovie;
