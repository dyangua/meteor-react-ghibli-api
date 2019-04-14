import React from "react";
import ImageList from "./components/image_list";
import axios from "axios";

class app extends React.Component {
  state = {
    films: []
  };

  componentWillMount() {
    axios
      .get("https://ghibliapi.herokuapp.com/films")
      .then(resp =>
        this.setState({
          films: resp.data
        })
      )
      .catch(err => console.log(err));
  }

  render() {
    const { films } = this.state;

    return (
      <div className="container">
        <h1 style={{ marginBottom: 30 }} className="text-center">
          Ghibli Movies
        </h1>

        <ImageList films={films} />
      </div>
    );
  }
}

export default app;
