import React, { useState, useEffect } from "react";
import { Container, Typography } from "@mui/material";
import SearchBar from "./components/SearchBar";
import CryptoList from "./components/CryptoList";
import Button from "./components/Button";
import axios from "axios";

function App() {
  const [cryptos, setCryptos] = useState([]);
  const [filteredCryptos, setFilteredCryptos] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.get("https://api.coinlore.net/api/tickers/");
      setCryptos(response.data.data);
      setFilteredCryptos(response.data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleUpdate = () => {
    fetchData();
  };

  const handleSearch = (query) => {
    const filtered = cryptos.filter(
      (crypto) =>
        crypto.name.toLowerCase().includes(query.toLowerCase()) ||
        crypto.symbol.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredCryptos(filtered);
  };

  return (
    <Container>
      <Typography variant="h3" align="left" gutterBottom>
        Cryptocurrency Prices
      </Typography>
      <Button onClick={handleUpdate} variant="bordered" size="md">
        Update
      </Button>
      <SearchBar onSearch={handleSearch} />
      <CryptoList cryptos={filteredCryptos} />
      {loading && <Typography>Loading...</Typography>}
    </Container>
  );
}

export default App;
