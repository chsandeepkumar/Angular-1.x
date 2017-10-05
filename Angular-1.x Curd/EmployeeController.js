//creating anangular application module
var employeeAppModule = angular.module("employeeApp", []);

//The below code will read the data from EmployeeData.json file and will assign the data to the $scope variable 
employeeAppModule.controller("employeeController", function($scope, $http){    
            $http.get('student.json') //$http.get method is used to reading the EmployeeData.json file
            
                .then (function(data){
                        $scope.employees = data; // binding the data to the $scope variable
                    })
                ,(function(error) {
                        console.error('Unexpected error occured while loading the employee data', status, data);
                        $scope.students = { }; 
                });
    } 
);
