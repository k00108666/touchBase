/**
 * Created by Seamy on 8/20/2016.
 */
angular.module('myApp')

    .component('scenarioPersonaComp', {

        templateUrl: 'touchBase/app/components/whoPage/scenariosPersona.html',
        controller: scenariosPersonaCtrl,
        controllerAs: 'home'


    });




function scenariosPersonaCtrl ($scope) {

    $scope.currentPage = "personas";


    $scope.myInterval = 5000;
    $scope.noWrapSlides = false;
    $scope.active = 0;
    var slides = $scope.slides = [];
    var scenarioSlide = $scope.scenarioSlides =[];
    var personaCurrIndex = 0;
    var scenarioCurrIndex = 0;

    $scope.addPersonaSlide = function() {
        var newWidth = 600 + slides.length + 1;
        slides.push({
                image: '/touchBase/app/assets/test.jpg',
                text: ['Image 1'][slides.length % 4],
                id: personaCurrIndex++
            },

            {

                image: '/touchBase/app/assets/test.jpg',
                text: ['Image 1'][slides.length % 4],
                id: personaCurrIndex++

            }

        );
    };


    $scope.addScenarionSlide = function(){

        var newWidth = 600 + slides.length + 1;
        scenarioSlide.push({
                image: '/touchBase/app/assets/test.jpg',
                text: ['Image 1'][slides.length % 4],
                id: scenarioCurrIndex++
            },

            {

                image: '/touchBase/app/assets/test.jpg',
                text: ['Image 1'][slides.length % 4],
                id: scenarioCurrIndex++

            }

        );


    };

    $scope.randomize = function() {
        var indexes = generateIndexesArray();
        assignNewIndexesToSlides(indexes);
    };

    $scope.addPersonaSlide();

    $scope.addScenarionSlide();

}