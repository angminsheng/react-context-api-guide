import React from "react";

const ItemsContext = React.createContext();

export const ItemsProvider = ItemsContext.Provider;
export const ItemsConsumer = ItemsContext.Consumer;
export default ItemsContext;
