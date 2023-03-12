import React, { useState,useEffect } from 'react'
import styled from 'styled-components'
import { Page, Text,View,Line, Image, Document, StyleSheet } from "@react-pdf/renderer";
import QrCodeGen from './components/QrCodeGen';
import axios from 'axios';
const styles = StyleSheet.create({
  page: { flexDirection: "column" },
  section: { fontSize: "25px" },
  view: {
    width: "50%",
    height: "100%",
    padding: "10px",
    border: "1px dotted #b2b2b2",
  },
  top: {
    width: "100%",
    flexDirection: "row",
    height: "50%",
    justifyContent: "space-between",
  },
  qrCode: { width: "50px",height:'50px' },
  imgs: { flexDirection: "row", height: "50px",justifyContent:'space-between',alignItems:'center' },
  ETitle: { fontSize: "15px",width:'50%',height:'20px',alignItems:'center',justifyContent:'center' ,backgroundColor:'green',color:'white'},
  logo:{width:'50%',height:'50%'},
  qrDiv: {
    flexDirection: "row",
    height: "50px",
    marginTop: "10px",
  },
  qrTitleDiv: { flexDirection: "column" },
  qrTitle: { fontSize: "10px", marginLeft: "5px" },
  userInfo: {
    height: "90px",
    marginTop: "10px",
    flexDirection: "row",
  },
  leftUserInfo: { width: "50%" },
  rightUserInfo: { width: "50%" },
  userInfoTitle: { fontSize: "15px" },
  userInfoText: { fontSize: "10px", marginTop: "5px" },
  Num: { fontSize: "60px", marginLeft: "50%" },
  RightText: { fontSize: "15px", marginLeft: "20%" },
  EXTitle: { fontSize: "15px" },
  Table: {
    height: "70px",
    width: "100%",
    marginTop: "10px",
    border: "1px solid black",
  },
  topTable: {
    height: "50%",
    borderBottom: "1px solid black",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  RightText: { fontSize: "15px" },
  bottomTable: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: "100%",
  },
  barCode: { width: "100%", height: "30px", marginTop: "10px" },
  barCode2: { width: "50%", height: "10px", marginTop: "10px" },
  barCodeAndSig: { fontSize: "10px" },
  barCodeAndSig: { flexDirection: "row", justifyContent: "space-between" },
  txt: { fontSize: "8px", width: "60%", marginTop: "5px" },
});
function PdfFile({str}) {
  const [newPackage,setNewPackage]=useState({})
  const [status,setStatus]=useState(null)
  useEffect(()=>{
    const getProduct= async()=>{
      "use strict";
      try{
        const res=await axios.get(`http://localhost:3001/server/package/getPackage/${str}`)
        setNewPackage(res.data)
        setStatus(res.status)
        console.log(res.data,'data..........')
      }catch(err){
        console.log(err)
      }
    }
    getProduct()
  },[status])
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.top}>
          <View style={styles.view}>
            <View style={styles.imgs}>
              <Image style={styles.logo} src="/images/logo.png" />
              <Text style={styles.ETitle}>E-COMMERCE</Text>
            </View>
            <View style={styles.qrDiv}>
              <QrCodeGen str={str} />
              <View style={styles.qrTitleDiv}>
                <Text style={styles.EXTitle}>Expéditeur 1621</Text>
                <Text style={styles.qrTitle}>AZ CRÉATION 16</Text>
                <Text style={styles.qrTitle}>Bab Ezzouar, Alger</Text>
                <Text style={styles.qrTitle}>0556397559</Text>
              </View>
            </View>
            <View style={styles.userInfo}>
              <View style={styles.leftUserInfo}>
                <Text style={styles.userInfoTitle}>AZ CRÉATION 16</Text>
                <Text style={styles.userInfoText}>{newPackage.BuyerFirstName+' '+newPackage.BuyerLastName}</Text>
                <Text style={styles.userInfoText}>{newPackage.Agence}</Text>
                <Text style={styles.userInfoText}>
                  {newPackage.Adress}
                </Text>
                <Text style={styles.userInfoText}>{ newPackage.BuyerPhone }</Text>
              </View>
              <View style={styles.rightUserInfo}>
                <Text style={styles.Num}>07</Text>
                <Text style={styles.RightText}>{newPackage.Wilaya}</Text>
                <Text style={styles.RightText}>{newPackage.Commune}</Text>
              </View>
            </View>
            <View>
              <Image
                style={styles.barCode}
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAS8AAACmCAMAAAC8yPlOAAAAbFBMVEX///8AAACFhYWUlJQyMjL7+/v39/fk5OSpqanHx8dVVVUmJia7u7va2trz8/Po6Oju7u54eHg8PDyysrIWFhZnZ2fDw8NfX1+bm5ujo6PR0dF7e3uKioo5OTkfHx8tLS1JSUlwcHAPDw9iYmKYHfPyAAAC90lEQVR4nO3R3XLaMBCG4V3ABmJsmd9AIBCS+7/HrlYyxqSZZtppjt7vIJaQtFo9ESH/lLaua5E62LCsi/zjtPYUtponpTTxM7WtbXeun4iEOpbwaeMrnsLO2ZpNp6HfGM81vjGt2TTFh8GnhXRrg8b83F3LD500vnE69RJl95hgfdS5e39M44/JFdNDQ3po95yvc1BVET3acK5dgxv1TOVka+c43Mkifp5s69i3nFQ3t4nISPVZCt3bcO0VU6v6Yn+XZ6t4zT8dVSspdeYbS7lW8ZnpOo2PfV9K61eLbC/5zE6zTaML+7tXfberR3nVOnmz6cmGCz/39mzT2HLKZSsh1bc+XuN35j26Z+ELtbUlMlE9/NFr5mWqePnLzevSeY1TmXj5Ln5iJ3vfMla93Cbe9NamB29aq4HXaGJFjj3syrzW2Wv5+uBVHW9ey1U+Mx96HfzqzSmvjv3fuBnfYJ+27jXP66tr52V9vMXv2v/5A69R5WszvPDCCy+88MILL7zwwgsvvPDCCy+88MILL7zwwgsvvPDCCy+88MILL7zwwgsvvPDCCy+88MILL7zwwgsvvPDCCy+88MILL7zwwgsvvPDCCy+88MILL7zwwgsvvPDCCy+88MILL7zwwgsvvPDCCy+88MILL7zwwgsvvPDCCy+88MILL7zwwgsvvPDCCy+88MILL7zwwgsvvPDCCy+88MILL7zwwgsvvPDCCy+88MILL7zwwgsvvPDCCy+88MILL7zwwgsvvPDC6+e9xj3D1i7/0uvyk14ff+e1+qbXu8h55G11XtW9V5W8Fp+8qqHXR+91Hngd7XXVst84ufeaPHide6/r5Pdee79ARwMvvfN6Hni93rySSVRZf/I6f9OrDG0r0jbxbOh+bD02bdo0CYWtxoFIKFPr/bl+6mupYkqIBM2XG9OaTbv70saQhk1Xpm/s7oKHincv8Atav7qv2Kbu/Z4ylsg1Q3pdemh+GyGEEEIIIYQQQgghhBBCCCGE/If8AhFVpxv+ughZAAAAAElFTkSuQmCC"
              />
            </View>
            <View style={styles.Table}>
              <View style={styles.topTable}>
                <Text style={{ fontSize: "10px" }}>Description du contenu</Text>
                <Text style={{ fontSize: "10px" }}>valeur {"DZD"}</Text>
              </View>
              <View style={styles.bottomTable}>
                <Text style={{ fontSize: "10px" }}>{newPackage.Products}</Text>
                <Text style={{ fontSize: "10px" }}>{newPackage.PackagePrice}</Text>
              </View>
            </View>
            <View style={styles.barCodeAndSig}>
              <Image
                style={styles.barCode2}
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAS8AAACmCAMAAAC8yPlOAAAAbFBMVEX///8AAACFhYWUlJQyMjL7+/v39/fk5OSpqanHx8dVVVUmJia7u7va2trz8/Po6Oju7u54eHg8PDyysrIWFhZnZ2fDw8NfX1+bm5ujo6PR0dF7e3uKioo5OTkfHx8tLS1JSUlwcHAPDw9iYmKYHfPyAAAC90lEQVR4nO3R3XLaMBCG4V3ABmJsmd9AIBCS+7/HrlYyxqSZZtppjt7vIJaQtFo9ESH/lLaua5E62LCsi/zjtPYUtponpTTxM7WtbXeun4iEOpbwaeMrnsLO2ZpNp6HfGM81vjGt2TTFh8GnhXRrg8b83F3LD500vnE69RJl95hgfdS5e39M44/JFdNDQ3po95yvc1BVET3acK5dgxv1TOVka+c43Mkifp5s69i3nFQ3t4nISPVZCt3bcO0VU6v6Yn+XZ6t4zT8dVSspdeYbS7lW8ZnpOo2PfV9K61eLbC/5zE6zTaML+7tXfberR3nVOnmz6cmGCz/39mzT2HLKZSsh1bc+XuN35j26Z+ELtbUlMlE9/NFr5mWqePnLzevSeY1TmXj5Ln5iJ3vfMla93Cbe9NamB29aq4HXaGJFjj3syrzW2Wv5+uBVHW9ey1U+Mx96HfzqzSmvjv3fuBnfYJ+27jXP66tr52V9vMXv2v/5A69R5WszvPDCCy+88MILL7zwwgsvvPDCCy+88MILL7zwwgsvvPDCCy+88MILL7zwwgsvvPDCCy+88MILL7zwwgsvvPDCCy+88MILL7zwwgsvvPDCCy+88MILL7zwwgsvvPDCCy+88MILL7zwwgsvvPDCCy+88MILL7zwwgsvvPDCCy+88MILL7zwwgsvvPDCCy+88MILL7zwwgsvvPDCCy+88MILL7zwwgsvvPDCCy+88MILL7zwwgsvvPDCCy+88MILL7zwwgsvvPDC6+e9xj3D1i7/0uvyk14ff+e1+qbXu8h55G11XtW9V5W8Fp+8qqHXR+91Hngd7XXVst84ufeaPHide6/r5Pdee79ARwMvvfN6Hni93rySSVRZf/I6f9OrDG0r0jbxbOh+bD02bdo0CYWtxoFIKFPr/bl+6mupYkqIBM2XG9OaTbv70saQhk1Xpm/s7oKHincv8Atav7qv2Kbu/Z4ylsg1Q3pdemh+GyGEEEIIIYQQQgghhBBCCCGE/If8AhFVpxv+ughZAAAAAElFTkSuQmCC"
              />
              <Text style={styles.Signature}>Signature</Text>
            </View>
            <View style={styles.barCodeAndSig}>
              <Text style={styles.txt}>
                Je, AZ CRÉATION 16, certifie que les détails déclarés sur ce
                bordereau sont corrects et que le colis ne contient aucun
                produit dangereux, interdit par la loi ou par les conditions
                générales de transport Yalidine.
              </Text>
              <Text style={styles.Signature}></Text>
            </View>
          </View>
          <View style={styles.view}>
            
          </View>
        </View>
        <View style={styles.top}>
          <View style={styles.view}>
            
          </View>
          <View style={styles.view}>
            
          </View>
        </View>
      </Page>
    </Document>
  );
}

export default PdfFile