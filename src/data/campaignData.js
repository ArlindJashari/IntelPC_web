export const tabs = [
  {
    id: 'overview',
    label: 'Overview',
    number: '01',
    image: '/dist/assets/a_clean_graphic_design_scene_a_dark_navy_blue_bac_1_batch_1_clean-2OI0Pp8O.png'
  },
  {
    id: 'trainings',
    label: 'Trainings',
    number: '02',
    image: '/dist/assets/trainings-_IEcgcw7.png'
  },
  {
    id: 'prizes',
    label: 'Prizes',
    number: '03',
    image: '/dist/assets/prizes-Csqjv3EC.png'
  },
  {
    id: 'challenges',
    label: 'Challenges',
    number: '04',
    image: '/dist/assets/a_clean_graphic_design_image_overall_scene_is_a_w_4_batch_4_clean-C0GTb1Dp.png'
  },
  {
    id: 'photowall',
    label: 'Photo Wall',
    number: '05',
    image: '/dist/assets/photo-wall-_6CO2LyC.png'
  }
];

export const hero = {
  title: 'INTEL PC CHAMPIONS 2026',
  subtitle: 'JUNE 3 – JULY 15, 2026 · PARTNER SHOWCASE',
  note: 'Placeholder — final campaign artwork will replace this block'
};

export const infoStats = [
  { id: 'trainings', label: 'Trainings', value: '8 of 14', qualifier: 'complete', progress: 57 },
  { id: 'challenges', label: 'Challenges', value: '3 of 7', qualifier: 'complete', progress: 43 },
  { id: 'store', label: 'Store', value: '3/4 reps', secondaryValue: '56/72 trainings', progress: 78 }
];

export const trainingWeeks = [
  {
    title: 'Week 3 — Current Week',
    current: true,
    trainings: [
      { name: 'Intel Graphics', complete: false },
      { name: 'Students that Game', complete: false },
      { name: 'Norton Products', complete: false }
    ]
  },
  {
    title: 'Week 2',
    current: false,
    trainings: [
      { name: 'Intel Processor Lineup', complete: true },
      { name: 'Norton Scam Protection', complete: true },
      { name: 'How to Sell Lenovo #2', complete: true },
      { name: 'How to Sell Acer #2', complete: false }
    ]
  },
  {
    title: 'Week 1',
    current: false,
    trainings: [
      { name: 'Selling Latest PTL Devices', complete: true },
      { name: 'Selling Latest ARLR Devices', complete: true },
      { name: 'How to Sell Lenovo #1', complete: true },
      { name: 'Sell up Between Acer Devices', complete: true }
    ]
  }
];

export const challenges = [
  {
    id: 'acer-challenge',
    name: 'Acer Challenge',
    type: 'Training Pair · Auto-Validate',
    description: 'Complete both Acer trainings to earn a drawing entry.',
    status: 'In Progress',
    statusTone: 'progress',
    progress: { current: 1, total: 2, percent: 50 },
    brand: 'acer'
  },
  {
    id: 'lenovo-challenge',
    name: 'Lenovo Challenge',
    type: 'Training Pair · Auto-Validate',
    description: 'Complete both Lenovo trainings to earn a drawing entry.',
    status: 'Complete',
    statusTone: 'complete',
    progress: { current: 2, total: 2, percent: 100 },
    brand: 'Lenovo'
  },
  {
    id: 'norton-challenge',
    name: 'Norton Challenge',
    type: 'Training Pair · Auto-Validate',
    description: 'Complete both Norton trainings to earn a drawing entry.',
    status: 'Not Started',
    statusTone: 'idle',
    progress: { current: 0, total: 2, percent: 0 },
    brand: 'norton'
  },
  {
    id: 'team-photo',
    name: 'Team Photo',
    type: 'Photo Upload · Manual Review',
    description: 'Photo of your Retail and OEM teammates. Approved photo is displayed on the Photo Wall.',
    status: 'Approved',
    statusTone: 'approved',
    brand: 'team'
  },
  {
    id: 'lenovo-sku-selfie',
    name: 'Lenovo SKU Selfie',
    type: 'Photo Upload · Manual Review',
    description: 'Selfie with your favorite Lenovo ICU3 SKU to sell. Your submission is being reviewed.',
    status: 'Pending Review',
    statusTone: 'pending',
    brand: 'Lenovo'
  },
  {
    id: 'acer-sku-selfie',
    name: 'Acer SKU Selfie',
    type: 'Photo Upload · Manual Review',
    description: 'Selfie with your favorite Acer SKU to sell.',
    status: 'Denied',
    statusTone: 'denied',
    denialReason: 'Photo does not clearly show an Acer device. Please retake with the SKU clearly visible.',
    actionLabel: 'Upload New Photo',
    brand: 'acer'
  },
  {
    id: 'norton-sku-selfie',
    name: 'Norton SKU Selfie',
    type: 'Photo Upload · Manual Review',
    description: 'Selfie with your favorite Norton SKU to sell.',
    status: 'Not Started',
    statusTone: 'idle',
    actionLabel: 'Upload Photo',
    brand: 'norton'
  }
];

export const storeChallenge = {
  status: 'Not yet qualified',
  message: '1 more participant and 16 more trainings needed',
  criteria: [
    {
      id: 'participating-reps',
      label: 'Criterion 1 · Participating Reps',
      value: '3',
      target: '/ 4 required',
      progress: 75,
      description: '4 or more RSPs from the same store must participate.'
    },
    {
      id: 'total-trainings',
      label: 'Criterion 2 · Total Promotional Trainings',
      value: '56',
      target: '/ 72 required',
      progress: 78,
      description: 'Combined promotional training completions across participating RSPs.'
    }
  ]
};

export const photoWallItems = [
  { id: 'team-1', type: 'team', title: 'Best Buy #1234 — Full Team', uploader: 'James C.', hearts: 12 },
  { id: 'lenovo-1', type: 'lenovo', title: 'My Favorite Lenovo ThinkPad', uploader: 'Sarah M.', hearts: 8 },
  { id: 'acer-1', type: 'acer', title: 'Acer Predator Setup', uploader: 'Marcus R.', hearts: 5 },
  { id: 'norton-1', type: 'norton', title: 'Norton 360 Display', uploader: 'Priya K.', hearts: 4 },
  { id: 'team-2', type: 'team', title: 'Season 2 — here we come!', uploader: 'Dorothy H.', hearts: 15 },
  { id: 'lenovo-2', type: 'lenovo', title: 'Lenovo Legion Pro Pick', uploader: 'Tyler W.', hearts: 7 },
  { id: 'acer-2', type: 'acer', title: '', uploader: 'Chris L.', hearts: 3 },
  { id: 'team-3', type: 'team', title: 'Best Buy #0485 Team', uploader: 'Devon S.', hearts: 9 }
];

export const filters = [
  { id: 'all', label: 'All' },
  { id: 'team', label: 'Team Photos' },
  { id: 'lenovo', label: 'Lenovo' },
  { id: 'acer', label: 'Acer' },
  { id: 'norton', label: 'Norton' }
];
