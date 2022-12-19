import React, { Component } from 'react';
import { SearchBar } from './search-bar/search-bar';
import { ImageGallery } from './gallery/image-gallery';
import { ModalWindow } from './modal/modal';

export class App extends Component {
  state = {
    searchRequest: '',
    showModal: false,
    modalPicture: {},
  };

  onFormSubmit = data => {
    this.setState({
      searchRequest: data,
    });
  };

  toggleModal = (() => {
    this.setState(({ showModal }) => ({
      showModal: !showModal
    }));
    console.log(this.state.showModal);
  })
  
  onPictureClick = data => {
    this.toggleModal();
    this.setState({
      modalPicture: data
    })
  }

  render() {
    return (
      <>
        <SearchBar onSubmitHandler={this.onFormSubmit}></SearchBar>
        <ImageGallery request={this.state.searchRequest} openModal={this.onPictureClick}></ImageGallery>
        {this.state.showModal && (
          <ModalWindow onClose={this.toggleModal}>
            <img
              src={this.state.modalPicture.fullSize}
              alt={this.state.modalPicture.tags}
              
            />
          </ModalWindow>
        )}
      </>
    );
  }
}
