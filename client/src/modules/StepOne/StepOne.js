import React, { Component } from 'react';
import { connect } from 'react-redux';
import { King } from 'redux/actions';
import Dropzone from 'react-dropzone';
import ImageUpload from 'images/image-upload.png';
import FooterSection from 'modules/FooterSection';
import history from 'browserHistory';
import './style.scss';

class StepOne extends Component {
  onDrop = files => {
    // files.map(file => Object.assign(file, { preview: URL.createObjectURL(file) }));
    // this.props.setHatLogoImage(files[0]);

    const reader = new FileReader();
    reader.readAsDataURL(files[0]);

    reader.onabort = () => console.log('file reading was aborted');
    reader.onerror = () => console.log('file reading has failed');
    reader.onload = () => {
      const binaryStr = reader.result;
      this.props.setHatLogoImage(binaryStr);
    };
  };

  onNext = () => {
    history.push('/step2');
  };

  render() {
    const { hatLogoImage } = this.props;

    return (
      <div className="step1">
        <div className="step media-item">
          <Dropzone onDrop={this.onDrop} accept={'image/*'} multiple={false}>
            {({ getRootProps, getInputProps }) => (
              <section>
                <div {...getRootProps()}>
                  <input {...getInputProps()} />
                  <div className="media-item__ui">
                    <img src={ImageUpload} className="media-item__image" alt="ImageUplaod" />
                    <div className="media-item__label pt-3">
                      Choose a photo <br /> or drag &amp; drop here...
                    </div>
                  </div>
                </div>
              </section>
            )}
          </Dropzone>
          {hatLogoImage && (
            <img src={hatLogoImage} className="media-item__preview" alt="logoimage" />
          )}
        </div>
        <FooterSection isPrev={false} onNext={this.onNext} isDisabled={!hatLogoImage} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  hatLogoImage: state.hatLogoImage
});

const mapDispatchToProps = dispatch => ({
  setHatLogoImage: image => dispatch(King.setHatLogoImageRequest(image))
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default withConnect(StepOne);
