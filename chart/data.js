const freq0 = [
[0,0,0,0,0,0,0,-2,0,0,0,2,0,0,0,-2,0,0,0,2,-2,-2,-2,-2,-4,-6,-2,-4,0,0,-4,-2,-4,-2,0,20,30,2,-24,-8,-2,-8,-4,0,-8,-6,-2,0,-2,0,4,4,6,6,8,10,8,12,14,16,18,12,10,10,18,10,2,2,0,0,2,2,2,0,0],
[-6,-8,-8,-6,-4,-6,-4,-4,-4,-4,-4,-4,-4,-4,-6,-8,-6,-8,-12,-12,-12,-14,-18,-18,-28,-36,-36,-32,-10,-10,-12,-18,-34,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,-2,2,-2,2,-2,-2,-2,0,-4,2,-8,-2,22,34,32,-6,0,10,0,8,12,14,12,6,6,-2,14,14,14,30,20,0,-38,-18,-6,0,6,4,8,6,8,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,2,2,0,-2,-4,-2,-2,-2,-4,-6,-8,-8,-6,-2,-2,-2,-2,-4,-4,-2,-2,-2,-6,-8,-6,-6,-8,-8,-10,-12,-16,-2,-6,6,-8,-4,-4,-4,0,2,2,2,4,4,8,8,8,10,8,8,8,2,4,4,4,2,0,0,2,2,2,2,4,6,2,2,2,2,0,0,0,2,2,0,0,0,0,0,0,],
[0,-2,2,0,-4,-4,-6,-6,-6,-6,-4,-2,-2,-2,-2,0,-4,-4,-4,-6,-8,-10,-10,-8,-10,-14,-14,-20,-28,-30,-32,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],


];
const freq90 = [
[1,1,1,0,1,1,2,2,1,0,-2,-2,-2,-3,-4,-8,-11,-12,-12,-12,-11,-12,-15,-22,-28,-27,-21,-18,-20,-23,-26,-25,-24,-22,-19,-17,-15,-15,-16,-18,-17,-16,-15,-16,-21,-26,-25,-18,-12,-10,-12,-17,-21,-20,-15,-10,-8,-6,-7,-8,-9,-12,-16,-17,-15,-11,-5,-1,1,0,1,2,5,8,10,7,4,2,1,1,1,1,3,5,7,8,-1,-16,-18,-14,-9,-11,-19,-22,-18,-7,2,4,4,1,0,-2,1,2,4,4,4,2,2,0,2,2,3,3,4,3,5,3,6,5,2,3,1,1,1,1,0,0,],
[-4,-4,-5,-5,-6,-6,-6,-5,-5,-5,-4,-4,-3,-3,-6,-9,-13,-12,-12,-12,-14,-20,-30,-38,-36,-29,-24,-23,-22,-21,-21,-20,-16,-13,-12,-12,-15,-18,-21,-23,-22,-21,-22,-27,-28,-21,-12,-7,-6,-7,-10,-13,-15,-14,-12,-12,-13,-15,-16,-13,-11,-10,-14,-25,-26,-17,1,8,8,7,-1,-4,-5,-6,-6,-5,-5,-5,-4,-3,1,10,17,12,0,-5,-7,-6,-6,-6,-5,-4,-4,-10,-17,-20,-14,-7,-2,0,1,0,0,-1,-1,0,0,1,2,2,2,2,3,3,3,3,2,2,2,1,3,3,4,4,5,5,4,3,3,3,2,3,2,3,2,2,1,0,0,3,4,11,13,7,-7,-10,-10,-8,-3,-3,1,1,1,-7,-7,-8,-3,1,3,5,4,4,3,3,3,3,2,3,2,2,-1,-1,-1,0,0,0,],
[],
[],
[]
];
const freq180 = [
[0,0,0,0,0,0,2,2,2,0,-4,-2,-2,0,-4,-4,-6,-6,-8,-6,-4,0,-6,-2,0,0,0,-4,-6,-8,-8,-16,-8,-14,-14,-14,-14,-14,-10,-10,-8,-4,-2,0,-4,0,2,-2,-12,-14,-22,-46,-56,-28,-10,-8,-8,-4,-6,-4,-4,-2,-2,-2,-2,-4,0,-2],
[0,0,0,0,0,0,0,0,0,0,2,2,0,-2,0,0,-4,-6,-4,-8,-4,-10,-8,-6,-4,-6,-10,-6,-6,-2,-8,-8,-4,-14,-16,-16,-14,-14,-16,-18,-24,-20,-16,-28,-44,-64,-58,-40,-18,-12,-14,-12,-12,-10,-12,-12,-12,-8,0,14,30,28,18,2,],
[0,0,0,0,2,2,2,2,-2,0,-4,-4,-2,-8,-8,-12,-12,-12,-8,-6,-2,-2,-6,-8,-12,-6,-8,-10,-10,-6,-6,-6,-4,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,0,-2,-2,-2,-2,-2,0,0,0,0,0,0,0,2,2,0,0,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,-2,-4,-4,-4,-8,-8,-12,-8,-8,-4,-8,-12,-4,-16,-16,-14,-12,-14,-14,-12,-12,-18,-18,-20,-18,-18,-18,-18,-18,-18,-26,-52,-56,-56,-30,-20,-14,-10,-10,-10,-8,-8,-8,-2],
[0,0,0,0,0,0,0,2,0,4,6,-8,-8,-10,-4,-16,0,-20,-28,-32,-26,-16,-18,-12,-8,-10,-12,-4,-4,-6,-2,-4,-4,0,0,-2,0,0,-2,-2,-4,-2,-2,-2,-4,-4,-2,-4,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,0,0,0,0,0,0,0,0]
];
const freq270 = [
[0,2,4,6,6,6,4,4,2,8,6,6,0,4,8,8,8,6,2,12,14,20,14,14,12,8,2,4,-4,-4,-6,-12,-8,-2,-4,-4,-2,-2,-2,0,0,0,-2,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,2,4,4,6,6,10,10,6,6,4,0,2,0,4,4,4,6,12,12,10,6,-4,-2,-4,-2,-2,-2,-2,-2,-2,-2,-2,-2,0,0],
[8,8,2,6,4,0,-4,-2,8,6,6,0,6,6,10,14,16,10,12,8,12,10,6,2,4,-2,-8,-4,-6,-10,-6,-8,-16,-2,-2,-2,-2,0,0,0,0,0,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,0,0,-4,-2,-2,0,8,2,6,8,6,4,6,2,4,4,14,6,4,4,6,10,8,0,0,-4,0,-4,-2,-4,-2,0,-2,-2,-2,-2,-4,-4,0,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,3,23,31,24,4,-1,0,-1,-2,-4,-6,-8,-8,-8,-11,7,21,26,6,1,-5,-8,-12,-15,-16,-16,-14,-12,-10,-9,-7,-7,-7,-7,14,-30,-9,-9,-9,-10,-11,-13,-15,-18,-18,-17,-15,-14,-13,-13,-14,-14,-14,-13,-13,-12,-11,-9,-6,-3,0,2,-1,-6,-10,-11,-9,-7,-5,-5,-5,-5,-5,-4,-3,-3,-3,1,-1,-5,-11,-6,-4,-4,-6,-5,12,1,0,-3,-6,-6,-11,-12,-15,-15,-10,-7,-3,-1,2,5,10,12,15,11,8,6,5,5,5,4,3,2,2,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,-1,-1,-1,-2,-3,-3,-4,-4,-5,-6,-6,-6,-6,-6,-6,-5,-5,-4,-3,-3,-2,-2,-2,-1,-1,-1,],
];


const freqData = {
  '0d': {
    ch1: [
      [],
      [],
      [],
      [],
      []
    ],
    ch2: [
      [],
      [],
      [],
      [],
      []
    ],
    ch3: [
      [],
      [],
      [],
      [],
      []
    ],
    ch4: [
      [],
      [],
      [],
      [],
      []
    ]
  },
  '90d': {
    ch1: [
      [0,0,0,0,0,0,-1,-2,-4,-5,-8,-8,-9,-10,-11,-13,-13,-14,-13,-15,-16,-20,-23,-16,-17,-12,-13,-13,-13,-13,-15,-16,-18,-13,-14,-18,-22,-25,-18,-13,-11,-10,-10,-12,-29,-35,-30,-15,-19,-24,-25,-22,-20,-18,-18,-16,-15,-14,-15,-13,-11,-8,-5,-2,2,13,26,32,31,27,-9,2,1,1,-3,-8,-11,-13,-11,-10,-9,-9,-9,-10,-10,-9,-9,-8,-8,-11,-16,-20,-18,-13,-9,-7,-5,-5,-4,-3,-3,-2,-3,-3,-3,-4,-4,-4,-4,-4,-4,-4,-3,-3,-3,-2,-2,-2,-2,-2,-2,-2,-2,-1,-1,-1,-1,-1,-1,0,0,0,0,0,1,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
      [0,0,-1,-2,-5,-8,-11,-11,-10,-9,-8,-9,-9,-9,-11,-13,-16,-19,-20,-22,-24,-25,-26,-23,-19,-13,-11,-11,-13,-22,-31,-30,-15,-10,-12,-18,-20,-16,-11,-6,-6,-9,-24,-36,-22,-16,-17,-25,-34,-28,-14,-7,-5,-20,-28,-23,-4,1,2,4,6,9,8,4,-6,-18,-19,-12,-10,-23,-37,1,10,-6,-9,-15,-17,-12,-10,-7,-7,-7,-7,-8,-8,-8,-8,-8,-8,-9,-11,-12,-15,-15,-14,-13,-11,-9,-7,-5,-4,-3,-2,-2,-2,-2,-3,-3,-3,-3,-3,-3,-2,-2,-2,-1,-1,0,0,0,0,0,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,-1,-1,-1,-1,-1,-1,-1,-1,-1,],
      [1,0,0,0,0,0,0,0,0,0,-1,0,0,-1,-1,-3,-4,-4,-5,-8,-12,-14,-18,-22,-18,-12,-13,-16,-24,-14,-25,-11,-10,-8,-9,-14,-18,-18,-14,-10,-5,-9,-16,-33,-38,-30,-23,-24,-26,-26,-19,-10,-3,5,19,23,19,3,-20,-27,-18,-2,1,2,2,3,3,5,17,37,35,12,-2,-9,-12,-9,-2,-11,-15,6,-3,-5,-9,-10,-10,-10,-10,-12,-14,-19,-21,-18,-15,-14,-14,-14,-12,-12,-16,-21,-23,-19,-13,5,14,14,4,-2,-2,-2,-2,-1,-1,-1,-2,-1,-2,-1,-2,-1,-2,-1,-1,-1,0,0,0,0,1,1,1,1,1,1,1,2,2,2,1,1,1,2,2,1,1,1,1,1,1,1,1,0,-1,-1,0,0,-1,-2,-3,-3,-3,-3,-3,-3,-4,-2,-1,0,1,1,1,2,2,2,
],
      [-1,-1,-3,-5,-8,-11,-12,-13,-14,-14,-13,-11,-9,-9,-9,-10,-11,-13,-12,-15,-20,-23,-25,-27,-26,-17,-12,-12,-15,-16,-15,-12,-8,-6,-3,9,15,5,-7,-12,-12,-12,-13,-14,-15,-7,13,15,6,-4,-6,-9,-12,-15,-15,-12,-7,0,16,22,16,1,-1,-11,-27,-31,-20,-15,-24,-32,2,-15,-15,-11,-9,-7,-6,-4,-4,-5,-5,-8,-9,-10,-11,-11,-9,-2,13,22,18,8,4,2,-1,-2,-3,-2,-3,-4,-4,-4,-4,-4,-5,-6,-7,-7,-6,-5,-3,-3,-3,-2,-2,-2,-2,-2,-1,-1,0,1,2,2,2,2,2,2,2,2,4,5,6,6,6,5,5,5,4,4,4,4,3,2,2,2,2,2,1,1,1,1,1,1,1,0,0,0,0,0,0,0,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,0,
],
      [-4,-7,-9,-11,-11,-11,-12,-13,-14,-14,-14,-14,-14,-15,-17,-19,-17,-21,-19,-17,-11,-11,-19,-23,-23,-18,-18,-23,-25,-23,-4,2,16,19,7,-10,-15,-17,-18,-17,-18,-25,-30,-27,-23,-19,-19,-19,-19,-19,-18,-13,-8,-2,4,10,12,10,4,2,0,-17,-29,-27,-14,-15,-21,-24,-20,-6,-1,2,-1,-3,-5,-5,-5,-6,-6,-7,-8,-12,-21,-33,-33,-15,-9,-9,-14,-20,-20,-14,-7,-3,-2,-1,0,0,0,0,0,0,-1,-1,-1,-1,-2,-2,-2,-2,-2,-2,-1,-1,-1,-1,-1,0,1,2,2,3,2,2,1,1,1,1,1,2,2,2,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,-1,-1,0,1,1,1,1,1,1,1,0,0,0,0,1,1,2,1,0,0,0,0,0,0,0,0,-1,0,0,0,0,
]
    ],
    ch2: [
      [0,0,0,0,0,0,2,5,7,10,11,14,16,19,22,23,22,18,12,7,3,0,-5,-25,-6,-5,3,3,1,1,1,1,2,3,4,4,4,4,4,0,-16,-21,-17,-4,-1,0,0,1,1,1,3,25,33,26,4,6,11,16,17,13,6,0,-7,-10,-12,-8,-4,-2,1,2,3,-18,-6,-6,-10,-19,-19,-17,-11,-8,-11,-18,-23,-35,-14,-5,-1,3,3,7,7,11,14,13,6,-9,-17,-15,-10,-6,-4,-3,-2,-2,-2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
],
      [0,0,1,1,7,19,20,14,3,0,3,7,11,13,10,5,-4,-13,-17,-15,-9,-2,-1,-4,-6,-1,1,0,0,-1,-2,-4,-8,-12,-13,-11,-8,-2,2,5,4,3,4,4,4,6,5,9,16,22,21,10,1,1,-1,-5,-11,-21,-24,-20,-7,9,25,25,11,3,2,2,2,4,8,12,11,7,5,11,12,10,8,7,7,4,2,0,-3,-4,-8,-2,1,3,5,7,8,9,6,2,-3,-6,-7,-8,-6,-6,-5,-5,-5,-4,-4,-4,-4,-4,-4,-4,-3,-3,-2,-2,-1,0,0,0,1,1,1,2,2,3,3,3,3,3,3,3,3,3,3,2,3,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,1,1,1,1,1,1,0,0,0,0,0,0,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,],
      [0,0,0,0,0,0,0,0,0,0,0,1,3,6,11,14,17,19,19,19,17,16,14,29,-21,-21,2,2,0,2,0,12,6,-2,-9,-8,-5,1,3,5,4,7,7,7,5,10,15,19,21,16,12,10,9,7,7,6,2,-4,-8,-13,-13,-8,-2,2,6,10,11,6,4,2,2,2,3,3,4,5,-3,-25,-2,-11,-22,-22,-15,-3,5,10,18,17,14,9,9,14,15,15,12,10,7,5,4,7,9,7,2,-5,-6,-8,-6,-5,-4,-3,-4,-3,-3,-3,-3,-3,-3,-3,-2,-2,-1,-1,-1,0,0,0,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,3,2,3,2,3,2,2,2,2,2,2,2,2,1,1,1,1,0,1,1,1,1,1,1,1,1,0,0,-1,-1,0,
],
      [1,2,6,9,11,13,16,18,21,22,24,25,25,24,22,18,13,9,9,7,5,3,5,12,11,8,1,-11,-18,-16,-4,1,2,2,4,7,10,14,14,12,7,5,4,3,7,30,31,7,1,0,0,1,2,8,23,28,24,15,20,23,21,12,6,3,2,2,1,0,-1,11,16,17,13,4,-1,-1,0,4,12,16,17,12,7,5,7,12,20,23,20,14,11,14,16,14,8,-2,-12,-18,-17,-11,-7,-5,-5,-4,-4,-3,-2,-2,-2,-2,-2,-2,-1,0,1,1,1,1,0,-1,0,0,1,1,2,2,1,0,0,1,2,2,3,3,2,2,1,2,2,2,2,2,2,2,3,3,3,4,4,4,5,4,3,3,3,4,3,2,1,-1,-1,0,0,-1,-1,-1,-2,-3,-4,-4,-4,-3,-3,-3,-4,
],
      [3,6,8,12,15,17,16,13,6,-7,-20,-20,-8,0,0,0,3,2,4,5,17,19,16,5,0,-6,-9,-8,-6,-5,-2,1,2,4,7,12,14,14,11,9,9,10,12,15,16,13,10,7,4,2,-3,-13,-20,-19,-14,-5,6,19,20,10,1,-1,0,0,0,1,9,13,11,7,4,13,4,-1,-1,26,26,2,-1,2,8,19,21,15,3,1,-2,-1,-3,-7,-8,-8,-1,3,3,-1,-5,-12,-14,-16,-13,-10,-7,-5,-5,-4,-4,-3,-3,-2,-3,-3,-3,-2,-1,-1,-1,-1,-1,-1,-1,0,0,1,2,3,3,3,2,2,2,2,3,3,3,3,3,3,3,3,4,5,6,6,7,7,7,8,7,5,0,-2,-1,2,5,7,6,4,4,2,2,1,1,1,-1,-3,-4,-6,-7,-6,-6,-5,-6,-7,-6,-4,-3,-4,-4,]
    ],
    ch3: [
      [0,0,0,0,0,0,0,1,1,6,13,27,27,15,3,1,-1,-2,-2,-3,-5,-8,-12,-19,-22,-19,-10,-4,1,19,25,21,5,-24,-29,-23,1,19,26,28,17,8,10,20,26,24,16,11,12,14,15,16,20,25,26,22,10,4,2,5,8,11,10,7,4,3,1,-3,-24,-25,-11,1,3,3,21,39,0,3,-10,-9,-7,-6,-5,-5,-5,-4,-5,-4,0,5,3,-4,-10,-12,-13,-14,-15,-14,-13,-12,-12,-12,-12,-12,-10,-7,-4,-2,-1,-1,-2,-3,-3,-4,-4,-3,-4,-3,-2,-2,-2,-2,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,0,-1,-1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,0,0,0,0,0,0,0,0,0,0,1,1,1,1,
],
      [0,-1,0,-1,-4,-7,-15,-14,-9,-4,0,2,2,3,4,6,7,10,14,17,15,9,7,12,27,35,38,32,26,24,19,19,21,24,25,23,21,21,23,22,21,19,16,14,10,6,-3,-17,-21,-17,-9,-27,-28,-17,1,1,1,1,1,1,2,3,5,5,6,7,8,9,11,13,16,23,40,-19,-19,-17,-20,-17,-13,-11,-10,-10,-10,-10,-9,-11,-16,-26,-31,-26,-18,-14,-28,-36,-35,-22,-18,-17,-14,-10,-7,-5,-3,-2,-1,0,0,-1,-2,-2,-3,-3,-3,-3,-3,-3,-3,-2,-2,-1,-1,-1,0,0,0,1,1,2,2,2,2,2,3,3,3,3,3,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,-1,-1,-1,-1,-1,-1,-1,-1,
],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,-1,-5,-22,-26,-17,-2,-1,-1,0,2,6,21,25,21,5,-1,-3,-11,-16,-12,5,21,22,19,16,18,21,21,17,15,18,26,28,25,15,14,15,15,1,-16,-14,8,16,23,24,18,10,5,3,1,-1,-3,-7,-10,-9,-6,-2,1,3,13,22,25,-24,32,-1,3,0,-10,-13,-19,-13,-8,-2,0,3,-13,-27,-23,-8,-4,-6,-7,-6,-6,-4,-2,2,15,21,25,27,24,15,4,-2,-3,-3,-3,-4,-4,-7,-7,-7,-8,-9,-8,-7,-5,-4,-3,-3,-2,-1,0,0,0,-1,-1,0,0,0,0,1,1,1,2,3,2,2,3,5,8,5,5,3,3,3,3,2,3,3,2,2,2,2,2,2,1,2,1,0,1,1,2,1,2,2,2,1,1,0,1,0,],
      [1,0,-1,-2,-4,-4,-6,-7,-8,-8,-7,-8,-8,-6,3,18,21,12,9,2,-5,-9,-14,-10,-7,-3,8,19,25,29,30,26,17,11,11,14,18,22,25,25,27,24,18,13,30,37,-24,2,2,-9,-23,-23,-5,4,5,5,7,16,28,29,16,7,7,10,17,27,28,26,31,22,23,12,7,7,-4,-3,-3,-4,-5,-6,-6,-7,-9,-11,-19,-26,-26,-21,-17,-24,-32,-30,-19,-14,-15,-17,-17,-16,-14,-12,-10,-9,-6,-5,-3,-3,-3,-4,-5,-6,-6,-5,-4,-3,-2,-2,-2,-2,-2,-1,-1,-1,0,1,1,0,0,2,3,4,4,4,4,3,4,4,5,5,6,6,7,6,6,5,5,4,3,3,2,2,2,2,2,2,2,2,1,1,1,0,0,0,0,0,0,0,0,0,0,0,-1,-1,-1,-1,-2,-2,-2,-2,-2,],
      [-2,-3,-6,-8,-10,-12,-14,-13,-11,-8,-5,-3,0,19,26,20,0,1,-2,-5,2,19,18,10,-4,-3,3,17,25,24,15,16,27,29,23,14,14,16,14,11,6,-1,-12,-20,-20,-12,-8,-8,-10,-13,-14,-12,-8,-5,-5,-5,-6,-8,-6,-2,6,12,13,-12,-21,-17,-15,-1,-2,-1,6,9,12,6,-1,-8,-12,-14,-15,-15,-20,-25,-25,-19,-13,-11,-13,-19,-25,-25,-22,-19,-17,-13,-9,-5,-3,-2,-1,-2,-1,-1,0,0,0,-1,-1,-2,-2,-3,-3,-3,-2,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,1,2,2,2,2,1,1,1,2,2,3,3,4,3,3,2,2,2,1,1,1,2,2,1,1,0,0,0,0,0,0,0,0,0,0,0,-1,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,
]
    ],
    ch4: [
      [0,0,0,0,0,2,2,4,7,9,10,11,12,12,13,14,16,17,18,16,12,8,7,20,-18,7,8,9,9,9,9,10,10,13,15,15,15,17,16,15,15,15,16,21,25,25,18,12,8,6,5,3,1,-3,-8,-11,-6,2,6,3,0,-4,-8,-10,-9,-4,-1,1,0,1,-5,-6,-9,-20,-27,-32,-28,-14,-9,-31,-34,-26,-3,-4,-5,-8,-14,-20,-21,-17,-14,-35,28,3,-1,-1,-1,0,4,9,11,10,5,2,1,2,1,1,1,1,0,0,0,0,1,1,1,0,0,-1,-1,-2,-2,-3,-4,-4,-6,-6,-5,-3,-3,-3,-3,-1,0,0,0,1,1,1,1,2,2,3,2,3,3,3,3,2,2,1,2,1,1,1,0,0,0,1,2,2,3,4,3,5,4,3,2,-4,-6,-2,5,10,
],
      [0,0,1,2,5,7,10,12,14,15,15,15,13,12,11,11,10,7,1,-7,1,0,-3,-2,-5,6,6,9,10,14,17,17,14,10,8,6,7,7,9,11,12,11,10,6,1,-6,-11,-10,-7,-3,-2,-2,-2,-3,-4,-6,-8,-9,-9,-10,-36,-38,-18,-5,-5,-6,-9,-15,-19,-18,-12,-7,-7,-12,-18,-23,-23,-24,-21,-19,-19,-21,-22,-21,-24,-30,-30,-21,-11,-9,-8,-11,-24,-31,-28,-16,-17,-20,-21,-17,-9,-3,1,3,3,3,3,2,2,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,-1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
      [0,0,0,0,0,0,0,0,0,0,0,0,1,4,8,10,13,15,16,19,36,36,21,15,13,11,9,7,11,13,11,7,-6,7,-20,30,16,14,13,12,12,11,9,9,9,9,9,-4,-18,-18,-5,2,2,1,2,4,10,21,24,20,12,9,9,17,25,22,8,-2,-4,-5,-5,-5,-4,-5,-13,-29,-32,-21,12,8,22,26,27,23,14,5,-2,-5,-7,-7,-8,-7,-8,-8,-13,-22,-24,-17,-5,-2,-3,-6,-9,-9,-8,-5,-3,-2,-1,-1,-1,-1,-2,-2,-2,-2,-2,-2,-2,-2,-1,-1,-1,-1,0,-1,0,0,0,0,0,0,1,1,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,2,2,1,1,1,1,1,0,0,0,0,0,1,1,1,1,0,0,
],
      [1,2,4,9,17,25,28,25,24,26,27,25,18,-5,-19,-16,1,5,5,5,-1,4,6,17,24,24,24,19,16,16,17,19,19,17,15,13,12,13,15,20,25,24,18,11,9,9,12,17,19,15,9,4,1,-1,-1,-1,2,20,25,19,2,-2,-6,-18,-25,-21,-9,-4,-3,-3,-6,-9,-13,-18,-21,-22,-25,-31,-32,-26,-15,-13,-18,-21,-20,-14,-9,-7,-7,-26,-33,-28,-5,-23,-30,-26,-5,-2,1,3,6,8,8,7,4,3,3,3,3,2,1,0,-1,0,7,12,13,-1,-32,-32,-17,-5,-1,3,8,12,13,12,11,9,8,6,4,3,1,1,0,-1,-2,-2,-1,-1,-2,-3,-4,-4,-3,-3,-2,-1,-1,0,-1,-2,-3,-3,-1,-1,-1,-1,-1,0,1,1,0,0,0,0,0,1,2,2,1,1,1,2,3,3,3,],
      [3,7,9,10,8,6,6,9,14,19,21,18,12,8,6,5,7,11,7,4,26,-34,30,9,7,8,9,12,17,19,16,10,6,4,1,-3,-9,-12,-10,-6,-1,1,5,10,17,19,16,8,3,0,-2,-4,-8,-29,-34,-25,-6,-4,-5,-6,-8,-11,-15,-15,-12,-9,-7,-8,-8,-11,-13,-21,-20,-20,-23,-24,-24,-20,-17,-22,-27,-26,-19,-13,-11,-12,-14,-17,-20,-20,-18,-18,-19,-20,-16,-10,-4,0,2,3,4,4,3,2,1,0,0,-2,-4,-6,-6,-6,-9,-15,-17,-10,-5,-2,1,3,3,3,2,5,8,8,7,6,7,8,8,5,3,2,3,2,1,1,1,1,1,1,0,0,1,1,1,1,0,0,0,1,1,1,1,0,0,-1,-1,-1,0,0,1,1,1,0,0,-1,0,0,-1,-1,-1,0,0,0,0,1,0,
]
    ]
  },
  '180d': {
    ch1: [
      [],
      [],
      [],
      [],
      []
    ],
    ch2: [
      [],
      [],
      [],
      [],
      []
    ],
    ch3: [
      [],
      [],
      [],
      [],
      []
    ],
    ch4: [
      [],
      [],
      [],
      [],
      []
    ]
  },
  '270d': {
    ch1: [
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,3,23,31,24,4,-1,0,-1,-2,-4,-6,-8,-8,-8,-11,7,21,26,6,1,-5,-8,-12,-15,-16,-16,-14,-12,-10,-9,-7,-7,-7,-7,14,-30,-9,-9,-9,-10,-11,-13,-15,-18,-18,-17,-15,-14,-13,-13,-14,-14,-14,-13,-13,-12,-11,-9,-6,-3,0,2,-1,-6,-10,-11,-9,-7,-5,-5,-5,-5,-5,-4,-3,-3,-3,1,-1,-5,-11,-6,-4,-4,-6,-5,12,1,0,-3,-6,-6,-11,-12,-15,-15,-10,-7,-3,-1,2,5,10,12,15,11,8,6,5,5,5,4,3,2,2,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,-1,-1,-1,-2,-3,-3,-4,-4,-5,-6,-6,-6,-6,-6,-6,-5,-5,-4,-3,-3,-2,-2,-2,-1,-1,-1,],
      [1,2,2,2,2,1,1,1,1,1,0,-1,-2,-3,-4,-5,-8,-10,-10,-1,-8,-16,-31,-33,-26,-16,-14,-14,-16,-19,-23,-26,-25,-21,-19,-19,-20,-20,-21,-22,-23,-24,-23,-22,-20,-20,-19,-20,-19,-19,-17,-17,-16,-15,-15,-16,-16,-17,-17,-17,-18,-18,-20,-23,-25,-25,-22,-21,-14,-10,-6,-3,-5,-5,-5,-7,-7,-8,-8,-9,-9,-10,-12,-12,-13,-12,-12,-12,-12,-16,-24,-24,-20,-12,-11,-14,-18,-20,-16,-6,2,7,13,17,16,13,9,7,4,2,1,0,0,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,-1,-1,-2,-1,-2,-3,-5,-7,-11,-14,-13,-11,-7,-5,-3,-2,-2,-1,0,0,-1,-1,-1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,4,],
      [-1,-3,-6,-7,-7,-4,-4,-3,-1,-1,0,1,2,3,6,10,14,14,11,3,-5,-10,-10,-12,-13,-14,-14,-15,-17,-19,-22,-24,-24,-18,-19,-21,-23,-28,-24,-25,-25,-24,-23,-22,-21,-20,-19,-18,-18,-19,-20,-21,-22,-19,-16,-14,-12,-12,-13,-14,-14,-16,-19,-22,-24,-24,-24,-24,-26,-32,-24,-18,-11,-7,-4,-5,-5,-6,-7,-8,-8,-9,-10,-11,-10,-11,-13,-16,-23,-26,-18,-11,-6,-6,-7,-8,-12,-16,-18,-15,-10,-4,-1,1,1,1,1,2,2,3,3,3,4,4,3,3,3,2,2,1,1,1,1,1,1,0,0,0,0,0,-1,-1,-1,-1,-1,-2,-2,-2,-2,-2,-2,-3,-2,-2,-2,-2,-2,-2,-1,-1,-1,-1,-1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
      [0,0,0,0,2,1,1,-1,-3,-2,-1,1,0,0,0,2,4,3,6,7,8,9,8,9,5,0,-4,-9,-7,-10,-12,-14,-16,-18,-20,-24,-26,-26,-24,-23,-21,-19,-18,-18,-19,-18,-18,-20,-25,-30,-31,-25,-20,-16,-15,-16,-17,-19,-21,-20,-18,-16,-15,-14,-14,-14,-15,-16,-18,-22,-23,-25,-26,-28,-28,-19,-15,-13,-12,-20,-4,-5,-5,-6,-6,-6,-5,-5,-7,-8,-9,-8,1,19,22,12,0,-4,3,-1,-3,-4,18,29,27,3,1,0,1,1,1,0,0,0,1,1,1,1,1,1,1,2,2,2,2,2,2,1,1,1,1,1,0,0,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,-1,-1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
      [0,0,-1,1,0,1,-3,-2,-7,-5,-4,-4,-1,3,6,6,6,8,8,7,6,6,7,2,-3,-6,-8,-9,-12,-13,-13,-14,-18,-25,-30,-29,-23,-17,-17,-17,-18,-18,-17,-16,-17,-18,-22,-26,-31,-29,-24,-19,-17,-17,-18,-20,-21,-21,-19,-17,-15,-13,-12,-12,-12,-13,-15,-17,-22,-26,-29,-31,-32,-31,-23,-16,-9,-6,-4,-5,-6,-6,-6,-5,-3,-6,-8,-11,-16,-15,-2,-18,-31,-26,-11,-5,-5,-4,0,5,12,18,19,12,5,3,2,2,2,1,1,1,1,2,2,2,2,2,2,2,2,2,1,1,2,1,1,0,0,0,0,-1,-1,-1,-1,-2,-2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,-1,-1,-1,-1,-1,-1,-1,-1,0,0,0,0,0,0,0,0,0,0,0,-1,-1,0,0,1,0,0,0,
]
    ],
    ch2: [
      [0,0,0,0,0,0,0,0,0,0,0,0,1,1,3,7,15,25,28,22,16,12,11,10,8,8,12,21,30,23,21,24,8,9,11,11,11,10,11,8,7,5,5,7,9,13,17,17,15,12,11,9,10,11,12,12,12,12,13,13,13,14,16,17,17,16,15,14,13,13,13,12,10,8,8,8,9,9,11,11,12,11,10,9,8,1,-11,-14,-5,6,11,11,10,10,10,10,7,-13,-20,-16,4,5,5,5,5,5,6,5,4,3,1,0,-1,-2,-3,-4,-3,-2,-1,1,4,6,7,9,9,9,9,8,7,7,6,5,4,3,3,2,1,1,1,0,0,0,0,0,-1,-1,-1,-1,-2,-2,-2,-3,-3,-4,-4,-4,-6,-7,-7,-6,-6,-5,-4,-4,-4,-3,-2,-2,-2,-2,-1,-1,-1,-1,0,],
      [1,3,5,5,-8,-12,-12,5,10,12,13,14,14,14,13,13,15,8,11,9,8,3,5,6,6,6,5,6,6,6,5,5,5,5,7,9,11,14,15,15,14,13,11,11,11,11,11,11,11,13,15,16,17,17,17,18,19,19,17,14,11,10,9,8,7,6,6,6,3,-6,7,16,32,24,18,16,14,14,14,13,2,-11,-12,-3,3,4,5,6,6,8,9,11,26,34,34,17,9,7,6,5,4,4,4,4,3,2,3,3,4,7,13,19,19,13,8,6,4,3,2,2,1,1,0,0,-1,-1,-1,-2,-2,-3,-3,-4,-4,-5,-6,-7,-8,-9,-9,-9,-8,-7,-5,-5,-4,-4,-3,-3,-2,-2,-2,-1,-1,-1,-1,-1,-1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,1,1,1,],
      [-2,-2,-2,2,5,8,8,7,6,5,5,-13,35,12,11,8,7,4,7,8,8,5,7,11,14,15,14,11,9,9,9,9,9,8,9,11,13,13,13,12,12,11,10,10,10,10,9,9,9,10,10,11,10,11,11,13,16,19,20,18,14,12,10,9,6,5,4,4,2,12,10,12,6,29,26,23,22,20,19,19,16,13,10,10,11,15,20,24,24,23,26,25,23,16,10,6,4,4,6,6,5,4,3,3,3,3,3,4,4,5,5,5,5,4,4,4,3,3,2,2,2,1,1,1,1,0,0,-1,-1,-1,-1,-2,-2,-2,-3,-3,-3,-3,-3,-3,-3,-3,-3,-3,-3,-2,-2,-2,-2,-2,-2,-2,-1,-1,-1,-1,-1,-1,-1,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,],
      [0,0,0,0,2,0,-1,-1,-2,-7,-7,-5,-1,3,6,9,11,8,-8,-15,-11,-2,1,14,7,-3,5,9,14,17,18,14,10,9,8,8,7,7,9,12,15,16,15,14,12,10,8,7,7,7,7,6,6,6,7,6,6,7,7,8,10,13,18,23,25,23,17,13,10,7,5,4,3,-8,0,10,24,32,26,25,26,26,24,20,16,11,9,8,8,8,8,8,6,4,0,-4,-4,-3,-1,0,2,2,3,6,7,6,4,3,2,2,2,2,3,4,6,7,7,7,7,6,5,5,4,3,2,2,1,1,0,-1,-1,-1,-2,-3,-3,-3,-4,-5,-5,-5,-5,-5,-5,-5,-4,-4,-3,-3,-3,-2,-2,-2,-2,-2,-1,-1,-1,-1,-1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,],
      [0,0,0,0,-1,-3,-7,-7,-5,1,4,6,7,9,9,13,35,29,8,7,7,8,4,7,15,22,22,18,12,9,8,8,8,7,8,10,13,14,13,14,13,12,10,9,8,8,8,8,7,8,9,10,10,11,11,16,25,26,21,13,10,9,8,8,7,6,5,4,4,25,24,-1,32,31,30,26,18,15,12,10,9,9,8,9,7,-2,-9,-8,-1,5,3,4,3,4,4,5,6,6,5,3,2,2,2,2,2,2,2,3,4,4,4,4,5,5,4,4,3,3,2,2,1,1,0,-1,-1,-1,-1,-2,-2,-2,-3,-3,-3,-3,-3,-3,-3,-3,-3,-3,-3,-3,-3,-3,-2,-2,-1,-1,-1,-1,-1,-1,-1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,]
    ],
    ch3: [
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,-1,-1,-1,-1,-2,-2,-1,2,11,18,16,5,-1,-2,-3,-2,0,-3,-5,-8,-6,-9,-12,-13,-13,-12,-17,-26,-26,-19,-10,-10,-12,-13,-13,-11,-8,-6,-5,-4,-4,-2,-2,-2,-3,-3,-4,-4,-4,-5,-5,-3,1,5,6,5,1,-3,-6,-10,-13,-17,-18,-18,-18,-21,-21,-19,-15,-10,-7,-6,-8,-9,-10,-9,-7,-5,-4,-3,-2,0,2,5,7,6,5,1,-4,-14,-15,-8,0,4,6,8,11,16,19,20,19,15,15,18,26,30,28,21,16,14,10,7,4,3,2,2,2,2,2,3,2,2,2,2,2,1,1,1,1,0,0,0,0,0,-1,-1,-1,-1,-1,-1,-1,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-1,-1,-1,-1,-1,-1,0,],
      [-1,-2,-3,-5,-7,-8,-9,-10,-11,-12,-13,-13,-12,-12,-11,-11,-11,-13,-12,-13,-14,-18,-18,-26,-31,-30,-22,-17,-16,-19,-24,-26,-25,-23,-23,-22,-18,-13,-11,-15,-24,-27,-22,-13,-9,-14,-24,-27,-21,-11,-7,-6,-10,-18,-25,-25,-17,-12,-10,-11,-19,-30,-33,-28,-12,-11,-9,-5,17,-11,-12,-10,5,12,15,15,9,5,3,1,-4,-16,-20,-11,6,12,15,14,12,11,11,12,21,33,36,28,24,22,20,16,11,6,4,3,2,3,3,2,3,3,3,2,2,2,1,1,1,1,1,1,0,0,0,0,0,0,-1,-1,-1,-1,-1,-1,-1,-2,-2,-2,-2,-2,-2,-2,-2,-2,-3,-3,-3,-3,-3,-2,-2,-2,-2,-2,-2,-2,-1,-1,-1,-1,-1,-1,0,0,0,0,0,0,0,1,1,1,1,1,2,2,2,2,2,],
      [0,-1,-2,-3,-5,-6,-8,-8,-8,-7,-7,-6,-6,-6,-5,0,7,10,7,1,-6,-11,-16,-20,-24,-24,-19,-19,-19,-18,-17,-16,-17,-19,-20,-19,-19,-19,-20,-23,-26,-27,-25,-22,-19,-16,-14,-12,-13,-22,-30,-28,-17,-8,-8,-11,-13,-29,15,-9,-8,-6,-5,-4,-3,24,27,16,1,4,1,-1,-3,24,24,14,8,4,-1,-12,-19,-16,-7,-4,-13,-28,-26,-1,2,4,11,27,29,16,-4,-18,-19,-8,11,13,11,8,5,4,2,2,1,1,2,2,3,3,2,2,2,2,2,1,1,1,1,1,0,0,0,0,0,0,0,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,],
      [0,0,0,0,0,0,0,-1,-2,-3,-5,-6,-6,-6,-6,-6,-6,-6,-5,-4,-2,2,7,16,12,3,-7,-16,-21,-24,-22,-20,-19,-20,-20,-18,-16,-15,-16,-16,-17,-18,-22,-27,-28,-24,-16,-12,-23,-39,-37,-14,-11,-15,-19,-21,-18,-12,-9,-6,-5,-1,4,9,11,8,1,-3,-6,-11,-19,-29,-29,-22,-15,-8,-12,-14,-16,-4,-6,-11,-17,-17,-16,-17,-17,-12,-5,0,4,17,24,22,8,0,-4,-11,-15,-14,5,22,26,19,14,14,13,11,7,4,3,2,1,1,2,2,2,2,2,1,1,1,0,0,-1,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-2,-2,-1,-1,-1,-2,-2,-1,-1,-1,-1,-1,-1,-1,0,0,1,0,0,1,1,1,1,1,
],
      [0,0,0,0,0,0,-1,-3,-5,-7,-9,-9,-9,-8,-7,-7,-6,-6,-4,-2,3,11,17,16,0,-9,-14,-19,-22,-26,-27,-26,-22,-18,-16,-16,-17,-19,-17,-17,-18,-21,-23,-21,-17,-11,-4,18,21,7,-8,-11,-16,-23,-25,-23,-19,-14,-11,-8,-7,-6,-5,4,23,22,-2,-8,-10,-22,-33,-34,-23,-17,-15,-14,-12,-10,-13,-15,-12,-5,-26,33,29,8,8,12,17,19,17,13,9,8,6,1,-13,-17,25,27,28,26,19,12,7,4,3,2,1,1,1,1,2,2,3,3,3,3,3,2,2,2,1,1,1,1,1,0,-1,0,-1,-1,-1,-1,-1,-1,-1,-2,-1,-2,-2,-2,-2,-2,-1,-1,-1,-1,-1,-1,-1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2,1,0,-1,-1,]
    ],
    ch4: [
      [0,0,0,0,0,0,0,0,0,0,0,0,-1,-2,-5,-8,-10,-10,-9,-8,-6,-4,-2,1,4,4,3,-2,-6,-8,-11,-11,-8,-5,-6,-9,-9,-9,-6,-1,9,13,12,6,1,-1,-2,-2,-4,-12,-23,-26,-19,-9,-6,-3,-5,-4,-1,24,28,16,5,7,8,8,9,9,9,10,12,17,21,20,16,9,6,3,2,1,1,3,6,10,12,14,14,16,19,21,26,31,30,24,16,15,16,18,16,16,14,13,13,15,30,37,31,14,10,9,9,10,10,11,14,22,31,30,19,11,9,8,7,6,4,3,2,2,2,1,1,1,1,1,2,2,2,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,-1,-1,-1,-1,-1,-1,-1,-2,-2,-2,-2,-2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,0,0,],
      [-1,-3,-9,-19,-23,-19,-6,4,14,17,13,4,-2,-5,-7,-8,-10,-5,-8,-13,-18,-10,-10,-9,-10,-10,-11,-23,-34,-31,-8,-2,0,7,21,25,18,8,6,10,15,18,18,14,17,23,25,22,15,12,10,8,8,8,29,38,32,10,9,9,9,9,8,8,7,7,7,8,2,9,13,25,33,31,27,23,22,21,20,19,19,20,22,23,22,19,16,14,12,12,14,19,24,23,18,12,10,10,10,12,12,12,10,8,7,7,6,6,7,8,10,11,10,9,7,6,4,3,2,2,2,1,1,1,0,0,-1,-1,-1,-2,-2,-3,-3,-4,-4,-5,-6,-7,-8,-8,-8,-8,-7,-6,-6,-5,-5,-4,-4,-3,-3,-3,-2,-2,-2,-2,-2,-1,-1,-1,-1,-1,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,2,],
      [-1,-2,-4,-7,-11,-18,-24,-24,-19,-30,24,23,3,0,-1,-3,-5,-6,-2,-3,-5,-9,13,30,23,-1,-1,4,13,15,11,2,-1,-2,-5,-10,-25,-27,-21,-7,-3,-2,-3,-3,-4,-6,-8,-10,-14,-16,-13,-6,2,4,8,12,19,23,21,15,10,8,8,9,12,18,19,14,8,7,6,2,-16,-25,-10,-1,10,13,14,12,7,0,-14,-16,-6,2,3,7,11,26,38,37,-18,-11,0,4,4,5,6,5,5,3,2,1,0,0,0,-1,-1,0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,-1,0,-1,-1,-1,-1,0,-1,0,-1,0,0,0,0,1,1,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,],
      [0,0,0,0,0,0,0,-1,-3,-4,-5,-10,-26,-30,-23,-6,-3,-1,27,28,12,-5,-5,1,-7,-7,-7,-9,1,-9,-15,-19,-17,-10,-5,-4,-4,-4,-4,-5,-6,-12,-25,-29,-22,-8,-4,-2,-1,0,1,4,11,22,26,22,16,15,15,14,14,15,18,20,17,11,7,6,3,0,-12,-23,-24,-15,-11,-1,0,-13,-3,8,12,13,10,2,-9,-13,-7,0,2,4,8,16,29,31,20,7,-13,-15,-9,4,5,5,5,4,3,1,-1,-1,-1,0,0,0,0,0,0,0,1,0,1,0,0,0,1,0,0,0,0,0,-1,-1,-1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
],
      [0,0,0,0,0,-1,-2,-4,-7,-14,-24,-28,-22,-11,-7,-5,-4,24,-36,-22,-6,-6,-5,-9,-7,-5,-2,-8,-15,-22,-23,-14,-2,3,4,3,1,0,-2,-3,-5,-7,-23,-32,-26,-5,-1,0,1,4,12,18,21,18,15,13,13,15,17,19,18,17,13,10,9,9,10,10,13,18,21,16,7,13,14,4,-22,-2,-1,6,5,4,-1,-8,-12,-10,-4,0,4,5,9,11,12,15,16,15,8,4,1,1,0,0,-1,-3,-3,-3,-1,1,1,2,2,2,2,3,2,3,3,3,2,2,2,1,1,1,0,0,0,0,0,0,0,-1,-1,-1,-1,-1,-1,-1,-1,0,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,0,0,0,0,0,-1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,-1,-1,-1,]
    ]
  },
};