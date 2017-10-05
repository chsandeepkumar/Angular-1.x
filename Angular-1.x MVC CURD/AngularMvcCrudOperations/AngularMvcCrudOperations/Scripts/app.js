var app = angular.module("angularCrudOperations", ["employeeControllers", "ngRoute"])

app.config(["$routeProvider", function ($routeProvider) {

    $routeProvider.
    when("/",
    {
        templateUrl: "/Views/PartialViews/employeeDetails.html",
        controller: "MainController"
    }).
when("/AddEmployee",
{
    templateUrl: "/Views/PartialViews/AddEmployee.html",
    controller: "addEmployeeController"
}).
     when("/EditEmployee/:id",
     {
         templateUrl: "/Views/PartialViews/EditEmployee.html",
         controller: "editEmployeeController"
     }).
    otherwise({ redirectTo: "/" })
}])