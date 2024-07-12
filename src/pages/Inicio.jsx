import { Container, Card, Button, Tab, Tabs } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState } from "react";
import Banner from "../components/Banner";
import Galeria from "../components/Galeria";

export default function Inicio() {
  return (
    <main>
        <Banner />
        <Galeria />
    </main>
  );
}