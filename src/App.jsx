import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navigate } from "react-router-dom";
import Sidebar from "./components/Sidebar.jsx";
import Notes from "./components/Notes.jsx";
import Edit from "./components/Edit.jsx";
import NotesContext from "./data/NotesContext.jsx";

function App() {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <BrowserRouter>
            <Routes>
              <Route
                path="/notes"
                element={
                  <NotesContext>
                    <Sidebar />
                    <Notes />
                  </NotesContext>
                }
              />

              <Route
                path="/edit/:id"
                element={
                  <NotesContext>
                    <Sidebar />
                    <Edit />\
                  </NotesContext>
                }
              />

              <Route path="/*" element={<Navigate to="/notes" />} />
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </>
  );
}

export default App;
