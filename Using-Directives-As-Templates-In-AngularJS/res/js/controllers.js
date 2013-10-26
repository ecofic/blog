function TeamListCtrl($scope) {
    $scope.teams = [
        {
            id: 0, name: "Red", players: [
              { id: 1, firstName: "Joel", lastName: "Cash", position: "QB", number:11 },
              { id: 2, firstName: "Christian", lastName: "Hamilton", position: "RB", number:48 },
              { id: 3, firstName: "Cornelius", lastName: "Baldwin", position: "WR", number: 10 }
            ]
        },

        {
            id: 1, name: "Blue", players: [
              { id: 4, firstName: "Steve", lastName: "Lanny", position: "QB", number: 13 },
              { id: 5, firstName: "Willy", lastName: "Astor", position: "RB", number: 46 },
              { id: 6, firstName: "Darrell", lastName: "Tully", position: "WR", number: 11 }
            ]
        },

        {
            id: 2, name: "Green", players: [
              { id: 7, firstName: "Walker", lastName: "Greer", position: "QB", number: 15 },
              { id: 8, firstName: "Irvin", lastName: "Donny", position: "RB", number: 44 },
              { id: 9, firstName: "Kirk", lastName: "Manley", position: "WR", number: 12 }
            ]
        },

        {
            id: 3, name: "Yellow", players: [
              { id: 10, firstName: "Nick", lastName: "Barnabas", position: "QB", number: 9 },
              { id: 11, firstName: "Wallace", lastName: "Dyson", position: "RB", number: 42 },
              { id: 12, firstName: "Garrett", lastName: "Kelvin", position: "WR", number: 13 }
            ]
        },

        {
            id: 4, name: "Orange", players: [
              { id: 13, firstName: "Conrad", lastName: "Otto", position: "QB", number: 7 },
              { id: 14, firstName: "Cliff", lastName: "Leyton", position: "RB", number: 40 },
              { id: 15, firstName: "Scott", lastName: "Eurig", position: "WR", number: 14 }
            ]
        },

        {
            id: 5, name: "Purple", players: [
              { id: 16, firstName: "Darren", lastName: "Dre", position: "QB", number: 5 },
              { id: 17, firstName: "Shane", lastName: "Coluim", position: "RB", number: 38 },
              { id: 18, firstName: "Ben", lastName: "Taliesin", position: "WR", number: 15 }
            ]
        }
    ];
}
