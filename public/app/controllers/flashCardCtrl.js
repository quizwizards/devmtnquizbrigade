angular.module('group-project').controller('flashCardCtrl', function ($scope, flashCardSvc, $state, $stateParams) {

    var counter = {
        count: 0
    }

    var arrayLength;

    $scope.showSubMenu = false;

    $scope.showMenu = () => {
        $scope.showSubMenu = !$scope.showSubMenu;
    }

    $scope.startData;
    $scope.incData;
    $scope.decData;

    $scope.showZero = true;
    $scope.showInc = false;
    $scope.showDec = false;
    $scope.nextButtonShow = true;
    $scope.backButtonShow = false;
    $scope.showCard = false;
    $scope.startButton = true;
    $scope.rightChecked = false;
    $scope.wrongChecked = false;
    $scope.counter;
    $scope.arrayLength;
    $scope.data = {progress: 0};



    $scope.reset = function () {
        $scope.showCard = false;
        $scope.startButton = true;
    }

    $scope.toggleDataInc = function () {
        $scope.showZero = false;
        $scope.showInc = true;
        $scope.showDec = false;
    }
    $scope.toggleDataDec = function () {
        $scope.showZero = false;
        $scope.showInc = false;
        $scope.showDec = true;
    }
    $scope.toggleBackButton = function () {
        if (counter.count > 0) {
            $scope.backButtonShow = true;
        } else {
            $scope.backButtonShow = false;
        }
    }
    $scope.toggleNextButton = function () {
        if (counter.count === arrayLength - 1) {
            $scope.nextButtonShow = false;
        } else {
            $scope.nextButtonShow = true;
        }
    }

    $scope.toggleRightChecked = function () {
        $scope.rightChecked = true;
        $scope.wrongChecked = false;
    }

    $scope.toggleWrongChecked = function () {
        $scope.rightChecked = false;
        $scope.wrongChecked = true;
    }


    $scope.checkType = function () {
        var trainingType = $stateParams.id;
        console.log(trainingType)
        switch (trainingType) {
            case 'allJS':
                $scope.recJsAllData();
                break;
            case 'basicJS':
                $scope.recJsBasicData();
                break;
            case 'advancedJS':
                $scope.recJsAdvancedData();
                break;
            case 'css':
                $scope.recCssData();
                break;
            case 'html':
                $scope.recHtmlData();
                break;
            default:
                break;

        }
    }

    $scope.recJsAllData = function () {
        flashCardSvc.getJavascriptAll().then(function (response) {
            counter.count = 0;
            arrayLength = response.data.length;
            $scope.startData = response.data.firstCard;
            $scope.showCard = true;
            $scope.startButton = false;
            $scope.counter = counter.count + 1;
            $scope.arrayLength = arrayLength;
        })
    }

    $scope.recJsBasicData = function () {
        flashCardSvc.getJavascriptBasic().then(function (response) {
            counter.count = 0;
            $scope.startData = response.data.firstCard;
            arrayLength = response.data.length;
            $scope.showCard = true;
            $scope.startButton = false;
            $scope.counter = counter.count + 1;
            $scope.arrayLength = arrayLength;
        })
    }

    $scope.recJsAdvancedData = function () {
        flashCardSvc.getJavascriptAdvanced().then(function (response) {
            counter.count = 0;
            $scope.startData = response.data.firstCard;
            arrayLength = response.data.length;
            $scope.showCard = true;
            $scope.startButton = false;
            $scope.counter = counter.count + 1;
            $scope.arrayLength = arrayLength;
        })
    }

    $scope.recCssData = function () {
        flashCardSvc.getCss().then(function (response) {
            counter.count = 0;
            $scope.startData = response.data.firstCard;
            arrayLength = response.data.length;
            $scope.showCard = true;
            $scope.startButton = false;
            $scope.counter = counter.count + 1;
            $scope.arrayLength = arrayLength;
        })
    }

    $scope.recHtmlData = function () {
        flashCardSvc.getHtml().then(function (response) {
            counter.count = 0;
            $scope.startData = response.data.firstCard;
            arrayLength = response.data.length;
            $scope.showCard = true;
            $scope.startButton = false;
            $scope.counter = counter.count + 1;
            $scope.arrayLength = arrayLength;
        })
    }

    $scope.inc = function () {
        counter.count++;
        $scope.rightChecked = false;
        $scope.wrongChecked = false;
        flashCardSvc.incCard(counter).then(function (response) {
            $scope.rightChecked = response.data.right;
            $scope.wrongChecked = response.data.wrong;
            $scope.incData = response.data;
            $scope.counter = counter.count + 1;
            $scope.arrayLength = arrayLength;
            $scope.data.progress = ($scope.counter / $scope.arrayLength) * 100
            console.log('progress: ', $scope.data.progress);
        })
    }

    $scope.dec = function () {
        counter.count--;
        flashCardSvc.decCard(counter).then(function (response) {
            $scope.rightChecked = response.data.right;
            $scope.wrongChecked = response.data.wrong;
            $scope.decData = response.data;
            $scope.counter = counter.count + 1;
            $scope.arrayLength = arrayLength;
            $scope.data.progress = ($scope.counter / $scope.arrayLength) * 100
        })
    }

    $scope.sendCheckedData = function () {
        let data = {
            index: counter.count,
            right: $scope.rightChecked,
            wrong: $scope.wrongChecked
        }
        flashCardSvc.checkBox(data).then(function (response) {
            console.log(response);
        })
    }

})