import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { Sketches } from "./pages/Sketches";
import { Characters } from "./pages/Characters";
import { Storyboards } from "./pages/Storyboards";
import { Contact } from "./pages/Contact";
import { Resume } from "./pages/Resume";
import { NotFound } from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "sketches", Component: Sketches },
      { path: "characters", Component: Characters },
      { path: "storyboards", Component: Storyboards },
      { path: "resume", Component: Resume },
      { path: "contact", Component: Contact },
      { path: "*", Component: NotFound },
    ],
  },
]);