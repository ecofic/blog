function TeamListCtrl($scope) {
    $scope.teams = [
        { id: 0, name: "Red",  players:[
            { id:1, firstName:"Joel", lastName:"Cash" },
            { id:2, firstName:"Christian", lastName:"Hamilton" },
            { id:3, firstName:"Cornelius", lastName:"Baldwin" }
        ]},

        { id: 1, name: "Blue", players:[
            { id:4, firstName:"Steve", lastName:"Lanny" },
            { id:5, firstName:"Willy", lastName:"Astor" },
            { id:6, firstName:"Darrell", lastName:"Tully" }
        ]},

        { id: 2, name: "Green", players:[
            { id:7, firstName:"Walker", lastName:"Greer" },
            { id:8, firstName:"Irvin", lastName:"Donny" },
            { id:9, firstName:"Kirk", lastName:"Manley" }
        ]},

        { id: 3, name: "Yellow", players:[
            { id:10, firstName:"Nick", lastName:"Barnabas" },
            { id:11, firstName:"Wallace", lastName:"Dyson" },
            { id:12, firstName:"Garrett", lastName:"Kelvin" }
        ]},

        { id: 4, name: "Orange", players:[
            { id:13, firstName:"Conrad", lastName:"Otto" },
            { id:14, firstName:"Cliff", lastName:"Leyton" },
            { id:15, firstName:"Scott", lastName:"Eurig" }
        ]},

        { id: 5, name: "Purple", players:[
            { id:16, firstName:"Darren", lastName:"Dre" },
            { id:17, firstName:"Shane", lastName:"Coluim" },
            { id:18, firstName:"Ben", lastName:"Taliesin" }
        ]}
    ];
}
