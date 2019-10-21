import React, { Component } from "react";
import PropTypes from "prop-types"
//import './App.css';
import { Document, Page, pdfjs } from "react-pdf"
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


export default class App extends Component {
  state = { numPages: null, pageNumber: 1 };

  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages });
  };

  nextDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages });
  };

  goToPrevPage = () =>
    this.setState(state => ({ pageNumber: state.pageNumber - 1 }));
  goToNextPage = () =>
    this.setState(state => ({ pageNumber: state.pageNumber + 1 }));

  render() {
    const { pageNumber, numPages } = this.state;

    return (
      <div>
        <nav>
          <button onClick={this.goToPrevPage}>Prev</button>
          <button onClick={this.goToNextPage}>Next</button>
        </nav>
          <div>
          <Document //file="https://www.jitec.ipa.go.jp/1_04hanni_sukiru/mondai_kaitou_2019h31_2/2019r01a_sg_am_ans.pdf"                          
              //file={url}
              //file='./Native.pdf'
              file='./React-1-25.pdf'
              onLoadSuccess={this.onDocumentLoadSuccess}>
              <Page pageNumber={pageNumber} width={600} />                
            </Document>

            <Document //file="http://192.168.168.38:3000/React-1-1.pdf"                          
              //file={url}
              //file='./React.pdf'
              //file='./React-1-25.pdf'
              onLoadSuccess={this.nextDocumentLoadSuccess}>
              <Page pageNumber={pageNumber} width={600} />                
            </Document>
          </div>
        <p>
          Page {pageNumber} of {numPages}
        </p>
      </div>
    );
  }
}