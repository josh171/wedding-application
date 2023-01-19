import { Grid, MenuItem, TextField } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";

const defaultForm = {
  name: "",
  response: "I Can Attend",
  comments: "",
};

function EveningGuests() {
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
      .post("http://localhost:5000/weddingRsvp/add", newRsvpEntry)
      .then((res) => {
        console.log(res.data);
        setForm(defaultForm);
      });
  };
  const formFields = [
    {
      name: "name",
      placeholder: "Please enter full name.",
    },
    {
      name: "response",
      placeholder: "Please select a response.",
      select: true,
      selectOptions: [
        {
          value: "I Can Attend",
          label: "I Can Attend",
        },
        {
          value: "I Can Not Attend",
          label: "I Can Not Attend",
        },
      ],
    },
    {
      name: "comments",
      placeholder: "Please write any comments.",
      multiline: true,
    },
  ];
  // wedding details picture
  // form for name, etc.
  const fieldProps = {
    fullWidth: true,
    margin: "dense",
    variant: "outlined",
    required: true,
    onChange: handleFormChange,
  };
  return (
    <>
      <img className="rsvp-image" src="/images/1.jpg" alt="RSVP Invatation" />
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
                  label="Please enter any queries."
                  name="comments"
                  value={form.comments}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </form>
    </>
  );
}

export default EveningGuests;
