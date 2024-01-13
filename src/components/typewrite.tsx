import Typewriter from "typewriter-effect";

export default function Typewrite() {
  return (
    <Typewriter
      options={{
        strings: ["skaber v", "World"],
        autoStart: true,
        loop: true,
      }}
    />
  );
}
