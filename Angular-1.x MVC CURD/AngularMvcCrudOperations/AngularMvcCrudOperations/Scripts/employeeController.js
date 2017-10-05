angular.module("employeeControllers", []).controller("MainController", function ($scope) {

    $scope.message = "Main Controller";

}).controller("addEmployeeController", function ($scope, employeeService) {
    $scope.message = "add Employee Details";
    $scope.addEmployee = function () {
        
        employeeService.AddEmployee($scope.employee);
        alert(employeeService.status);

    }
}).controller("editEmployeeController", function ($scope) {
    $scope.message = "updated player details";
}).
factory("employeeService", ["$http", function ($http) {
    var employeefactory = {};

    employeefactory.GetEmployees=function()
    {
        return $http.get("/Employee/GetEmployees");
    }

    employeefactory.GetEmployeeById = function (employeeId) {

        return $http.get("/Employee/GetEmployeeById", { params: { employeeId: employeeId } });
    }

    employeefactory.AddEmployee = function (employee) {

        return $http.post("/Employee/AddEmployee", employee).success(function (response) {
            alert(response.status);
        });
    }

    employeefactory.UpdateEmployee = function (employee) {

        return $http.post("/Employee/UpdateEmployee", employee).success(function(response){
            alert(response.status);
        });
    }

    employeefactory.DeleteEmployee = function (employee) {

        return $http.post("/Employee/DeleteEmployee", employee).success(function(response){
            alert(response.status);
        });
    }
    return employeefactory;

}]);



