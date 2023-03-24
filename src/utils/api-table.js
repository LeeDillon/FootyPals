// Empty array to store result objects from API call
var resultsArray = [];

const searchButton = document.getElementById("search-button");
searchButton.onclick(getTableData);

function getTableData() {
  const options = {
    method: "GET",
    url: "https://api-football-v1.p.rapidapi.com/v3/standings",
    params: { season: "2022", league: "39" },
    headers: {
      "X-RapidAPI-Key": "7ca1969ae9msh68d5bd0f9355080p110c06jsn199987ed9ba9",
      "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
    },
  };

  axios
    .request(options)
    .then(function (response) {
      for (
        let i = 0;
        i < response.data.response[0].league.standings.length;
        i++
      ) {
        const position = response.data.response[0].league.standings.rank;
        const team = response.data.response[0].league.standings.team.name;
        const played = response.data.response[0].league.standings.all.played;
        const goalDiff = response.data.response[0].league.standings.goalsDiff;
        const points = response.data.response[0].league.standings.points;
        const rowData = {
          position: position,
          team: team,
          played: played,
          goalDiff: goalDiff,
          points: points,
        };
        resultsArray.push(rowData);
      }
      console.log(resultsArray);
    })
    .catch(function (error) {
      console.error(error);
    });
  

}
// export default apiTable;
