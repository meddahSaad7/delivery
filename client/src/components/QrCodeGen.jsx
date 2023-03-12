import React,{useEffect,useState} from 'react'
import QrCode from "qrcode";
import styled from 'styled-components';
import { Image,StyleSheet } from '@react-pdf/renderer';
const styles = StyleSheet.create({
  image: {
    width:'60px',
    height:'60px'
  },
});
function QrCodeGen({str}) {
    const [urlQrCode, setUrlQrCode] = useState("");
    useEffect(() => {
      QrCode.toDataURL(str, (err, data) => {
        if (err) {
          return console.log(err);
        }
        setUrlQrCode(data);
      });
    }, []);
    return (
        <Image src={urlQrCode} style={styles.image}/>
    );
}

export default QrCodeGen