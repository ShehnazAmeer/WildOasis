import { useDarkMode } from "../context/DarkModeContext/useDarkModeContext";

function Logo() {
  const {isDarkMode}= useDarkMode();
  return (
    <div className="text-center flex justify-center  ">
      <img
        className="w-auto h-44 "
        src={`${isDarkMode? '/logo-dark.png':'/logo-light.png'}`}
        alt='logo' />
    </div>
  );
}

export default Logo;
