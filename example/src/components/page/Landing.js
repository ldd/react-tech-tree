//prettier-ignore
import { Column, Columns, Container, Image, Subtitle, Title } from "bloomer";
import React from "react";
import "./Landing.css";

const GIF_BASE = `${process.env.PUBLIC_URL}/gifs/`;

const TextColumn = ({ title, subtitle }) => (
  <Column>
    <Title isSize={3}>Interactive</Title>
    <Subtitle isSize={4}>Some cute text goes here</Subtitle>
  </Column>
);

const ImageColumn = ({ label }) => (
  <Column>
    <Image src={`${GIF_BASE}/${label}.gif`}></Image>
  </Column>
);

const InstallationText = () => (
  <>
    <Subtitle isSize={3}>Installation</Subtitle>
    <pre>$npm i react-tech-tree</pre>
    <Subtitle isSize={5}>or</Subtitle>
    <pre>$yarn add react-tech-tree</pre>
  </>
);

export const Landing = () => (
  <Container hasTextAlign="centered">
    <Title isSize={1}>React Tech Tree</Title>
    <Columns isVCentered hasTextAlign="left">
      <ImageColumn label="x_men" />
      <TextColumn title="Interactive" subtitle="Some text" />
    </Columns>
    <Columns isVCentered hasTextAlign="left">
      <TextColumn title="Customizable" subtitle="Some text" />
      <ImageColumn label="effects" />
    </Columns>
    <InstallationText />
  </Container>
);
