import React, { FC } from "react";

interface Props {
  cardName: string;
}

const Card: FC<Props> = (props) => {
  return (
    <div>
      <h2>{props.cardName}</h2>

      <input type="text" />
    </div>
  );
};

export default Card;
