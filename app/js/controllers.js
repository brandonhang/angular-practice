team_ids = {
	'77c57737-b688-4bbf-a127-7b7f0ef8bcdd': {
		'team': 'Arizona Cardinals'
	},
	'c1618ca6-3dad-485d-b237-ad34f8d0bf83': {
		'team': 'Atlanta Falcons'
	},
	'15cdbc22-7b1e-4012-a731-987ca52e3c05': {
		'team': 'Baltimore Ravens'
	},
	'50990622-f5d7-4597-b9b3-c73c9be32af2': {
		'team': 'Buffalo Bills'
	},
	'767f5024-184b-434b-9e52-90bb4375ca84': {
		'team': 'Carolina Panthers'
	},
	'009ff336-845b-411b-8ee5-9b3089e99398': {
		'team': 'Chicago Bears'
	},
	'6bb48096-ca08-40e3-8dd2-2d93d96e346e': {
		'team': 'Cincinnati Bengals'
	},
	'ecf6a705-7a54-4f36-9dcd-09a0c53e733b': {
		'team': 'Cleveland Browns'
	},
	'd61f132b-29f6-4140-847b-efb50ea9ccba': {
		'team': 'Dallas Cowboys'
	},
	'6e1ae482-bd5e-40b3-a2d8-24c0a9eec333': {
		'team': 'Denver Broncos'
	},
	'82fedbfa-8c2c-46cc-b02f-ea16abf5ffc9': {
		'team': 'Detroit Lions'
	},
	'ade9a19b-3dfb-4436-aefd-e54f1c0d1a20': {
		'team': 'Green Bay Packers'
	},
	'545d6178-62b4-4e6e-a118-60e4f66d257d': {
		'team': 'Houston Texans'
	},
	'557d1013-6b50-4998-885b-d121af071867': {
		'team': 'Indianapolis Colts'
	},
	'0fc8a1cb-bb61-4eba-b448-1d313813f0d1': {
		'team': 'Jacksonville Jaguars'
	},
	'3a857729-4c8c-4dde-9cad-359cab5990de': {
		'team': 'Kansas City Chiefs'
	},
	'3f53d6c3-46ae-4a68-833e-fc29c8ecbdb2': {
		'team': 'Los Angeles Rams'
	},
	'49b7f5ba-da40-4b42-be4b-c68b4f9257e8': {
		'team': 'Miami Dolphins'
	},
	'273bc0eb-8984-4474-bbc8-5cce491aa662': {
		'team': 'Minnesota Vikings'
	},
	'5546974d-27c2-4d93-a63e-d8320952e871': {
		'team': 'New England Patriots'
	},
	'a192531d-e60c-4256-8220-f3538dd8b020': {
		'team': 'New Orleans Saints'
	},
	'47b8904b-4d56-481a-ab06-6e56dfe59f78': {
		'team': 'New York Giants'
	},
	'8112be50-1ec2-47c0-ab27-b4fc4654aa5b': {
		'team': 'New York Jets'
	},
	'bf836ba5-77d0-4125-aa8a-ab785705eb29': {
		'team': 'Oakland Raiders'
	},
	'9990f062-0d8d-4dbf-82cc-73f3d5dfe532': {
		'team': 'Philadelphia Eagles'
	},
	'e5796fc5-4c5e-486d-a76d-5879fd2f5117': {
		'team': 'Pittsburgh Steelers'
	},
	'd1f76207-7303-484f-a25f-b00d1eb46ecd': {
		'team': 'San Diego Chargers'
	},
	'62b050a0-42c8-4cdd-aaaf-1ee5bbb01bf3': {
		'team': 'San Francisco 49ers'
	},
	'e6094723-20f3-417a-87d2-1ccc0b7a6388': {
		'team': 'Seattle Seahawks'
	},
	'0d0cfd49-bea6-4ad0-a263-5a350865b99e': {
		'team': 'Tampa Bay Buccaneers'
	},
	'a8004516-b1d9-44df-b6ba-d5e4b7d9d1d7': {
		'team': 'Tennessee Titans'
	},
	'1c4f553a-bde3-4229-8565-9c40401a9956': {
		'team': 'Washington Redskins'
	}
}

angular.module('StillerCalendar.controllers', []).controller('calendarController', function($scope, stillerService) {
	$scope.calendar = [];
	
	stillerService.getCalendar().success(function(response) {
		for (var i = response.games.length - 1; i >= 0; i--) {
			var homeTeam = response.games[i].home_team_id;
			var awayTeam = response.games[i].away_team_id;
			
			var where = (homeTeam == 'e5796fc5-4c5e-486d-a76d-5879fd2f5117') ? 'vs. ' : '@ ';
			var team = (homeTeam == 'e5796fc5-4c5e-486d-a76d-5879fd2f5117') ? team_ids[awayTeam].team : team_ids[homeTeam].team;
			var status = (homeTeam == 'e5796fc5-4c5e-486d-a76d-5879fd2f5117') ? response.games[i].home_team_outcome : response.games[i].away_team_outcome;
			$scope.calendar.push({
				'where': where,
				'team': team,
				'date': response.games[i].on,
				'week': response.games[i].interval_number,
				'status': status,
				'score': response.games[i].score
			});
		}
	});
});

/*
angular.module('SixersApp.controllers', []).controller('sixersController', function($scope, sixersService) {
	$scope.schedule = [];
	
	sixersService.getSchedule().success(function(response) {
		console.log(response);
	});
});
*/