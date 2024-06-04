// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category

// Categories have many Products

// Products belongToMany Tags (through ProductTag)

// Tags belongToMany Products (through ProductTag)

// Define associations
Product.belongsTo(Category); // Products belong to a Category
Category.hasMany(Product); // Categories have many Products

Product.belongsToMany(Tag, { through: ProductTag }); // Products belong to many Tags through ProductTag
Tag.belongsToMany(Product, { through: ProductTag }); // Tags belong to many Products through ProductTag


module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
