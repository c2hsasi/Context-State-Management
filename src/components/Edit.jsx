import React, { useContext, useEffect, useState } from "react";
import { NotesDataContext } from "../data/NotesContext.jsx";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function Edit() {
  const { API_URL } = useContext(NotesDataContext);

  let [title, setTitle] = useState("");
  let [body, setBody] = useState("");
  let navigate = useNavigate();
  let params = useParams();

  let handleUpdate = async (e) => {
    e.preventDefault();

    try {
      let res = await axios.put(`${API_URL}/${params.id}`, {
        title: title,
        body: body,
      });
      if (res.status === 200) {
        navigate("/notes");
        toast.success("Note Updated Successfully");
      }
    } catch (error) {
      toast.error("Error occured");
    }
  };

  let getData = async (id) => {
    try {
      let res = await axios.get(`${API_URL}/${id}`);

      if (res.status === 200) {
        setTitle(res.data.title);
        setBody(res.data.body);
      }
    } catch (error) {
      toast.error("Error occured");
    }
  };

  useEffect(() => {
    if (Number(params.id)) {
      getData(Number(params.id));
    } else {
      navigate("/notes");
    }
  }, []);

  return (
    <div
      className="container-fluid col-lg-10 "
      style={{ backgroundColor: "#E3E8F8", height: "100vh" }}
    >
      <div className="row">
        <div className="col-lg-10">
          <div
            className="bg-white shadow  rounded-3 m-3"
            style={{ height: "53vh" }}
          >
            <h2 className="p-3 ">edit a Note</h2>
            <Form onSubmit={handleUpdate}>
              <Form.Group className="m-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Title</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter a title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </Form.Group>
              <Form.Group
                className="m-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label> Enter your Note</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Take a Note"
                  value={body}
                  onChange={(e) => setBody(e.target.value)}
                />
                <Button variant="primary" type="submit" className="mt-4">
                  update
                </Button>
              </Form.Group>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Edit;
