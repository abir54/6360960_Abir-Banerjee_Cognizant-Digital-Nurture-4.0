DROP TABLE IF EXISTS OnlineRetailStore;

CREATE TABLE OnlineRetailStore (
    ProductID INT PRIMARY KEY,
    ProductName VARCHAR(100),
    Category VARCHAR(50),
    Price DECIMAL(10, 2),
    StockQuantity INT,
    IsAvailable BIT
);

INSERT INTO OnlineRetailStore (ProductID, ProductName, Category, Price, StockQuantity, IsAvailable)
VALUES
(1, 'Wireless Mouse', 'Electronics', 799.00, 150, 1),
(2, 'Bluetooth Speaker', 'Electronics', 1299.50, 85, 1),
(3, 'Yoga Mat', 'Fitness', 499.99, 60, 1),
(4, 'LED Desk Lamp', 'Home Decor', 649.00, 100, 1),
(5, 'Smartphone Stand', 'Accessories', 299.00, 40, 1),
(6, 'Water Bottle', 'Fitness', 199.00, 20, 1),
(7, 'Notebook Pack', 'Stationery', 350.00, 0, 0),
(8, 'USB Type-C Cable', 'Electronics', 249.00, 75, 1),
(9, 'Wireless Keyboard', 'Electronics', 1599.00, 30, 1),
(10, 'Table Plant', 'Home Decor', 599.00, 10, 1);

SELECT * FROM OnlineRetailStore;

-- Ranking all products within each category by descending price
SELECT 
    ProductID,
    ProductName,
    Category,
    Price,
    
    -- Assign unique rank
    ROW_NUMBER() OVER (PARTITION BY Category ORDER BY Price DESC) AS RowNum,
    
    -- Allows ties (same rank for same price, next rank is skipped)
    RANK() OVER (PARTITION BY Category ORDER BY Price DESC) AS Rank,
    
    -- Allows ties, but doesn’t skip ranks
    DENSE_RANK() OVER (PARTITION BY Category ORDER BY Price DESC) AS DenseRank

FROM OnlineRetailStore;

WITH RankedProducts AS (
    SELECT 
        ProductID,
        ProductName,
        Category,
        Price,
        ROW_NUMBER() OVER (PARTITION BY Category ORDER BY Price DESC) AS RowNum
    FROM OnlineRetailStore
)
SELECT * 
FROM RankedProducts
WHERE RowNum <= 3;

WITH RankedProducts AS (
    SELECT 
        ProductID,
        ProductName,
        Category,
        Price,
        RANK() OVER (PARTITION BY Category ORDER BY Price DESC) AS Rank
    FROM OnlineRetailStore
)
SELECT * 
FROM RankedProducts
WHERE Rank <= 3;

WITH RankedProducts AS (
    SELECT 
        ProductID,
        ProductName,
        Category,
        Price,
        DENSE_RANK() OVER (PARTITION BY Category ORDER BY Price DESC) AS DenseRank
    FROM OnlineRetailStore
)
SELECT * 
FROM RankedProducts
WHERE DenseRank <= 3
ORDER BY Category, DenseRank, Price DESC;

