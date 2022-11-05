import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { Container } from 'react-bootstrap';
import Home from "./components/pages/Home";
import Header from "./components/views/Header/Header";
import TableEdit from "./components/features/TableEdit/TableEdit";
import NotFound from "./components/views/NotFound/NotFound";
import Footer from "./components/views/Footer/Footer";
import { useDispatch } from "react-redux";
import { fetchTables } from "./Redux/tablesRedux";
import { fetchTablesStatus } from "./Redux/tableStatusRedux";
function App() {

  const dispatch = useDispatch();
  useEffect(() => dispatch(fetchTables()), [dispatch])
  useEffect(() => dispatch(fetchTablesStatus()), [dispatch])


  return (
    <Container>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/tables/:id" element={<TableEdit />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Container>
  );
}

export default App;
