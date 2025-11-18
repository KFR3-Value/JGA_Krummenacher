/* trip_data.js - data-only file for the trip template. Edit values here. */
window.tripData = {
  title: "Krummenacher's JGA | Lisbon 2026",
  dates: '30.7.2026 - 2.8.2026',
  groupSize: 12,
  planningAssumptions: [
    '<strong>✈️ Flights:</strong> <a href="https://www.google.com/travel/flights/s/KVk9aCzjjiKw5MhDA" target="_blank">Group Booking Link</a>',
    '<strong>Group Size:</strong> 12 people'
  ],
  mapLink: 'https://www.google.com/maps/d/embed?mid=1llBgapejXPMItlRJo_1-UfRO9zqiR2A&ehbc=2E312F',
  villas: [
    { name: 'Porto Cervo Villa (10 beds)', description: 'Best bed ratio and location.', price: 9952, link: 'https://www.airbnb.ch/rooms/13984569', recommended: true },
    { name: 'Villa Bianca (8 beds)', description: 'Cheapest option, fewer beds.', price: 7551, link: 'https://www.airbnb.ch/rooms/1310299376544480821' },
    { name: 'Panoramavilla (7 beds)', description: 'Best pool, fewer beds.', price: 8376, link: 'https://www.airbnb.ch/rooms/1459460390096881872' }
  ],
  venues: [
    { name: 'Phi Beach', link: 'https://phibeach.com/', desc: 'Day party at the beach club', domain: 'phibeach.com' },
    { name: 'Ritual Club', link: 'https://ritual.it/', desc: 'Night club, the castle-discoteca', domain: 'ritual.it' },
    { name: 'Blu Beach Club', link: 'https://en.blubeach.club/club', desc: 'Alternative day venue', domain: 'en.blubeach.club' }
  ],
  activities: [
    { name: 'Boat Rental (BWA 22 Sport GTO)', link: 'https://www.clickandboat.com/en/boat-rental/olbia/boat-without-licence/bwa-22-sport-gto-kkgw8d8?fromDate=2026-07-31&toDate=2026-07-31', desc: 'Day trip option for Saturday.' }
  ],
  days: [
    {
      date: 'Thursday, 30 July', subtitle: 'ARRIVAL',
      events: [
        { start: 17*60, end: 18*60-5, title: 'Arrival (LIS)', desc: 'Arrive & transfer to villa.', type: 'travel' },
        { start: 21*60, end: 23*60, title: 'Dinner', desc: 'Group dinner and first beers.', type: 'food' },
        { start: 23*60, end: 3*60 + 24*60, title: 'Bairro Alto', desc: 'Bar hop through Bairro Alto.', type: 'party' }
      ]
    },
    {
      date: 'Friday, 31 July', subtitle: 'PARTY DAY',
      events: [
        { start: 10*60, end: 11*60+30, title: 'Breakfast', desc: 'Group breakfast and coffee.', type: '' },
        { start: 16*60, end: 21*60, title: 'Beach Club', desc: 'Sunset party and DJ set.', type: 'party' }
      ]
    },
    {
      date: 'Saturday, 1 Aug', subtitle: 'RECOVERY',
      events: [
        { start: 11*60, end: 13*60, title: 'Brunch', desc: 'Late brunch at the villa.', type: 'food' },
        { start: 13*60, end: 17*60, title: 'Pool / Chill', desc: 'Pool time and recovery.', type: 'chill' }
      ]
    },
    {
      date: 'Sunday, 2 Aug', subtitle: 'DEPARTURE',
      events: [
        { start: 8*60+30, end: 10*60+15, title: 'Pack & Clean', desc: 'Pack bags and final tidy up.', type: 'chill' },
        { start: 10*60+45, end: 11*60+30, title: 'Transfer', desc: 'Pre-booked taxis to the airport.', type: 'travel' }
      ]
    }
  ],
  budgetDefaults: {
    villaIndex: 0,
    flightCost: 4200,
    foodCost: 1200,
    partyCost: 6000,
    taxiCost: 600,
    vipCost: 1200
  }
};
