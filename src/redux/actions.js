import { BOOKTICKET, CANCELTICKET } from "./actionsType";

export const bookticker = (data) => {
 
  return {
    type: BOOKTICKET,
    payload: data,
  };
};

export const cancelTicket = (id) => {
  return {
    type: CANCELTICKET,
    payload: id,
  };
};
