import styled from "styled-components";
import { NEGATIVE_COLOR, POSITIVE_COLOR } from "src/ui/colors";

export type BadgeType = "positive" | "negative";

const getColorFromType = (t: BadgeType) => {
  switch (t) {
    case "negative":
      return NEGATIVE_COLOR;
    case "positive":
      return POSITIVE_COLOR;
  }
};

export const Badge = styled.span<{
  type: BadgeType;
}>`
  /* Adapt the colors based on primary prop */
  background: ${({ type }) => getColorFromType(type)};
  color: black;
  font-size: 0.5em;
  line-height: 1em;
  margin: 1em;
  padding: 0.25em;
  border-radius: 0.5rem;
`;
