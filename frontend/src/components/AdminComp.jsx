import React, { Component } from "react";
import { Paper } from "@mui/material";
import "bootstrap/dist/css/bootstrap.min.css";
import { storage } from "../firebase";

export default class AdminComp extends Component {
  constructor(props) {
    super(props);

    this.state = {

      image: null,

    };

    this.changeFileHandler = this.changeFileHandler.bind(this); 
    this.uploadFileHandler = this.uploadFileHandler.bind(this);

  }

  changeFileHandler = (e) => {
    if (e.target.files[0]) {
      const image = e.target.files[0];
      this.setState(() => ({ image }));
      const viewImage = e.target.files[0];
      const imageHeight = Math.round((viewImage.width * 9) / 16);
      const imageWidth = viewImage.width;
      this.setState(() => ({
        viewImage: URL.createObjectURL(e.target.files[0]),
      }));
    }
  };

  uploadFileHandler = () => {
    const { image } = this.state;
    const uploadTask = storage.ref(`uploads/${image.name}`).put(image);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        this.setState({ progress });
      },
      (error) => {
        console.log(error);
      },
      () => {
        storage
          .ref("uploads")
          .child(image.name)
          .getDownloadURL()
          .then((url) => {
            console.log(url);
            this.setState({ url });
          });
      }
    );
  };

  render() {
    return (
      <div>
        <h2 className="text-center p-2 div">Upload File To Firebase</h2>
        <div className="div" align="left">
          <Paper elevation={3} className="div p-3">
            <form>
              <input type="file" onChange={this.changeFileHandler}>              
              </input>
            </form>
            <div align="left" className="div">
              
              <button
                    className="btn btn-success m-2"
                    onClick={this.uploadFileHandler}
                  >
                    Upload
                  </button>
                <progress
                  value={this.state.progress}
                  max="100"
                  variant="information"
                />
              
            </div>
            <div>
            </div>
          </Paper>
        </div>
      </div>
    );
  }
}