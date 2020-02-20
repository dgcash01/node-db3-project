const db = require("../data/db-config.js");

module.exports = {
    AllProducts,
    AllOrdersBeforeAugust,
    Order10251DetailSorted,
    AllOrdersCustomerAndEmployee,
};

function AllProducts() {
    // Select Product.ProductName, Category.CategoryName from Product inner join Category on Product.CategoryId = Category.Id 
    return db("Product as p")
    .join("Category as c", "c.Id", "p.CategoryId")
    .select("p.ProductName", "c.CategoryName")
}

function AllOrdersBeforeAugust() {
    // Select [Order].Id, [Shipper].CompanyName from [Order] inner join [Shipper] on [Shipper].Id = [Order].ShipVia where [Order].OrderDate < '2012-08-09'
    return db("[Order] as o")
        .join("Shipper as s", "s.Id", "o.ShipVia")
        .select("o.Id", "s.CompanyName")
        .where("o.OrderDate", "<", "2012-08-09")
}

function Order10251DetailSorted() {
    // Select Product.ProductName, OrderDetail.Quantity from OrderDetail inner join Product on Product.Id = OrderDetail.ProductId where OrderDetail.OrderId = 10251 order by Product.ProductName
    return db("OrderDetail as od")
        .join("Product as prod", "prod.Id", "od.ProductId")
        .select("prod.ProductName", "od.Quantity")
        .where("od.OrderId", 10251)
        .orderBy("prod.ProductName", "asc")
}

function AllOrdersCustomerAndEmployee() {
    //     Select [Order].Id as [Order_Id], Customer.CompanyName as [Customer_Company_Name], Employee.LastName as [Employee_LastName] from [Order]
    // inner join Customer on Customer.Id = [Order].CustomerId 
    // inner join Employee on Employee.Id = [Order].EmployeeId
    return db("[Order] as ord")
        .join("Customer as cust", "cust.Id", "ord.CustomerId")
        .join("Employee as emp", "emp.Id", "ord.EmployeeId")
        .select("ord.Id as [Order_Id]", "cust.CompanyName as Customer_Company_Name", "emp.LastName as Employee_LastName")
}