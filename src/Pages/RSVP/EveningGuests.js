import { Button, ButtonGroup, Grid, MenuItem, TextField } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";

const defaultForm = {
  name: "",
  response: "I Can Attend",
  comments: "",
};

function EveningGuests() {
  // add snackbars
  const [form, setForm] = useState(defaultForm);
  const handleFormChange = (e) => {
    const { value, name } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const newRsvpEntry = {
      name: form.name,
      response: form.response,
      comments: form.comments,
    };
    axios
      .post("http://127.0.0.1:27017/weddingRsvp/add", newRsvpEntry)
      .then((res) => {
        console.log(res.data);
        setForm(defaultForm);
      });
  };
  // wedding details picture
  const fieldProps = {
    fullWidth: true,
    margin: "dense",
    variant: "outlined",
    required: true,
    onChange: handleFormChange,
  };
  return (
    <>
      <img className="rsvp-image" src="/images/7.jpg" alt="Evening guests" />
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Grid container spacing={3} alignItems="center">
              <Grid item xs={2}>
                Name:
              </Grid>
              <Grid item xs={10}>
                <TextField
                  {...fieldProps}
                  label="Please enter full name."
                  name="name"
                  value={form.name}
                />
              </Grid>
            </Grid>
            <Grid container spacing={3} alignItems="center">
              <Grid item xs={2}>
                Response:
              </Grid>
              <Grid item xs={10}>
                <TextField
                  {...fieldProps}
                  select
                  label="Please select a response."
                  name="response"
                  value={form.response}
                >
                  {["I Can Attend", "I Can Not Attend"].map((response) => (
                    <MenuItem key={response} value={response}>
                      {response}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
            </Grid>
            <Grid container spacing={3} alignItems="center">
              <Grid item xs={12}>
                <TextField
                  {...fieldProps}
                  multiline
                  rows={4}
                  label="Please add any additional comments."
                  name="comments"
                  value={form.comments}
                />
              </Grid>
            </Grid>
            <Grid container spacing={3} alignItems="center">
              <Grid item xs={12}>
                <ButtonGroup variant="contained" fullWidth>
                  <Button type="submit" color="primary">
                    Submit Form
                  </Button>
                  <Button
                    color="secondary"
                    onClick={() => setForm(defaultForm)}
                  >
                    Reset Form Fields
                  </Button>
                </ButtonGroup>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </form>
    </>
  );
}

export default EveningGuests;
