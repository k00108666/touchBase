/**
 * Created by Seamy on 8/20/2016.
 */


angular.module('myApp')

        .component('homeNav',

    {

        templateUrl: 'touchBase/app/components/homePageComponents/nav/homeNav.html',
        controller: homeNavCtrl,
        controllerAs: 'home'

    }

);


function homeNavCtrl ($scope){

    $scope.currentPage = "prodVideo";


}









