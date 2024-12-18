const Constants = {
    logEventActions: {
        // Do no modify these in any case !!
        0: "Participant status",
        1: "Participant comment",
        2: "Email sent",
        3: "Session status",
        4: "Session comment",
        5: "Session locked",
        6: "Cancelling session",
        7: "Session bonus",
        // 8: "Parameter change",
        // 9: "Survey status",
        10: "Ethnicity",
        11: "Device change",
        12: "Participant status 2",
        13: "Date of birth",
        14: "S2 protocol"
    },
    emailTypes: {
        // Do no modify these in any case !!
        0: "Handoff",
        // 1: "Handoff reminder",
        2: "Booking confirmation",
        3: "Booking reminder",
        4: "Handoff2",
        // 5: "Handoff reminder2",
        6: "Booking confirmation2",
        7: "Booking reminder2",
        8: "ICF request2"
    },
    logLimiter: [
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        30,
        60,
        90
    ],
    bonusAmounts: [
        0,
        10,
        20,
        30,
        40,
        50,
        60,
        70,
        80,
        90,
        100,
        110,
        120,
        130,
        140,
        150
    ],
    participantStatuses: {
        // Do no modify these in any case !!
        0: "",
        1: "Contacted",
        // 2: "Reminded",
        // 3: "Pre-selected",
        // 4: "To call",
        5: "Scheduled",
        6: "Completed",
        7: "Rejected",
        8: "Duplicate",
        9: "Withdrawn",
        10: "Not selected",
    },
    sessionStatuses: {
        0: "Open",
        1: "Scheduled",
        2: "Checked In",
        3: "Completed",
        4: "Rescheduled",
        5: "NoShow",
        6: "Withdrawn",
        7: "Failed - Comp.",
        8: "Failed - No Comp."
    },
    s2SessionStatuses: [
        "N/A",
        "Scheduled",
        "Completed"
    ],
    s2SessionStatusesDict: {
        0: "N/A",
        1: "Scheduled",
        2: "Scheduled",
        3: "Completed",
        4: "N/A",
        5: "N/A",
        6: "N/A",
        7: "N/A",
        8: "N/A"
    },
    ethnicities: {
        0: "Aboriginal Australians/Papuans",
        1: "African/African-American/Black",
        2: "Alaskan Native",
        3: "East Asian",
        4: "Hispanic/Latin American/Spanish",
        5: "Native American",
        6: "Native Hawaiian/Pacific Islander/Indigenous people of Oceania",
        7: "Middle Eastern/North African",
        8: "South Asian",
        9: "Southeast Asian",
        10: "White - Northern European",
        11: "White - Southern European",
        12: "Prefer not to state",
        13: "Other"
    },
    ethnicityGroups: {
        "African/African-American/Black": [1],
        "East Asian": [3],
        "N. European / Med / Mid East": [7, 10, 11],
        "Latin / S. Amer": [4],
        "South Asian": [8],
        "Southeast Asian": [9],
        "Other": [0, 2, 5, 6, 12, 13]
    },
    ethnicityGroupShorts: {
        "African/African-American/Black": "Afr/Am/Black",
        "East Asian": "E. Asian",
        "N. European / Med / Mid East": "N. Eur/Med/Mid E",
        "Latin / S. Amer": "Lat/S. Amer",
        "South Asian": "South Asian",
        "Southeast Asian": "Southeast Asian",
        "Other": "Other"
    },
    genders: {
        // Do no modify these in any case !!
        0: "Female",
        1: "Male",
        2: "Non-binary",
        3: "Prefer not to say"
    },
    ageRanges: [
        "<18",
        "18-20",
        "21-30",
        "31-40",
        "41-50",
        "51-60",
        "61-70",
        "71-75",
        "75+"
    ],
    industries: {
        // Do no modify these in any case !!
        0: 'Agriculture',
        1: 'Data processing',
        2: 'Education',
        3: 'Entertainment',
        4: 'Finance',
        5: 'Food services',
        6: 'Health care',
        7: 'Hotel services',
        8: 'Information services / Technology',
        9: 'Legal services',
        10: 'Marketing / Media',
        11: 'Military',
        12: 'Publishing',
        13: 'Utilities',
        14: 'I am currently not employed',
        15: 'Other'
    },
    studySources: {
        0: 'TELUS International Website',
        1: 'I was referred by someone',
        2: 'Through my association',
        3: 'I was contacted by TELUS International directly',
        4: 'Facebook',
        5: 'Instagram',
        6: 'Twitter',
        7: 'Snapchat',
        8: 'LinkedIn',
        9: 'Indeed',
        10: 'Craigslist',
        11: 'Reddit',
        12: 'Flyer',
        13: 'FlexJobs',
        14: 'Retirement Jobs',
        15: 'Newspaper',
        16: 'Work Market platform',
        17: 'TELUS International SmartCrowd',
        18: "I'm a TELUS International employee",
        19: 'Other'
    },
    source: {
        1: 'Respondent',
        2: 'Recruiter 1',
        3: 'Recruiter 2'
    },
    otherCompanies: {
        0: 'Alphabet',
        1: 'Amazon',
        2: 'Apple',
        3: 'Facebook',
        4: 'Google',
        5: 'HTC',
        6: 'Huawei',
        7: 'Magic Leap',
        8: 'Lenovo',
        9: 'Meta',
        10: 'Microsoft',
        11: 'Nvidia',
        12: 'Qualcomm',
        13: 'Ray-Ban',
        14: 'Samsung',
        15: 'Sony',
        16: 'Unity',
        17: 'Viture',
        18: 'Vuzix',
        19: 'Xreal',
        20: 'None of these'
    },
    countries: {
        // Do no modify these in any case !!
        //0: '',
        1: 'Afghanistan',
        2: 'Albania',
        3: 'Algeria',
        4: 'Andorra',
        5: 'Angola',
        6: 'Antigua and Barbuda',
        7: 'Argentina',
        8: 'Armenia',
        9: 'Aruba',
        10: 'Australia',
        11: 'Austria',
        12: 'Azerbaijan',
        13: 'Bahamas, The',
        14: 'Bahrain',
        15: 'Bangladesh',
        16: 'Barbados',
        17: 'Belarus',
        18: 'Belgium',
        19: 'Belize',
        20: 'Benin',
        21: 'Bhutan',
        22: 'Bolivia',
        23: 'Bosnia and Herzegovina',
        24: 'Botswana',
        25: 'Brazil',
        26: 'Brunei',
        27: 'Bulgaria',
        28: 'Burkina Faso',
        29: 'Burma',
        30: 'Burundi',
        31: 'Cambodia',
        32: 'Cameroon',
        33: 'Canada',
        34: 'Cabo Verde',
        35: 'Central African Republic',
        36: 'Chad',
        37: 'Chile',
        38: 'China',
        39: 'Colombia',
        40: 'Comoros',
        41: 'Congo, Democratic Republic of the',
        42: 'Congo, Republic of the',
        43: 'Costa Rica',
        44: "Cote d'Ivoire",
        45: 'Croatia',
        46: 'Cuba',
        47: 'Curacao',
        48: 'Cyprus',
        49: 'Czechia',
        50: 'Denmark',
        51: 'Djibouti',
        52: 'Dominica',
        53: 'Dominican Republic',
        54: 'East Timor',
        55: 'Ecuador',
        56: 'Egypt',
        57: 'El Salvador',
        58: 'Equatorial Guinea',
        59: 'Eritrea',
        60: 'Estonia',
        61: 'Ethiopia',
        62: 'Fiji',
        63: 'Finland',
        64: 'France',
        65: 'Gabon',
        66: 'Gambia, The',
        67: 'Georgia',
        68: 'Germany',
        69: 'Ghana',
        70: 'Greece',
        71: 'Grenada',
        72: 'Guatemala',
        73: 'Guinea',
        74: 'Guinea-Bissau',
        75: 'Guyana',
        76: 'Haiti',
        77: 'Holy See',
        78: 'Honduras',
        79: 'Hong Kong',
        80: 'Hungary',
        81: 'Iceland',
        82: 'India',
        83: 'Indonesia',
        84: 'Iran',
        85: 'Iraq',
        86: 'Ireland',
        87: 'Israel',
        88: 'Italy',
        89: 'Jamaica',
        90: 'Japan',
        91: 'Jordan',
        92: 'Kazakhstan',
        93: 'Kenya',
        94: 'Kiribati',
        95: 'Korea, North',
        96: 'Korea, South',
        97: 'Kosovo',
        98: 'Kuwait',
        99: 'Kyrgyzstan',
        100: 'Laos',
        101: 'Latvia',
        102: 'Lebanon',
        103: 'Lesotho',
        104: 'Liberia',
        105: 'Libya',
        106: 'Liechtenstein',
        107: 'Lithuania',
        108: 'Luxembourg',
        109: 'Macau',
        110: 'Macedonia',
        111: 'Madagascar',
        112: 'Malawi',
        113: 'Malaysia',
        114: 'Maldives',
        115: 'Mali',
        116: 'Malta',
        117: 'Marshall Islands',
        118: 'Mauritania',
        119: 'Mauritius',
        120: 'Mexico',
        121: 'Micronesia',
        122: 'Moldova',
        123: 'Monaco',
        124: 'Mongolia',
        125: 'Montenegro',
        126: 'Morocco',
        127: 'Mozambique',
        128: 'Namibia',
        129: 'Nauru',
        130: 'Nepal',
        131: 'Netherlands',
        132: 'New Zealand',
        133: 'Nicaragua',
        134: 'Niger',
        135: 'Nigeria',
        136: 'North Korea',
        137: 'Norway',
        138: 'Oman',
        139: 'Pakistan',
        140: 'Palau',
        141: 'Palestinian Territories',
        142: 'Panama',
        143: 'Papua New Guinea',
        144: 'Paraguay',
        145: 'Peru',
        146: 'Philippines',
        147: 'Poland',
        148: 'Portugal',
        149: 'Qatar',
        150: 'Romania',
        151: 'Russia',
        152: 'Rwanda',
        153: 'Saint Kitts and Nevis',
        154: 'Saint Lucia',
        155: 'Saint Vincent and the Grenadines',
        156: 'Samoa',
        157: 'San Marino',
        158: 'Sao Tome and Principe',
        159: 'Saudi Arabia',
        160: 'Senegal',
        161: 'Serbia',
        162: 'Seychelles',
        163: 'Sierra Leone',
        164: 'Singapore',
        165: 'Sint Maarten',
        166: 'Slovakia',
        167: 'Slovenia',
        168: 'Solomon Islands',
        169: 'Somalia',
        170: 'South Africa',
        171: 'South Korea',
        172: 'South Sudan',
        173: 'Spain',
        174: 'Sri Lanka',
        175: 'Sudan',
        176: 'Suriname',
        177: 'Swaziland',
        178: 'Sweden',
        179: 'Switzerland',
        180: 'Syria',
        181: 'Taiwan',
        182: 'Tajikistan',
        183: 'Tanzania',
        184: 'Thailand',
        185: 'Timor-Leste',
        186: 'Togo',
        187: 'Tonga',
        188: 'Trinidad and Tobago',
        189: 'Tunisia',
        190: 'Turkey',
        191: 'Turkmenistan',
        192: 'Tuvalu',
        193: 'Uganda',
        194: 'Ukraine',
        195: 'United Arab Emirates',
        196: 'United Kingdom',
        197: 'United States',
        198: 'Uruguay',
        199: 'Uzbekistan',
        200: 'Vanuatu',
        201: 'Venezuela',
        202: 'Vietnam',
        203: 'Yemen',
        204: 'Zambia',
        205: 'Zimbabwe'
    },
    usStates: {
        // Do no modify these in any case !!
        //0: '',
        1: 'Alabama',
        2: 'Alaska',
        3: 'Arizona',
        4: 'Arkansas',
        5: 'California',
        6: 'Colorado',
        7: 'Connecticut',
        8: 'Delaware',
        9: 'Florida',
        10: 'Georgia',
        11: 'Hawaii',
        12: 'Idaho',
        13: 'Illinois',
        14: 'Indiana',
        15: 'Iowa',
        16: 'Kansas',
        17: 'Kentucky',
        18: 'Louisiana',
        19: 'Maine',
        20: 'Maryland',
        21: 'Massachusetts',
        22: 'Michigan',
        23: 'Minnesota',
        24: 'Mississippi',
        25: 'Missouri',
        26: 'Montana',
        27: 'Nebraska',
        28: 'Nevada',
        29: 'New Hampshire',
        30: 'New Jersey',
        31: 'New Mexico',
        32: 'New York',
        33: 'North Carolina',
        34: 'North Dakota',
        35: 'Ohio',
        36: 'Oklahoma',
        37: 'Oregon',
        38: 'Pennsylvania',
        39: 'Rhode Island',
        40: 'South Carolina',
        41: 'South Dakota',
        42: 'Tennessee',
        43: 'Texas',
        44: 'Utah',
        45: 'Vermont',
        46: 'Virginia',
        47: 'Washington',
        48: 'West Virginia',
        49: 'Wisconsin',
        50: 'Wyoming',
        51: 'District of Columbia'
    },
    visionCorrection: {
        0: 'Reading glasses',
        1: 'Glasses',
        2: 'Contact lenses',
        3: 'None'
    },
    healthConditions: {
        0: 'Diagnostic of photo-induced seizures or epilepsy',
        1: 'Medical eye condition (other than prescriptive lenses or LASIK surgery)',
        2: 'Limited or no eyesight in one or both eyes, or lazy eyes',
        3: 'Currently taking photosensitizing medications or have any known photosensitizing medical conditions',
        4: 'Need assistance standing or have difficulty remaining standing for 10-20 minutes (for example, you feel unsteady on your feet)',
        5: 'Need assistance climbing a flight of stairs',
        6: 'Sensitivity to enclosed spaces',
        7: 'Advised by a medical provider against using an HMD (Head-mounted Display)',
        8: 'Allergy to adhesives used in motion capture markers?',
        9: 'Experiencing or recently experienced dizziness, lightheadedness, or vertigo that will worsen or be aggravated by wearing an HMD',
        10: 'Experiencing or have recently experienced altered or distorted thinking that will worsen or be aggravated by wearing an HMD',
        11: 'Balance or gait disorder or are considered a fall risk (i.e. coordination disorder)',
        12: 'I am not experiencing or do not have any of the above conditions.'
    },
    projects: {
        1: {
            'name': 'S1'
        },
        2: {
            'name': 'S2'
        }
    },
    wearingContactsOnStudy: {
        0: 'I have prescription contact lenses and can wear them for the duration of the session.',
        1: 'I only wear glasses and do not have contact lenses.',
        2: 'I do not need glasses or contact lenses.'
    },
    devices: {
        0: {
            'name': 'META',
            'limit': 3,
            'stations': [1, 4, 7]
        },
        1: {
            'name': 'VITURE',
            'limit': 5
        },
        2: {
            'name': 'XREAL',
            'limit': 5
        },
    },
    mssqValues: {
        1: 'Not Applicable - Never Travelled',
        2: 'Never Felt Sick',
        3: 'Rarely Felt Sick',
        4: 'Sometimes Felt Sick',
        5: 'Frequently Felt Sick'
    },
    mssqPercentiles: [
        'Not filled',
        'N/A',
        '0-10',
        '10-20',
        '20-30',
        '30-40',
        '40-50',
        '50-60',
        '60-70',
        '70-80',
        '80-90',
        '90-95',
        '95-100'
    ],
    clientSessionStatuses: {
        0: "New",
        1: "Checked in",
        2: "Completed",
        3: "Archived",
        4: "Failed"
    },
    protocols: {
        0: "Protocol A",
        1: "Protocol B"
    },
    visionCorrectionQuestion: {
        0: "Yes, I can read text holding the item 2.5ft away",
        1: "No, I cannot read the text without glasses",
    },
    scenarios: {
        0: "Undisguised",
        1: "Print Spoof",
        2: "Replay Spoof",
        3: "Cutout Spoof",
        4: "Wall Portrait Spoof",
        5: "Validation Photo",
        6: "Wall Protrait Validation",
        7: "Undisguised Validation",
        8: "Print Spoof Validation",
        9: "Replay Spoof Validation",
        10: "Cutout Spoof Validation"
    },
    assetType: {
        0: "How will this be handled???"
    },
    deviceHeight: {
        0: "2.3ft",
        1: "3.4ft"
    },
    approachAngle: {
        0: "left",
        1: "right",
        2: "center"
    },
    lighting: {
        0: "low",
        1: "medium",
        2: "bright"
    },
    clothing: {
    //bear in mind that here multiple selections are probable so perhaps checkboxes
        0: "tops",
        1: "sweatshirt",
        2: "jacket",
        3: "dress",
        4: "skirt",
        5: "suit",
        6: "sportswear",
        7: "none",
        8: "other"
    }
}

export default Constants;