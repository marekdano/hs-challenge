import getPartnersAvailability from './solution';

test('should return empty array of countries when no partners provided', () => {
  const partnersObj = {"partners": []}
  const resultObj = {"countries": []}

  expect(getPartnersAvailability(partnersObj)).toEqual(resultObj)
})

test('should return list of countries with partnerts and their available dates', () => {
  const partnersObj = {
    "partners": [
        {
            "firstName": "Darin",
            "lastName": "Daignault",
            "email": "ddaignault@hspartners.com",
            "country": "United States",
            "availableDates": [
                "2017-05-03",
                "2017-05-06"
            ]
        },
        {
            "firstName": "Crystal",
            "lastName": "Brenna",
            "email": "cbrenna@hspartners.com",
            "country": "Ireland",
            "availableDates": [
                "2017-04-27",
                "2017-04-29",
                "2017-04-30"
            ]
        },
        {
            "firstName": "Janyce",
            "lastName": "Gustison",
            "email": "jgustison@hspartners.com",
            "country": "Spain",
            "availableDates": [
                "2017-04-29",
                "2017-04-30",
                "2017-05-01"
            ]
        },
        {
            "firstName": "Tifany",
            "lastName": "Mozie",
            "email": "tmozie@hspartners.com",
            "country": "Spain",
            "availableDates": [
                "2017-04-28",
                "2017-04-29",
                "2017-05-01",
                "2017-05-04"
            ]
        },
        {
            "firstName": "Temple",
            "lastName": "Affelt",
            "email": "taffelt@hspartners.com",
            "country": "Spain",
            "availableDates": [
                "2017-04-28",
                "2017-04-29",
                "2017-05-02",
                "2017-05-04"
            ]
        },
        {
            "firstName": "Robyn",
            "lastName": "Yarwood",
            "email": "ryarwood@hspartners.com",
            "country": "Spain",
            "availableDates": [
                "2017-04-29",
                "2017-04-30",
                "2017-05-02",
                "2017-05-03"
            ]
        },
        {
            "firstName": "Shirlene",
            "lastName": "Filipponi",
            "email": "sfilipponi@hspartners.com",
            "country": "Spain",
            "availableDates": [
                "2017-04-30",
                "2017-05-01"
            ]
        },
        {
            "firstName": "Oliver",
            "lastName": "Majica",
            "email": "omajica@hspartners.com",
            "country": "Spain",
            "availableDates": [
                "2017-04-28",
                "2017-04-29",
                "2017-05-01",
                "2017-05-03"
            ]
        },
        {
            "firstName": "Wilber",
            "lastName": "Zartman",
            "email": "wzartman@hspartners.com",
            "country": "Spain",
            "availableDates": [
                "2017-04-29",
                "2017-04-30",
                "2017-05-02",
                "2017-05-03"
            ]
        },
        {
            "firstName": "Eugena",
            "lastName": "Auther",
            "email": "eauther@hspartners.com",
            "country": "United States",
            "availableDates": [
                "2017-05-04",
                "2017-05-09"
            ]
        }
    ]
  }

  const resultObj = {
    "countries": [
        {
            "attendeeCount": 1,
            "attendees": [
                "cbrenna@hspartners.com"
            ],
            "name": "Ireland",
            "startDate": "2017-04-29"
        },
        {
            "attendeeCount": 0,
            "attendees": [],
            "name": "United States",
            "startDate": null
        },
        {
            "attendeeCount": 3,
            "attendees": [
                "omajica@hspartners.com",
                "taffelt@hspartners.com",
                "tmozie@hspartners.com"
            ],
            "name": "Spain",
            "startDate": "2017-04-28"
        }
    ]
  }

  expect(getPartnersAvailability(partnersObj)).toEqual(resultObj)
})