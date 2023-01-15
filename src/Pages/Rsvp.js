import {
  Button,
  ButtonGroup,
  CardContent,
  Dialog,
  DialogContent,
  Grid,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import AppContainer from "../Components/AppContainer";
import axios from "axios"

const dayGuestDefaultForm = {
  name: "",
  response: "",
  starter: "",
  main: "",
  dessert: "",
  comments: "",
};
const eveningGuestDefaultForm = {
  name: "",
  response: "",
  comments: "",
};

function Rsvp() {
  const [open, setOpen] = useState(true);
  const [guestType, setGuestType] = useState("");
  const dayGuestFields = [
    { name: "name", label: "Name", placeholder: "Please enter your full name" },
    {
      name: "response",
      label: "Response",
      placeholder: "Please select your response",
      select: true,
      selectOptions: [
        { value: "yes", label: `Can make it` },
        { value: "no", label: `Can't make it` },
      ],
    },
    {
      name: "starter",
      label: "Starter",
      placeholder: "Please select from the following starters",
      select: true,
      selectOptions: [
        { value: "cheese_tart", label: `Goat's Cheese Tart` },
        { value: "salmon", label: `Salmon` },
        { value: "other", label: `Other` },
      ],
    },
    {
      name: "main",
      label: "Main",
      placeholder: "Please select from the following mains",
      select: true,
      selectOptions: [
        { value: "chicken", label: "Chicken with Veg" },
        { value: "beef", label: "Beef" },
        { value: "other", label: "Other" },
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
          label: "Chocolate profiteroles with vanilla ice cream",
        },
        { value: "toffee", label: "Sticky Toffee Pudding" },
        { value: "other", label: "Other" },
      ],
    },
    {
      name: "comments",
      placeholder:
        "Please write any questions or any allergies / dietary needs you may have",
      multiline: true,
    },
  ];
  const eveningGuestFields = [
    {
      name: "name",
      label: "Name",
      placeholder: "Please enter your full name",
    },
    {
      name: "response",
      label: "Response",
      placeholder: "Please select your response",
      select: true,
      selectOptions: [
        { value: "yes", label: `Can make it` },
        { value: "no", label: `Can't make it` },
      ],
    },
    {
      name: "comments",
      placeholder:
        "Please write any questions or any allergies / dietary needs you may have",
      multiline: true,
    },
  ];
  return (
    <AppContainer>
      <Dialog open={open} onClose={() => setOpen(false)} fullWidth>
        <DialogContent>
          <Grid></Grid>
          <TextField
            select
            name="guestType"
            value={guestType}
            placeholder="Please select type of guest"
            label="Please select type of guest"
            fullWidth
            margin="dense"
            onChange={(e) => {
              setGuestType(e.target.value);
              setOpen(false);
            }}
          >
            <MenuItem value="day">All Day Guests</MenuItem>
            <MenuItem value="evening">Evening Guests</MenuItem>
          </TextField>
        </DialogContent>
      </Dialog>
      <CardContent>
        {guestType === "day" ? (
          <FormFromType
            fields={dayGuestFields}
            defaultForm={dayGuestDefaultForm}
            setOpen={setOpen}
          />
        ) : (
          <FormFromType
            fields={eveningGuestFields}
            defaultForm={eveningGuestDefaultForm}
            setOpen={setOpen}
          />
        )}
        {/* {guestType === "" ? null : "day" ? (
          <FormFromType
            fields={dayGuestFields}
            defaultForm={dayGuestDefaultForm}
            setOpen={setOpen}
          />
        ) : (
          <FormFromType
            fields={eveningGuestFields}
            defaultForm={eveningGuestDefaultForm}
            setOpen={setOpen}
          />
        )} */}
      </CardContent>
    </AppContainer>
  );
}

export default Rsvp;

function FormFromType({ fields, defaultForm, setOpen }) {
  const [form, setForm] = useState(defaultForm);
  const handleFormChange = (e) => {
    const { value, name } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault()
    const newRsvpEntry = {
      name: form.name,
      response: form.response,
      starter: form.starter,
      main: form.main,
      dessert: form.dessert,
      comments: form.comments,
    }
    axios.post('http://localhost:5000/weddingRsvp/add', newRsvpEntry)
      .then(res => console.log(res.data))
  };
  const fieldProps = {
    fullWidth: true,
    margin: "dense",
    variant: "outlined",
    required: true,
    onChange: handleFormChange,
  };
  return (
    <form onSubmit={handleSubmit} className="rsvp-form">
      <Typography variant="h6" align="center">
        Please fill out the form below, make sure to write your full name and
        fill in each field. For more info on food, please navigate to menu page.
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          {fields.map((field, index) => {
            if (field.multiline)
              return (
                <Grid container spacing={3} key={index}>
                  <Grid item xs={12}>
                    <TextField
                      multiline
                      rows={8}
                      name={field.name}
                      label={field.placeholder}
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
              <ButtonGroup variant="contained" fullWidth>
                <Button type="submit" color="primary">
                  Submit Form
                </Button>
                <Button
                  color="secondary"
                  onClick={() => {
                    setForm(defaultForm);
                    setOpen(true);
                  }}
                >
                  Reset Form Fields
                </Button>
              </ButtonGroup>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      {/* <pre>{JSON.stringify(form, null, 2)}</pre> */}
    </form>
  );
}
