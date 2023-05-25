
/*
    details : [
        { text: "colouring, marks" },
        { text: "texture, spirals vs growth" },
        { text: "habitat" },
    ]
*/

var snailData = [
    {
        commonName : "Spotted Top Snail",
        scientificName : "Diloma aethiops",
        notes: "The most common of the top snails - look for a black and white chequered pattern.",
        details : [
            { text : "Max height of 30mm.", references : [1] },
            { text : "A very dark purple that is almost black. Usually has a chequered pattern of white somewhere on the shell.", references : [] },
            { text : "Spiral lines and growth lines are both obvious and make a chequered or cross hatch pattern over a lot of the shell.", references : [] },
            { text : "Lives on rocky shores all through New Zealand and is the only top snail found on exposed rocks. Can also be found under rocks.", references : [1] },
            { text : "Found at low, mid, and high tidal zones.", references : [] },

        ],
        images : [ 
            { file : "spotted1.jpg" },
            { file : "spotted2.jpg" },
            { file : "spotted3.jpg" },
            { file : "spotted4.jpg" },
            { file : "spotted5.jpg" },
            { file : "spotted6.jpg" },
        ],
        references : [
            { id: 1, detail: "Carson, Sally & Morris, Rod (2022) The New Zealand Seashore Guide (pp165). Potton & Burton" }
        ]
    },
    {
        commonName : "Bluish Top Shell",
        scientificName : "Diloma nigerrimum",
        notes: "Look for a blue colour and hard-to-see spiral ridges and growth lines.",
        details : [
            { text : "Max height of 25mm", references : [1] },
            { text : "A very dark blue, often hard to tell apart from black, especially in photos.", references : [] },
            { text : "Spiral ridges often very faded. Growth lines are sometimes noticable. ", references : [2] },
            { text : "Lives on rocky shores (more on decaying bull-kelp than the rocks) all through New Zealand.", references : [1] },
            { text : "Found in the high tidal zone. ", references : [1] }
        ],
        images : [ 
            { file : "bluish1.jpg" },
            { file : "bluish2.jpg" },
            { file : "bluish3.jpg" },
            { file : "bluish4.jpg" }
        ],
        references : [
            { id: 1, detail: "Morley, Margaret S. (2004) Seashells of New Zealand (pp81). New Holland Publishers NZ Ltd" },
            { id: 2, detail: "Wikipedia. Available from https://en.wikipedia.org, Wikimedia Foundation. Accessed 14/04/2023" }
        ]
    },
    {
        commonName : "Green-Banded Black Top Shell",
        scientificName : "Diloma zelandicum",
        notes: "Look for noticeable spiral ridges and weak growth lines.",
        details : [
            { text : "Max height of 25mm", references : [1] },
            { text : "Black, can have a greenish tinge. May have a green lip around the shell opening.", references : [1] },
            { text : "Spiral ridges are well developed. Growth lines often faded. ", references : [] },
            { text : "Lives on rocky shores all through New Zealand. ", references : [2] },
            // { text : "Found at what tide zone????. ", references : [] }
        ],
        images : [ 
            { file : "green-banded1.jpg" },
            { file : "green-banded2.jpg" },
            { file : "green-banded3.jpg" },
            { file : "green-banded4.jpg" }
        ],
        references : [
            { id: 1, detail: "Carson, Sally & Morris, Rod (2022) The New Zealand Seashore Guide (pp168). Potton & Burton" },
            { id: 2, detail: "Wikipedia. Available from https://en.wikipedia.org, Wikimedia Foundation. Accessed 14/04/2023" }
        ]
    },
    {
        commonName : "Knobbed Top Shell",
        scientificName : "Diloma bicanaliculatum",
        notes: "Look for rows of bumps following the spiral ridges.",
        details : [
            { text : "Max height of 20mm", references : [1] },
            { text : "Grey or a dull black. Can have yellow/olive green in between the bumps and appear chequered", references : [1,3] },
            { text : "Ridges of bumps/knobs run around the shell following the spiral lines. The only top shell to have these bumps.", references : [] },
            { text : "Lives on rocky shores all through New Zealand. ", references : [2] },
            { text : "Found in the mid to high tidal zones. ", references : [] }
        ],
        images : [ 
            { file : "knobbed1.jpg" },
            { file : "knobbed2.jpg" },
            { file : "knobbed3.jpg" },
            { file : "knobbed4.jpg" },
            { file : "knobbed5.jpg" }
        ],
        references : [
            { id: 1, detail: "Carson, Sally & Morris, Rod (2022) The New Zealand Seashore Guide (pp166). Potton & Burton" },
            { id: 2, detail: "Wikipedia. Available from https://en.wikipedia.org, Wikimedia Foundation. Accessed 14/04/2023" },
            { id: 3, detail: "Morley, Margaret S. (2004) Seashells of New Zealand (pp81). New Holland Publishers NZ Ltd" }
        ]
    },
    {
        commonName : "Sparse-Spotted Black Top Shell",
        scientificName : "Diloma aridum",
        notes: "Look for yellow or white speckles.",
        details : [
            { text : "Max height of 20mm", references : [1] },
            { text : "Black with yellow or white speckles that appear random and don't follow a pattern. You may need to check the underside of the shell to see any speckles.", references : [] },
            { text : "A smooth shell without deep growth lines or spiral ridges.", references : [] },
            { text : "Lives on rocky shores all through New Zealand. ", references : [2] },
            { text : "Found in the mid to high tidal zones. ", references : [1] }
        ],
        images : [ 
            { file : "sparse-spotted1.jpg" },
            { file : "sparse-spotted2.jpg" },
            { file : "sparse-spotted3.jpg" },
            { file : "sparse-spotted4.jpg" },
            { file : "sparse-spotted5.jpg" }
        ],
        references : [
            { id: 1, detail: "Carson, Sally & Morris, Rod (2022) The New Zealand Seashore Guide (pp166). Potton & Burton" },
            { id: 2, detail: "Wikipedia. Available from https://en.wikipedia.org, Wikimedia Foundation. Accessed 14/04/2023" }
        ]
    },
    {
        commonName : "Mudflat Top Shell",
        scientificName : "Diloma subrostratum",
        notes: "Look for yellow zig-zags, or a yellow lip around the opening.",
        details : [
            { text : "Max height of 25mm", references : [1] },
            { text : "Varies, can have a yellow lip around the opening and/or yellow zig-zag stripes or chequers.", references : [3] },
            { text : "Sometimes has a few strong spiral ridges, no deep growth lines.", references : [3] },
            { text : "The only top snail to live in estuaries and mudflats; is found all through NZ. ", references : [1,2] },
            { text : "Found in the mid to high tidal zones.", references : [1] }
        ],
        images : [ 
            { file : "mudflat1.jpg" },
            { file : "mudflat2.jpg" },
            { file : "mudflat3.jpg" },
            { file : "mudflat4.jpg" },
            { file : "mudflat5.jpg" }
        ],
        references : [
            { id: 1, detail: "Carson, Sally & Morris, Rod (2022) The New Zealand Seashore Guide (pp167). Potton & Burton" },
            { id: 2, detail: "Wikipedia. Available from https://en.wikipedia.org, Wikimedia Foundation. Accessed 14/04/2023" },
            { id: 3, detail: "Morley, Margaret S. (2004) Seashells of New Zealand (pp82). New Holland Publishers NZ Ltd" }
        ]
    },
    {
        commonName : "Cat's Eye Snail",
        scientificName : "Lunella smaragda",
        notes: "They grow a lot larger than other snails listed here. Look for the green coloured 'trap-door' blocking the opening.",
        details : [
            { text : "Max height of 70mm", references : [1] },
            { text : "Black, may have dark green showing through the black. The opening is blocked by a green/white peice of shell.", references : [] },
            { text : "Young snails can have a couple of really strong spiral ridges.", references : [] },
            { text : "Lives across a wide range of areas (rocky and softer) all throughout NZ.", references : [1] },
            { text : "Found in the low to mid tidal zones.", references : [1] }
        ],
        images : [ 
            { file : "cats-eye1.jpg" },
            { file : "cats-eye2.jpg" },
            { file : "cats-eye3.jpg" },
            { file : "cats-eye4.jpg" }
        ],
        references : [
            { id: 1, detail: "Wikipedia. Available from https://en.wikipedia.org, Wikimedia Foundation. Accessed 14/04/2023" }
        ]
    },
    {
        commonName : "Black Nerita",
        scientificName : "Nerita melanotragus",
        notes: "Look for the end of the spiral not being centered (it's towards the back of the shell).",
        details : [
            { text : "Max height of 30mm", references : [1] },
            { text : "A deep black.", references : [] },
            { text : "Pretty smooth - both spiral ridges and growth lines are not deep. The end of the spiral sits towards the back of the shell rather than in the center like the other snails listed here.", references : [] },
            { text : "Lives in rocky areas in northern NZ (IS THIS TRUE??????).", references : [1] },
            { text : "Found in the mid to high tidal zones.", references : [1] }
        ],
        images : [ 
            { file : "nerita1.jpg" },
            { file : "nerita2.jpg" },
            { file : "nerita3.jpg" },
            { file : "nerita4.jpg" }
        ],
        references : [
            { id: 1, detail: "Wikipedia. Available from https://en.wikipedia.org, Wikimedia Foundation. Accessed 14/04/2023" }
        ]
    }
]