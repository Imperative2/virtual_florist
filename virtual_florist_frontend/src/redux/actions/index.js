export {
  fetchWikiEntries,
  addWikiEntry,
  deleteWikiEntry,
  updateWikiEntry
} from "./WikiActions";

export {
  fetchProducts,
  addProduct,
  deleteProduct,
  updateProduct
} from "./ProductActions";

export {
  fetchStorages,
  addNewStorage,
  updateStorage,
  changeQuantity,
  deleteStorage
} from "./StorageActions";

export { uploadFiles } from "./PhotoActions";

export { registerUser, login, logout, updateUser } from "./UserActions";

export {
  fetchBasket,
  addItemToBasket,
  clearBasket,
  sendItemToBasket,
  removeItemFromBasket,
  sendRemoveItemFromBasket
} from "./BasketActions";
