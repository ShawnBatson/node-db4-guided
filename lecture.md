Guidelines for Data Normalization

-   No field values should be repeated.
-   There are no redundant records
-   Each record has a unique primary key
-   All fields in a table should relate to the primary key in some way

---

## id name

1 Lon Lon Ranch  
2 Morton Farms

[animals]
id name

---

1 horses  
2 chickens  
3 cows  
4 hens  
5 pigs

[farms_animals]
farm_id animal_id

---

1 1
1 2
1 3
2 1
2 4

(this is a many to many relationship)

## 3 relationships type

1 to 1
1 to many
many to many

## One to One relationship

When table A can only relate to a single column in table B

## One to Many relationship

when table A can link to many rows in Table B, but table b can only link to a single row in Table A

-one person, many blog posts
-one person, many orders.

## Many to Many relationship

When table A (farms) can link to many rows in table B, and table B can link to many rows in table A

A farm can have many different animal types, and many different animal types can be found on many farms.

This requires a third table..an intermediary table, or join table, or key table, or go between table..where it holds the foreign keys.
