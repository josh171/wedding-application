import { Button, Grid, MenuItem, TextField } from "@mui/material";
import { send } from "emailjs-com";
import { useSnackbar } from "notistack";
import React, { useState } from "react";

const defaultForm = {
  name: "",
  response: "I Can Attend",
  comments: "",
};

function EveningGuests() {
  const { enqueueSnackbar } = useSnackbar();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState(defaultForm);
  const handleFormChange = (e) => {
    const { value, name } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    setLoading(true);
    e.preventDefault();
    const newRsvpEntry = {
      name: form.name,
      response: form.response,
      comments: form.comments,
    };
    send(
      "service_roji926",
      "template_q4mvn6t213782",
      newRsvpEntry,
      "_T3zCwppOv7zel0UQ"
    )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        enqueueSnackbar("Thank you for your RSVP!", { variant: "success" });
        setForm(defaultForm);
      })
      .catch((err) => {
        console.log("FAILED...", err);
        enqueueSnackbar(
          "Error when submitting RSVP! Please contact Josh or Holly!",
          { variant: "success" }
        );
      })
      .finally(() => setLoading(false));
  };
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
                  required={false}
                  label="Please add any additional comments."
                  name="comments"
                  value={form.comments}
                />
              </Grid>
            </Grid>
            <Grid container spacing={3} alignItems="center">
              <Grid item xs={12}>
                <Button
                  type="submit"
                  color="primary"
                  variant="outlined"
                  fullWidth
                  disabled={loading}
                >
                  Submit Form
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </form>
    </>
  );
}

export default EveningGuests;
