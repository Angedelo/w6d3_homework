const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  const journeys = this.journeys;
  const result = journeys.map((journey) => {
    return journey.startLocation;
  });
  return result;
};

Traveller.prototype.getJourneyEndLocations = function () {
  const journeys = this.journeys;
  const result = journeys.map((journey) => {
    return journey.endLocation;
  });
  return result;
};

Traveller.prototype.getModesOfTransport = function () {
  const journeys = this.journeys;
  const result = journeys.map((journey) => {
    return journey.transport;
  });
  return result;
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  const journeys = this.journeys;
  const result = journeys.filter((journey) => {
    return journey.transport === transport;
  });
  return result;
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  const journeys = this.journeys;
  const result = journeys.filter((journey) => {
    return journey.distance >= minDistance;
  });
  return result;
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  const journeys = this.journeys;
  const result = journeys.reduce((acc, journey) => {
    return acc + journey.distance;
  }, 0);
  return result;
};

Traveller.prototype.getUniqueModesOfTransport = function () {
  const journeys = this.journeys;
  const result = journeys.map((journey) => {
    return journey.transport;
  });
  const uniques = [...new Set(result)];
  return uniques;
};


module.exports = Traveller;
