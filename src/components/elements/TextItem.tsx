import React from "react";
import styled from "styled-components";

interface TextItemProps {
  text: string;
}

export default function TextItem({ text }: TextItemProps) {
  return <Wrapper data-testid="text-item">{text}</Wrapper>;
}

const Wrapper = styled.div`
  padding: 12px 8px;
  border-bottom: 1px solid #c1c1c1;
`;
