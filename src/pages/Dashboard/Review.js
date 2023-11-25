import axios from "axios";
import { signOut } from "firebase/auth";
import React from "react";
import { Button, FloatingLabel, Form } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../firebaseinit";

const Review = () => {
  const [user, loading, error] = useAuthState(auth);
  const accessToken = localStorage.getItem("accessToken");
  const handleRating = (e) => {
    e.preventDefault();
    const comments = e.target.comments.value;
    const rating = e.target.rating.value;
    const name = user.displayName;
    const email = user.email;
    const img = user.photoURL || "https://i.postimg.cc/HsrDdSnc/index.jpg";

    const data = { comments, rating, name, email, img };
    axios.post("https://manufacturer.asadjulhas.com/review", data, {
        headers: {
          authorization: `Bearer ${accessToken}`,
        },
      })
      .then((res) => {
        if (res.data.message) {
          signOut(auth);
          localStorage.removeItem("accessToken");
        } else if (res.data.insertedId) {
          toast.success("Review added successfully!", {
            position: "top-center",
          });
          e.target.reset();
        }
      });
  };

  return (
    <div>
      <h3 className="fs-6 mb-2">Add a Review</h3>
      <Form onSubmit={handleRating} className="w-50">
        <FloatingLabel controlId="floatingTextarea2" label="Comments">
          <Form.Control
            name="comments"
            as="textarea"
            placeholder="Leave a comment here"
            style={{ height: "100px" }}
          />
        </FloatingLabel>

        <Form.Group className="mb-3">
          <Form.Label>Disabled select menu</Form.Label>
          <Form.Select name="rating">
            <option disabled>Your Your rating</option>
            <option value="5">5 out of 5</option>
            <option value="4">4 out of 5</option>
            <option value="3">3 out of 5</option>
            <option value="2">2 out of 5</option>
            <option value="1">1 out of 5</option>
          </Form.Select>
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Review;
