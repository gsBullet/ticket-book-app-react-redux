import { BOOKTICKET, CANCELTICKET } from "./actionsType";

const initialState = {
  ticket: [],
  isTicket: false,
};

function ticketReducer(state = initialState, action) {
  switch (action?.type) {
    case BOOKTICKET:
      if (state.ticket.length >2) {
        return state; // If the ticket array already has 3 entries, return current state
      }
      else{
        return {
          ...state,
          ticket: [
          ...state.ticket,
            {
              from: action.payload.from.value,
              to: action.payload.to.value,
              date: action.payload.date.value,
              guests: action.payload.guests.value,
              ticketclassName: action.payload.ticketclassName.value,
            },
          ],
          isTicket: true,
        };

      }
    case CANCELTICKET:
      return {
        ...state,
        ticket: [
          ...state.ticket.slice(0, action.payload), // copy elements before the one to be removed
          ...state.ticket.slice(action.payload + 1), // copy elements after the one to be removed
        ],
        isTicket: state.ticket.length ?  true : false,
      };
    default:
      return state ;
  }
}
export default ticketReducer;
