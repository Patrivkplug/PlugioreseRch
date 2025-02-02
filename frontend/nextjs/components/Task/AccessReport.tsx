import {getHost} from '../../helpers/getHost'

interface AccessReportProps {
  accessData: any; 
  report: any;
}

const AccessReport: React.FC<AccessReportProps> = ({ accessData, report }) => {
  const host = getHost();


  const copyToClipboard = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(report).catch(err => {
        console.error('Failed to copy: ', err);
      });
    } else {
      console.warn('Clipboard API is not available');
    }
  };

  const getReportLink = (dataType:string) => {
    return `${host}/${accessData[dataType]}`;
  };

  return (
    <div className="flex justify-center mt-4">
      <a id="downloadLink" 
        href={getReportLink('pdf')} 
        className="bg-purple-500 text-white active:bg-purple-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        target="_blank">
        View as PDF
      </a>
      <a id="downloadLink" 
        href={getReportLink('docx')} 
        className="bg-purple-500 text-white active:bg-purple-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        target="_blank">
        Download DocX
      </a>
    </div>
  );
}

export default AccessReport;