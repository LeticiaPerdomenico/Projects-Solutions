/*1*/
const initialWagonState = {
  supplies: 100,
  distance: 0,
  days: 0
};
/*2*/
const reductor = (state=initialWagonState, action) => {
  /*3*/
  switch (action.type) {
    /*4*/
    case 'gather': {
      return {
        ...state,
        supplies: state.supplies + 15,
        distance: state.distance,
        days: state.days + 1
      }
    }
    /*5*/
    case 'travel':
    /*12*/
      if(state.supplies - (20 * action.payload) < 0 ) {
        return state
      } else {
      return {
        ...state,
        supplies: state.supplies - (20 * action.payload),
        distance: state.distance + (10 * action.payload),
        days: state.days + action.payload
      }
    }
    /*6*/
    case 'typpedWagon':{
      return {
        ...state,
        supplies: state.supplies - 30,
        distance: state.distance,
        days: state.days + 1
      }
    }
    default: {
      return state;
    }
  }
}
/*7*/
let wagon= reductor(undefined, {});
console.log(wagon);
/*8*/
wagon=reductor(wagon,{type:'travel', payload:1});
console.log(wagon);
/*9*/
wagon=reductor(wagon,{type:'gather'});
console.log(wagon);
/*10*/
wagon=reductor(wagon,{type:'typpedWagon'})
console.log(wagon);
/*11*/
wagon=reductor(wagon,{type:'travel', payload:3})
console.log(wagon)
