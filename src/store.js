// import { applyMiddleware, creatStore } from "redux";
// import rootReducer from "./reducers";
// import thunk from "redux-thunk";

// const store = creatStore(
//     rootReducer,
//     composeWithDevTools(applyMiddleware(thunk))
// );

// export default store

import rootReducer from "./reducers";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: rootReducer,
});

export default store;
