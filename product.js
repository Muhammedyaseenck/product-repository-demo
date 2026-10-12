class Product {
  constructor(
    id,
    title,
    description,
    price,
    discountPercentage,
    rating,
    stock,
    brand,
    category,
    thumbnail,
    images,
  ) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.price = price;
    this.discountPercentage = discountPercentage;
    this.rating = rating;
    this.stock = stock;
    this.brand = brand;
    this.category = category;
    this.thumbnail = thumbnail;
    this.images = images;
  }
}

class ProductRepository {
  async getAllProducts() {
    try {
      var response = await fetch("https://dummyjson.com/products");

      if (!response.ok) {
        throw new Error("Request failed with status " + response.status);
      }

      var data = await response.json();

      var products = data.products.map(function (p) {
        return new Product(
          p.id,
          p.title,
          p.description,
          p.price,
          p.discountPercentage,
          p.rating,
          p.stock,
          p.brand,
          p.category,
          p.thumbnail,
          p.images,
        );
      });

      return products;
    } catch (err) {
      console.log("error fetching products:", err);
      return [];
    }
  }
}

var repo = new ProductRepository();

repo.getAllProducts().then(function (products) {
  console.log("Products:", products);
  console.log("First product title:", products[0].title);
});
