const { observable, autorun, runInAction, reaction, action } = require('mobx');

const state = observable({
  compA: 'a',
  compB: 12,
  compC: null,
});

autorun(()=>{
  console.log('changed',state.compA);
})

reaction(()=>{
  return state.compB;
}, ()=>{
  console.log('reaction', state.compB)
})

const changed = action(()=>{
  state.compA = 'h';
  // state.compB = 'h';
  state.compC = 'h';
})

runInAction(()=>{
  state.compA = 'c';
  // state.compB = 'c';
  state.compC = 'c';
})
runInAction(()=>{
  state.compC = 'd';
})