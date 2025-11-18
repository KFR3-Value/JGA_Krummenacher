/* trip_data.js */
window.tripDataMap = {
    LIS: {
        title: "Krummenacher's JGA | Lisbon 2026",
        dates: '30.7.2026 - 2.8.2026',
        groupSize: 12,
        planningAssumptions: [
            '<strong>✈️ Flights:</strong> <a href="https://www.google.com/travel/flights/s/KVk9aCzjjiKw5MhDA" target="_blank" class="text-blue-600 hover:underline">Group Booking Link (LIS)</a>',
            '<strong>Group Size:</strong> 12 people'
        ],
        mapLink: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d99585.82815341797!2d-9.22772304865925!3d38.74368828603518!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd19331a61e4f33b%3A0x400ebbde49036d0!2sLisbon%2C%20Portugal!5e0!3m2!1sen!2sch!4v1680000000000!5m2!1sen!2sch',
        villas: [
            { name: 'Option 1: Recommended Villa', description: 'Best option for group size and location.', price: 9952, link: '#', recommended: true },
            { name: 'Option 2: Budget Villa', description: 'Cheaper but fewer beds.', price: 7551, link: '#' },
            { name: 'Option 3: Fancy Villa', description: 'Great pool, fewer beds.', price: 8376, link: '#' }
        ],
        venues: [
            { name: 'Beach Club', link: '#', desc: 'Sunset party target' },
            { name: 'Main Club', link: '#', desc: 'Night club target' }
        ],
        activities: [
            { name: 'Boat Rental', link: '#', desc: 'Tagus river cruise' }
        ],
        days: [
            { 
                date: 'Thursday, 30 July', 
                events: [
                    { start: 17*60, end: 18*60, title: 'Arrival (LIS)', desc: 'Transfer to villa', type: 'travel' },
                    { start: 21*60, end: 23*60, title: 'Dinner', desc: 'First beers', type: 'food' },
                    { start: 23*60, end: 27*60, title: 'Bairro Alto', desc: 'Bar hop', type: 'party' }
                ] 
            },
            { 
                date: 'Friday, 31 July', 
                events: [
                    { start: 10*60, end: 11*60+30, title: 'Breakfast', desc: 'Coffee time', type: '' },
                    { start: 16*60, end: 21*60, title: 'Beach Club', desc: 'Sunset party', type: 'party' }
                ] 
            },
            { 
                date: 'Saturday, 1 Aug', 
                events: [
                    { start: 11*60, end: 13*60, title: 'Brunch', desc: 'Late brunch', type: 'food' },
                    { start: 13*60, end: 17*60, title: 'Pool / Chill', desc: 'Recovery', type: 'chill' }
                ] 
            },
            { 
                date: 'Sunday, 2 Aug', 
                events: [
                    { start: 8*60+30, end: 10*60, title: 'Pack', desc: 'Cleanup', type: 'chill' },
                    { start: 11*60, end: 12*60, title: 'Transfer', desc: 'To Airport', type: 'travel' }
                ] 
            }
        ],
        budgetDefaults: { villaIndex: 0, flightCost: 3500, foodCost: 1200, partyCost: 5000, taxiCost: 400, vipCost: 1000 }
    },

    OLB: {
        title: "Sardinia 2026: Bachelor Party",
        dates: '30.7.2026 - 2.8.2026',
        groupSize: 12,
        planningAssumptions: [
            '<strong>✈️ Flights:</strong> <a href="https://www.google.com/travel/flights/s/iuFqMEP3SZSTh5VX9" target="_blank" class="text-blue-600 hover:underline">Group Booking Link (OLB)</a>',
            '<strong>Group Size:</strong> 12 people'
        ],
        mapLink: 'https://www.google.com/maps/d/embed?mid=1llBgapejXPMItlRJo_1-UfRO9zqiR2A&ehbc=2E312F',
        villas: [
            { name: 'Porto Cervo Villa (10 beds)', description: 'Best bed ratio and location.', price: 9952, link: 'https://www.airbnb.ch/rooms/13984569', airbnbId: '13984569', recommended: true },
            { name: 'Villa Bianca (8 beds)', description: 'Cheapest option, fewer beds.', price: 7551, link: 'https://www.airbnb.ch/rooms/1310299376544480821', airbnbId: '1310299376544480821' },
            { name: 'Panoramavilla (7 beds)', description: 'Best pool, fewer beds.', price: 8376, link: 'https://www.airbnb.ch/rooms/1459460390096881872', airbnbId: '1459460390096881872' }
        ],
        venues: [
            { name: 'Phi Beach', link: 'https://phibeach.com/', desc: 'Day party' },
            { name: 'Ritual Club', link: 'https://ritual.it/', desc: 'Castle club' }
        ],
        activities: [
            { name: 'Boat Rental', link: '#', desc: 'BWA 22 Sport GTO' }
        ],
        days: [
            { 
                date: 'Thursday, 30 July', 
                events: [
                    { start: 17*60, end: 18*60, title: 'Arrive ZRH', desc: 'Meetup', type: 'travel' },
                    { start: 19*60+25, end: 21*60, title: 'Flight', desc: 'To OLB', type: 'travel' },
                    { start: 23*60+55, end: 28*60, title: 'Ritual Club', desc: 'Party night', type: 'party' }
                ] 
            },
            { 
                date: 'Friday, 31 July', 
                events: [
                    { start: 10*60, end: 11*60+30, title: 'Supplies', desc: 'Supermarket run', type: '' },
                    { start: 16*60, end: 21*60, title: 'PHI BEACH', desc: 'Main event', type: 'party' }
                ] 
            },
            { 
                date: 'Saturday, 1 Aug', 
                events: [
                    { start: 11*60, end: 13*60, title: 'Brunch', desc: 'Villa food', type: 'food' },
                    { start: 20*60, end: 23*60, title: 'Dinner', desc: 'Porto Cervo', type: 'food' }
                ] 
            },
            { 
                date: 'Sunday, 2 Aug', 
                events: [
                    { start: 8*60, end: 10*60, title: 'Pack', desc: 'Checkout', type: 'chill' },
                    { start: 12*60+35, end: 14*60+10, title: 'Flight', desc: 'Return', type: 'travel' }
                ] 
            }
        ],
        budgetDefaults: { villaIndex: 0, flightCost: 4200, foodCost: 1200, partyCost: 6000, taxiCost: 600, vipCost: 1200 }
    }
};