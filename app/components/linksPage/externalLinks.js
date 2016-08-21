/**
 * Created by Seamy on 8/20/2016.
 */


angular.module('myApp')

    .component('linksComp',

    {


        templateUrl: 'touchBase/app/components/linksPage/externalLinks.html',
        controller: linksPageCtrl,
        controllerAs: 'links'

    }

);


function linksPageCtrl ($scope){

$scope.currentPage = "landingPage";
}




