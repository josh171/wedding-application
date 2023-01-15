import { Grid } from "@mui/material";
import React, { useRef } from "react";
import AppContainer from "../Components/AppContainer";
import { DropzoneWrapper } from "../Components/SubComponents/DropzoneWrapper";
import AddPhotoAlternateOutlinedIcon from "@mui/icons-material/AddPhotoAlternateOutlined";

function Gallery() {
  const fileInputRef = useRef(null);
  const openFileDialog = () => {
    if (fileInputRef && fileInputRef.current) {
      const clickEvent = fileInputRef.current;
      clickEvent.click();
    }
  };
  return (
    <AppContainer>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <DropzoneWrapper onDrop={(evt) => console.log(evt)}>
            <div onClick={openFileDialog} className="Dropzone mx-auto">
              <input
                ref={fileInputRef}
                className="FileInput"
                type="file"
                accept="images/*"
                multiple
                onChange={(evt) => console.log(evt.target.files)}
              />
              <AddPhotoAlternateOutlinedIcon className="image" /> Drop your
              folder or files here!
            </div>
          </DropzoneWrapper>
        </Grid>
      </Grid>
    </AppContainer>
  );
}

export default Gallery;
