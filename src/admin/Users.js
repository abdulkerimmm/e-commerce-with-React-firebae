import React from "react";
import { Col, Container, Row } from "reactstrap";
import UseGetData from "../custom-hooks/UseGetData";
import { db } from "../firebase.config";
import { doc, deleteDoc } from "firebase/firestore";
import { toast } from "react-toastify";

const Users = () => {
  const { data: usersData, loading } = UseGetData("users");

  const deleteUser = async (id) => {
    await deleteDoc(doc(db, "users", id));
    toast.success("user delted!");
  };
  return (
    <Container>
      <Row>
        <Col lg="12">
          <h4 className="fw-bold">Users</h4>
        </Col>
        <Col lg="12" className="pt-5">
          <table className="table">
            <thead>
              <tr>
                <th>Image</th>
                <th>UserName</th>
                <th>Email</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <h5 className="fw-bold pt-5">Loading....</h5>
              ) : (
                usersData.map((item) => (
                  <tr key={item.uid}>
                    <td>
                      <img src={item.photoURL} alt="" />
                    </td>
                    <td>{item.displayName}</td>
                    <td>{item.email}</td>
                    <td>
                      {" "}
                      <button
                        className="btn btn-danger"
                        onClick={() => {
                          deleteUser(item.uid);
                        }}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </Col>
      </Row>
    </Container>
  );
};

export default Users;
