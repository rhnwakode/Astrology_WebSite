import React, { useContext, FC, useEffect, useState } from 'react';
import SouthIndian from '../../components/Kundali/SouthIndian';
import { KundaliContext } from '../../contexts/kundaliContext';

// interface Props {
//   children: React.ReactNode;
// }

interface Payload {
  Payload: { AllTimeData: { SouthIndianChart: string } };
}

const KundaliPage: FC = () => {
  const kundaliContexts = useContext(KundaliContext);
  const [data, setData] = useState<Payload>();
  const [svgData, setSvgData] = useState<string>('');
  if (!kundaliContexts) {
    throw new Error(
      'ChildComponent must be used within a KundaliContextProvider',
    );
  }
  const { kundali } = kundaliContexts;
  console.log(kundali);

  useEffect(() => {
    fetch(kundali.url)
      .then((resp) => resp.json())
      .then((res) => setData(res));
  }, [kundali]);

  const formatSVG = (obj: Payload) => {
    if (obj == undefined) return <svg></svg>;

    const southSVG = obj.Payload.AllTimeData.SouthIndianChart;
    const parser = new DOMParser();
    const doc = parser.parseFromString(southSVG, 'image/svg+xml');
    console.log(doc);
    const svgElement = doc.documentElement;

    const svgString = new XMLSerializer().serializeToString(svgElement);

    // Now we can use btoa to convert the svg to base64
    const base64 = btoa(svgString);

    const imgSource = `data:image/svg+xml;base64,${base64}`;
    console.log(imgSource);
    setSvgData(imgSource);
  };

  useEffect(() => {
    if (data == undefined) return;
    formatSVG(data);
  }, [data]);

  return (
    <div>
      <h3>Kundali</h3>
      <SouthIndian svgData={svgData} />
    </div>
  );
};

export default KundaliPage;
