import React, { useContext } from 'react';
import { Button } from '@chakra-ui/react';
import UserDataCollect from '../Components/UserDataCollect/UserDataCollect';
import './BuilderArea.css';
import Footer from '../Components/Footer/Footer';
import ResumeContext from '../Context/ResumeContext';
import PropagateLoader from 'react-spinners/PropagateLoader';
import domtoimage from 'dom-to-image';
import jsPDF from 'jspdf';

const BuilderArea = (props) => {
  const { showComponent, setShowComponent, loading, handlePrint } = useContext(ResumeContext);

  const handleSelectNewTemplate = () => {
    setShowComponent(!showComponent);
  };

  const handleDownload = () => {
    const resumeContainer = document.getElementById('section-to-print');

    domtoimage
      .toPng(resumeContainer)
      .then((dataUrl) => {
        const pdf = new jsPDF();
        pdf.addImage(dataUrl, 'PNG', 0, 0, 210, 297);
        pdf.save('resume.pdf');
      })
      .catch((error) => {
        console.error('Error generating PDF:', error);
      });
  };

  return (
    <>
      {loading && <PropagateLoader id="spinner" color="#319795" size={30} />}

      <div id="main-box" className="d-flex justify-content-between flex-wrap mt-4 mx-2">
        <UserDataCollect />
        <div id="theme-box-border">{props.theme}</div>
      </div>
      <div className="d-flex flex-wrap justify-content-center custom-div">
        <Button className="mx-2 my-5" colorScheme={'teal'} variant={'outline'} onClick={handlePrint}>
          Print
        </Button>
        <Button className="mx-2 my-5" colorScheme={'teal'} variant={'outline'} onClick={handleDownload}>
          Download
        </Button>
        <Button
          className="mx-2 my-5"
          colorScheme={'teal'}
          variant={'outline'}
          onClick={handleSelectNewTemplate}
        >
          Select Another Template
        </Button>
      </div>
      <Footer />
    </>
  );
};

export default BuilderArea;
