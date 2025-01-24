INSERT INTO categories (id, name, image)
VALUES (1, 'Appetizers', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTc1oAvlhKS_27ZoF5O7ISBu40fRESh0QRLW3S3C8w57yT9FFpkVK7ES3rm9fagFYPLhA&usqp=CAU'),
       (2, 'Main Courses', 'https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp'),
       (3, 'Desserts', 'https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp');


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