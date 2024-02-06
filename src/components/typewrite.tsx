import Typewriter from "typewriter-effect";

export default function Typewrite() {
  return (
    <Typewriter
      options={{
        strings: ["virksomheder", "projekter", "startups", "private"],
        autoStart: true,
        loop: true,
      }}
    />
  );
}
