import { useQuery } from "@tanstack/react-query";

function App() {
  useQuery({
    queryKey: ["config"],
    queryFn: async () => {
      const delay = new Promise((resolve) =>
        setTimeout(() => resolve(true), 2000)
      );

      await delay;

      const config = [
        ["--primary", "#0000ff"],
        ["--secondary", "#c2c2c2"],
        ["--rounded", "10rem"],
      ];

      config.forEach(([key, value]) =>
        document.documentElement.style.setProperty(key, value)
      );

      return config;
    },
  });

  return (
    <div className="bg-primary min-h-screen w-full flex flex-col items-center justify-center space-y-10">
      <h1 className="text-white text-6xl">Here's the button!</h1>
      <button className="bg-secondary border-4 border-lime-700 rounded py-6 px-12 text-xl">
        Click me!
      </button>
    </div>
  );
}

export default App;
