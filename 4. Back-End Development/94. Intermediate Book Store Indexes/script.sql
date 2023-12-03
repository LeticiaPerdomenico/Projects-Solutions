--1
SELECT * FROM customers LIMIT 10;
SELECT * FROM orders LIMIT 10;
SELECT * FROM books LIMIT 10;
--2
SELECT * FROM pg_indexes
WHERE tablename = 'customers';
SELECT * FROM pg_indexes
WHERE tablename = 'books';
SELECT * FROM pg_indexes
WHERE tablename = 'orders';
--3
EXPLAIN ANALYZE SELECT customer_id, quantity FROM orders WHERE quantity > 18;
--4
CREATE INDEX orders_customer_quantity ON orders(customer_id,quantity);
--5
EXPLAIN ANALYZE SELECT customer_id, quantity FROM orders WHERE quantity > 18;
--6
ALTER TABLE customers
  ADD CONSTRAINT customers_pkey
  PRIMARY KEY (customer_id);
EXPLAIN ANALYZE SELECT * FROM customers WHERE customer_id < 100;
--7
SELECT * FROM customers LIMIT 10;
--8
CREATE INDEX orders_customer_book ON orders(customer_id,book_id);
--9
DROP INDEX IF EXISTS orders_customer_book;
--10
CREATE INDEX orders_customer_book ON orders(customer_id,book_id);
--11
EXPLAIN ANALYZE SELECT * FROM orders WHERE (quantity * price_base > 100);
--12
CREATE INDEX orders_total_price ON orders((quantity*price_base));
--13
EXPLAIN ANALYZE SELECT * FROM orders WHERE (quantity*price_base > 100);
--14
SELECT * FROM pg_indexes WHERE tablename IN ('customers','books') ORDER BY tablename, indexname;