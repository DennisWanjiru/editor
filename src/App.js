import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Article } from "./Article";
import { AHEditor } from "./Editor";

class App extends Component {
  state = {
    articles: [],
    loading: false
  };

  componentDidMount() {
    this.getArticles();
  }

  getArticles = () => {
    this.setState({ loading: true });
    fetch("http://localhost:8000/api/articles/")
      .then(res => res.json())
      .then(data => {
        console.log(data);
        this.setState({ articles: data.articles, loading: false });
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    const articles = this.state.articles.map(article => (
      <Article key={article.slug} article={article} />
    ));
    return (
      <React.Fragment>
        <AHEditor />
        {articles}
      </React.Fragment>
    );
  }
}

export default App;
