import React, { Component } from 'react'
import fetch from 'node-fetch'

const url = 'https://jsonplaceholder.typicode.com/albums/1/photos'

class Placeholder extends Component {
  state = {
    list: []
  }
  componentDidMount(){
    fetch(url).then(response => {
      return response.json()
    }).then(data => {
      this.setState({
        list: data.slice(0, 20)
      })
    })
  }
  render(){
    return (
      <>
        {this.state.list.map(album => {
          return (
            <div>
              <p>Title: {album.title}</p>
              <p>URL: {album.url}</p>
              <img src={album.thumbnailUrl}/>
            </div>
          )
        })}
      </>
    )
  }
}

export default Placeholder;
