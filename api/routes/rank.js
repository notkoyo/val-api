require("dotenv").config();

const getRank = async (req, res, next) => {
  const { region, username, tag } = req.params;

  const rawData = await fetch(`https://api.henrikdev.xyz/valorant/v1/mmr/${region}/${username}/${tag}`, {
    headers: {Authorization: process.env.API_KEY},
  });
  const { data } = await rawData.json();
  const rank = data.currenttierpatched;
  const rr = data.ranking_in_tier;
  res.status(200).send({ rank, rr, msg: `${rank} - ${rr}RR`});
};

module.exports = getRank;