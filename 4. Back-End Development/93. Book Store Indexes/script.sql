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
CREATE INDEX orders_customer_book ON orders(customer_id,book_id);
--4
EXPLAIN ANALYZE SELECT original_language, title, sales_in_millions FROM books WHERE original_language = 'French';
--5
SELECT pg_size_pretty(pg_total_relation_size('books'));
--6
CREATE INDEX books_language_titles_copies ON books(original_language,title,sales_in_millions);
--7
EXPLAIN ANALYZE SELECT original_language, title, sales_in_millions FROM books;
--8
DROP INDEX IF EXISTS books_language_titles_copies;
--9
SELECT NOW();
\COPY orders FROM 'orders_add.txt' DELIMITER ',' CSV HEADER;
SELECT NOW();
--10
DROP INDEX IF EXISTS orders_customer_book;
CREATE INDEX orders_customer_book ON orders(customer_id,book_id);
--11
CREATE INDEX data_customers ON customers(first_name, email_address);
