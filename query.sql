-- postgres query

SELECT * 
FROM products 
WHERE price BETWEEN 50 AND 200 
ORDER BY price ASC 
LIMIT 10 OFFSET ((:page_number - 1) * 10);


-- mongodb query

db.products.find({ category: "Electronics" })
  .sort({ price: -1 })  // Sort by price in descending order
  .skip((pageNumber - 1) * 5)  // Skip previous pages
  .limit(5);  // Limit results to 5 per page