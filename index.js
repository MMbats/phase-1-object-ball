// src/00-objectball.js

// Step 1: Building the Object
function gameObject() {
    return {
      home: {
        teamName: "Brooklyn Nets",
        colors: ["Black", "White"],
        players: {
          "Alan Anderson": {
            number: 0,
            shoe: 16,
            points: 22,
            rebounds: 12,
            assists: 12,
            steals: 3,
            blocks: 1,
            slamDunks: 1,
          },
          "Reggie Evans": {
            number: 30,
            shoe: 14,
            points: 12,
            rebounds: 12,
            assists: 12,
            steals: 12,
            blocks: 12,
            slamDunks: 7,
          },
          "Brook Lopez": {
            number: 11,
            shoe: 17,
            points: 17,
            rebounds: 19,
            assists: 10,
            steals: 3,
            blocks: 1,
            slamDunks: 15,
          },
          "Mason Plumlee": {
            number: 1,
            shoe: 19,
            points: 26,
            rebounds: 12,
            assists: 6,
            steals: 3,
            blocks: 8,
            slamDunks: 5,
          },
          "Jason Terry": {
            number: 31,
            shoe: 15,
            points: 19,
            rebounds: 2,
            assists: 2,
            steals: 4,
            blocks: 11,
            slamDunks: 1,
          },
        },
      },
      away: {
        teamName: "Charlotte Hornets",
        colors: ["Turquoise", "Purple"],
        players: {
          "Jeff Adrien": {
            number: 4,
            shoe: 18,
            points: 10,
            rebounds: 1,
            assists: 1,
            steals: 2,
            blocks: 7,
            slamDunks: 2,
          },
          "Bismak Biyombo": {
            number: 0,
            shoe: 16,
            points: 12,
            rebounds: 4,
            assists: 7,
            steals: 7,
            blocks: 15,
            slamDunks: 10,
          },
          "DeSagna Diop": {
            number: 2,
            shoe: 14,
            points: 24,
            rebounds: 12,
            assists: 12,
            steals: 4,
            blocks: 5,
            slamDunks: 5,
          },
          "Ben Gordon": {
            number: 8,
            shoe: 15,
            points: 33,
            rebounds: 3,
            assists: 2,
            steals: 1,
            blocks: 1,
            slamDunks: 0,
          },
          "Brendan Haywood": {
            number: 33,
            shoe: 15,
            points: 6,
            rebounds: 12,
            assists: 12,
            steals: 22,
            blocks: 5,
            slamDunks: 12,
          },
        },
      },
    };
  }
  
  // Step 2: Building Functions
  function homeTeamName() {
    return gameObject().home.teamName;
  }
  
  function awayTeamName() {
    return gameObject().away.teamName;
  }
  
  function numPointsScored(playerName) {
    let players = gameObject().home.players;
    if (players[playerName]) {
      return players[playerName].points;
    }
    players = gameObject().away.players;
    return players[playerName] ? players[playerName].points : undefined;
  }
  
  function shoeSize(playerName) {
    let players = gameObject().home.players;
    if (players[playerName]) {
      return players[playerName].shoe;
    }
    players = gameObject().away.players;
    return players[playerName] ? players[playerName].shoe : undefined;
  }
  
  function teamColors(teamName) {
    let teams = gameObject();
    if (teams.home.teamName === teamName) {
      return teams.home.colors;
    } else if (teams.away.teamName === teamName) {
      return teams.away.colors;
    }
    return [];
  }
  
  function teamNames() {
    return [gameObject().home.teamName, gameObject().away.teamName];
  }
  
  function playerNumbers(teamName) {
    let team = gameObject();
    let numbers = [];
    
    if (team.home.teamName === teamName) {
      for (let player in team.home.players) {
        numbers.push(team.home.players[player].number);
      }
    } else if (team.away.teamName === teamName) {
      for (let player in team.away.players) {
        numbers.push(team.away.players[player].number);
      }
    }
    
    return numbers;
  }
  
  function playerStats(playerName) {
    let players = gameObject().home.players;
    if (players[playerName]) {
      return players[playerName];
    }
    players = gameObject().away.players;
    return players[playerName] ? players[playerName] : undefined;
  }
  
  function bigShoeRebounds() {
    let players = gameObject().home.players;
    let largestShoeSize = 0;
    let playerWithLargestShoe;
  
    for (let player in players) {
      if (players[player].shoe > largestShoeSize) {
        largestShoeSize = players[player].shoe;
        playerWithLargestShoe = player;
      }
    }
  
    players = gameObject().away.players;
    
    for (let player in players) {
      if (players[player].shoe > largestShoeSize) {
        largestShoeSize = players[player].shoe;
        playerWithLargestShoe = player;
      }
    }
  
    return playerWithLargestShoe ? gameObject().home.players[playerWithLargestShoe]?.rebounds || gameObject().away.players[playerWithLargestShoe]?.rebounds : 0;
  }
  
  // Bonus Functions
  function mostPointsScored() {
    let players = { ...gameObject().home.players, ...gameObject().away.players };
    let mostPoints = 0;
    let topScorer;
  
    for (let player in players) {
      if (players[player].points > mostPoints) {
        mostPoints = players[player].points;
        topScorer = player;
      }
    }
  
    return topScorer;
  }
  
  function winningTeam() {
    let homePoints = Object.values(gameObject().home.players).reduce((sum, player) => sum + player.points, 0);
    let awayPoints = Object.values(gameObject().away.players).reduce((sum, player) => sum + player.points, 0);
    
    return homePoints > awayPoints ? gameObject().home.teamName : gameObject().away.teamName;
  }
  
  function playerWithLongestName() {
    let players = { ...gameObject().home.players, ...gameObject().away.players };
    let longestName = '';
  
    for (let player in players) {
      if (player.length > longestName.length) {
        longestName = player;
      }
    }
  
    return longestName;
  }
  
  // Super Bonus
  function doesLongNameStealATon() {
    let player = playerWithLongestName();
    let players = { ...gameObject().home.players, ...gameObject().away.players };
    return players[player] && players[player].steals > 0;
  }
  
  // Test your functions in the console
  console.log(gameObject());
  console.log(homeTeamName());
  console.log(awayTeamName());
  console.log(numPointsScored("Alan Anderson"));
  console.log(shoeSize("Alan Anderson"));
  console.log(teamColors("Brooklyn Nets"));
  console.log(teamNames());
  console.log(playerNumbers("Brooklyn Nets"));
  console.log(playerStats("Alan Anderson"));
  console.log(bigShoeRebounds());
  console.log(mostPointsScored());
  console.log(winningTeam());
  console.log(playerWithLongestName());
  console.log(doesLongNameStealATon());
  