import { Button, ButtonGroup, Grid, MenuItem, TextField } from "@mui/material";
import axios from "axios";
import React from "react";
import { useState } from "react";

const defaultForm = {
  name: "",
  response: "",
  starter: "",
  main: "",
  dessert: "",
  comments: "",
};

function DayGuests() {
  const [response, setResponse] = useState("I Can Attend");
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
      response: response,
      starter: form.starter,
      main: form.main,
      dessert: form.dessert,
      comments: form.comments,
    };
    axios
      .post("http://localhost:27017/weddingRsvp/add", newRsvpEntry)
      .then((res) => {
        console.log(res.data);
        setForm(defaultForm);
      });
  };
  return (
    <>
      <img className="rsvp-image" src="/images/2.jpg" alt="RSVP Menu" />
      <TextField
        select
        fullWidth
        margin="dense"
        label="Please select response"
        name={response}
        onChange={(e) => setResponse(e.target.value)}
      >
        {["I can attend", "I can't attend"].map((response) => (
          <MenuItem key={response} value={response}>
            {response}
          </MenuItem>
        ))}
      </TextField>
      {response === "I can attend" ? (
        <Form
          form={form}
          setForm={setForm}
          handleSubmit={handleSubmit}
          handleFormChange={handleFormChange}
        />
      ) : response === "I can't attend" ? (
        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                name="name"
                margin="dense"
                fullWidth
                placeholder="Please enter your full name"
                value={form.name}
                onChange={handleFormChange}
              />
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                multiline
                fullWidth
                rows={8}
                margin="dense"
                name="comments"
                placeholder="Please write down any comments (optional)."
                value={form.comments}
                onChange={handleFormChange}
              />
            </Grid>
            <Grid item xs={12}>
              <ButtonGroup variant="outlined" fullWidth>
                <Button type="submit" color="primary">
                  Submit Form
                </Button>
                <Button color="secondary" onClick={() => setForm(defaultForm)}>
                  Reset Form Fields
                </Button>
              </ButtonGroup>
            </Grid>
          </Grid>
        </form>
      ) : null}
    </>
  );
}

export default DayGuests;

function Form({ form, setForm, handleSubmit, handleFormChange }) {
  const formFields = [
    {
      name: "name",
      label: "Name",
      placeholder: "Please enter your full name.",
    },
    {
      name: "starter",
      label: "Starter",
      placeholder: "Please select from the following starters",
      select: true,
      selectOptions: [
        { value: "cheese_tart", label: `Goat's Cheese & Shallot Tart` },
        { value: "salmon", label: `Smoked Salmon` },
        {
          value: "other",
          label: "Other: Please specify in comments",
        },
      ],
    },
    {
      name: "main",
      label: "Main",
      placeholder: "Please select from the following mains",
      select: true,
      selectOptions: [
        { value: "chicken", label: "Roast Chicken Breast" },
        { value: "beef", label: "Tornedo of Beef" },
        { value: "other", label: "Other: Please specify in comments" },
      ],
    },
    {
      name: "dessert",
      label: "Desserts",
      placeholder: "Please select from the following desserts",
      select: true,
      selectOptions: [
        {
          value: "profiteroles",
          label: "Chocolate profiteroles with chocolate sauce",
        },
        { value: "toffee", label: "Sticky Toffee Pudding" },
        { value: "other", label: "Other: Please specify in comments" },
      ],
    },
    {
      name: "comments",
      multiline: true,
    },
  ];
  const fieldProps = {
    fullWidth: true,
    margin: "dense",
    variant: "outlined",
    required: true,
    onChange: handleFormChange,
    size: "small",
  };
  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          {formFields.map((field, index) => {
            if (field.multiline)
              return (
                <Grid container spacing={3} key={index}>
                  <Grid item xs={12}>
                    <TextField
                      multiline
                      rows={8}
                      name={field.name}
                      placeholder="Please write any questions or any allergies / dietary needs you may have, whether you request vegatarian/vegan/children meal options."
                      value={form[field.name]}
                      {...fieldProps}
                    />
                  </Grid>
                </Grid>
              );
            if (field.select)
              return (
                <Grid container spacing={3} alignItems="center" key={index}>
                  <Grid item xs={2}>
                    {field.label}:
                  </Grid>
                  <Grid item xs={10}>
                    <TextField
                      select
                      name={field.name}
                      label={field.placeholder}
                      value={form[field.name]}
                      {...fieldProps}
                    >
                      {field.selectOptions.map((option, index) => {
                        return (
                          <MenuItem key={index} value={option.value}>
                            {option.label}
                          </MenuItem>
                        );
                      })}
                    </TextField>
                  </Grid>
                </Grid>
              );
            return (
              <Grid container spacing={3} alignItems="center" key={index}>
                <Grid item xs={2}>
                  {field.label}:
                </Grid>
                <Grid item xs={10}>
                  <TextField
                    name={field.name}
                    label={field.placeholder}
                    value={form[field.name]}
                    {...fieldProps}
                  />
                </Grid>
              </Grid>
            );
          })}
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <ButtonGroup variant="outlined" fullWidth>
                <Button type="submit" color="primary">
                  Submit Form
                </Button>
                <Button color="secondary" onClick={() => setForm(defaultForm)}>
                  Reset Form Fields
                </Button>
              </ButtonGroup>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </form>
  );
}
