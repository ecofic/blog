function TeamListCtrl($scope) {
    $scope.teams = [
		{ name: "Red", id: 0, isChecked: true },
		{ name: "Blue", id: 1, isChecked: false },
		{ name: "Green", id: 2, isChecked: true },
		{ name: "Yellow", id: 3, isChecked: true },
		{ name: "Orange", id: 4, isChecked: false },
		{ name: "Purple", id: 5, isChecked: true }
    ];
}