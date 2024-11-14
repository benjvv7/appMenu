import React, { useState } from "react";
import { QrReader } from "react-qr-reader";
import "./styles.css";

export default function App() {
  const [data, setData] = useState("No result");
  const [isScanning, setIsScanning] = useState(false);

  return (
    <div className="App">
      <h1>Lector de QR</h1>

      {isScanning ? (
        <QrReader
          className="qr-reader"
          onResult={(result, error) => {
            if (!!result) {
              setData(result.text);
              setIsScanning(false); // Detener el escaneo cuando se detecta un resultado
            }
            if (!!error) {
              console.info(error);
            }
          }}
          constraints={{ facingMode: "environment" }}
        />
      ) : (
        <button onClick={() => setIsScanning(true)}>
          Presiona para escanear
        </button>
      )}

      <p>{data}</p>
    </div>
  );
}
