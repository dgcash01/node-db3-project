-- Multi-Table Query Practice

-- Display the ProductName and CategoryName for all products in the database. Shows 77 records.
Select Product.ProductName, Category.CategoryName from Product inner join Category on Product.CategoryId = Category.Id 

-- Display the order Id and shipper CompanyName for all orders placed before August 9 2012. Shows 429 records.
Select [Order].Id, [Shipper].CompanyName from [Order] inner join [Shipper] on [Shipper].Id = [Order].ShipVia where [Order].OrderDate < '2012-08-09'

-- Display the name and quantity of the products ordered in order with Id 10251. Sort by ProductName. Shows 3 records.
Select Product.ProductName, OrderDetail.Quantity from OrderDetail inner join Product on Product.Id = OrderDetail.ProductId where OrderDetail.OrderId = 10251 order by Product.ProductName

-- Display the OrderID, Customer's Company Name and the employee's LastName for every order. All columns should be labeled clearly. Displays 16,789 records.
Select [Order].Id as [Order_Id], Customer.CompanyName as [Customer_Company_Name], Employee.LastName as [Employee_LastName] from [Order]
inner join Customer on Customer.Id = [Order].CustomerId 
inner join Employee on Employee.Id = [Order].EmployeeId

Select count(1) from [Order]
inner join Customer on Customer.Id = [Order].CustomerId 
inner join Employee on Employee.Id = [Order].EmployeeId