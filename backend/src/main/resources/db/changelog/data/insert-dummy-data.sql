INSERT INTO categories (id, name, image)
VALUES (1, 'Appetizers', 'appetizers.jpg'),
       (2, 'Main Courses', 'main_courses.jpg'),
       (3, 'Desserts', 'desserts.jpg');


INSERT INTO recipes (id, name, description, price, image, available, category_id)
VALUES (1, 'Caesar Salad', 'Classic Caesar salad with croutons and parmesan', 23.33, 'caesar_salad.jpg', true, 1),
       (2, 'Grilled Salmon', 'Fresh salmon grilled to perfection', 23.33, 'grilled_salmon.jpg', true, 2),
       (3, 'Chocolate Cake', 'Rich and moist chocolate cake', 23.33, 'chocolate_cake.jpg', true, 3);


INSERT INTO orders (id, table_id, order_date, status, estimated_cooking_time)
VALUES (1, 5, '2023-10-01 12:00:00', 'PENDING', 20),
       (2, 6, '2023-10-01 12:05:00', 'IN_PROGRESS', 15);


INSERT INTO order_items (recipe_id, order_id, quantity)
VALUES (1, 1, 1),
       (2, 1, 38),
       (3, 2, 29);