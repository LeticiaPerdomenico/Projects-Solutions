/*1*/
SELECT * FROM parts LIMIT 10;
/*2*/
ALTER TABLE parts
ALTER COLUMN code SET NOT NULL;
ALTER TABLE parts
ADD UNIQUE(code);
/*3*/
UPDATE parts
SET description = 'None Available'
WHERE description IS NULL;
CREATE TABLE part_descriptions (
    id int PRIMARY KEY, 
    description text
);
INSERT INTO part_descriptions VALUES (1, '5V resistor'), (2, '3V resistor');
UPDATE parts
SET description = part_descriptions.description
from part_descriptions
where part_descriptions.id = parts.id
and parts.description IS NULL;
/*4*/
ALTER TABLE parts
ALTER COLUMN description SET NOT NULL;
/*5*/
INSERT INTO parts (id, description, code, manufacturer_id) VALUES (54, 'Full-color LED SMD modules', 'V1-009', 9);
/*6*/
ALTER TABLE reorder_options
ALTER COLUMN part_id SET NOT NULL;
/*7*/
ALTER TABLE reorder_options
ADD CHECK (price_usd > 0 AND quantity > 0);
/*8*/
ALTER TABLE reorder_options
ADD CHECK (price_usd/quantity > 0.02 AND price_usd/quantity < 25.00);
/*9*/
ALTER TABLE parts
ADD PRIMARY KEY (id);
ALTER TABLE reorder_options
ADD FOREIGN KEY (part_id) REFERENCES parts (id);
/*10*/
ALTER TABLE locations 
ADD CHECK (qty > 0); 
/*11*/
ALTER TABLE locations
ADD UNIQUE (part_id, location);
/*12*/
ALTER TABLE locations
ADD FOREIGN KEY (part_id) REFERENCES parts (id);
/*13*/
ALTER TABLE parts
ADD FOREIGN KEY (manufacturer_id) REFERENCES manufacturers (id);
/*14*/
INSERT INTO manufacturers(name, id) 
VALUES ('Pip-NNC Industrial', 11);
/*15*/
SELECT * FROM manufacturers;
UPDATE parts
SET manufacturer_id = 11
WHERE manufacturer_id IN (1, 2);
/*It could be also writen with OR instead of IN:
WHERE manufacturer_id = ____ OR manufacturer_id = ____;*/
SELECT * FROM parts;
