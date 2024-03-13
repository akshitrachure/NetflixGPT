import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import appStore from "../utils/appStore";
import { addUser, removeUser } from "../utils/userSlice";
import { NETFLIX_LOGO, USER_AVATAR } from "../utils/constants";
import { clearMovies, toggleGptSearchView } from "../utils/gptSlice";
import { SUPPORTED_LANGUAGES } from "../utils/constants";
import lang from "../utils/languageConstants";
import { toggleLanguageChange } from "../utils/configSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((appStore) => appStore.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      //onAuthStateChanged is a API from firebase which will be called whenever AuthState changes i.e. signIn,signUp,signOut
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });

    // Unsubscribe when component unmounts
    return () => unsubscribe();
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };

  const handleGptSearchVar = () => {
    dispatch(toggleGptSearchView());
    dispatch(clearMovies());
  };

  const handleLanguageChange = (e) => {
    dispatch(toggleLanguageChange(e.target.value));
  };

  return (
    <div className="absolute w-screen px-8 py-2 z-40 flex flex-col md:flex-row justify-between">
      <img
        className="w-48 mx-auto md:mx-0"
        src={NETFLIX_LOGO}
        alt="NetflixLogo"
      />

      <div className="flex justify-between p-4">
        {showGptSearch && (
          <select
            onChange={handleLanguageChange}
            className="py-1 px-4 m-1 bg-gray-950 text-white rounded-lg"
          >
            {SUPPORTED_LANGUAGES.map((l) => (
              <option key={l.key} value={l.key}>
                {l.name}
              </option>
            ))}
          </select>
        )}

        {user && (
          <button
            onClick={handleGptSearchVar}
            className="py-2 px-4 mx-4 my-1 text-white font-extrabold bg-purple-800 rounded-md"
          >
            {!showGptSearch ? "GPT Search" : "Home"}
          </button>
        )}
        {user && <img src={USER_AVATAR} alt="usericon" className="w-10 h-10" />}

        {user && (
          <button
            onClick={handleSignOut}
            className="font-extrabold pl-2 text-white text-xl"
          >
            SignOut {user && user?.displayName}
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;
