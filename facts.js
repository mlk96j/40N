const infos = [
    {
        number: 1,
        main: [
            {
                text: "هذا هو الفقرة الأولى من المعلومة الأولى. يمكن أن تحتوي هذه الفقرة على الكثير من النصوص.",
                style: { fontSize: "18px", color: "red" }
            },
            {
                text: "هذا هو الفقرة الثانية من المعلومة الأولى. يمكنك تعديل النص كما تريد.",
                style: { fontSize: "16px", color: "blue" }
            }
        ],
        details: "هذه تفاصيل إضافية عن المعلومة الأولى."
    },
    {
        number: 2,
        main: [
            {
                text: "هذا هو الفقرة الأولى من المعلومة الثانية.",
                style: { fontSize: "20px", color: "green" }
            },
            {
                text: "هذا هو الفقرة الثانية من المعلومة الثانية.",
                style: { fontSize: "16px", color: "purple" }
            }
        ],
        details: "هذه تفاصيل إضافية عن المعلومة الثانية."
    },
    {
        number: 3,
        main: [
            {
                text: "هذا هو الفقرة الأولى من المعلومة الثانية.",
                style: { fontSize: "20px", color: "green" }
            },
            {
                text: "هذا هو الفقرة الثانية من المعلومة الثانية.",
                style: { fontSize: "16px", color: "purple" }
            }
        ],
        details: "هذه تفاصيل إضافية عن المعلومة الثانية."
    },
    {
        number: 4,
        main: [
            {
                text: "هذا هو الفقرة الأولى من المعلومة الثانية.",
                style: { fontSize: "20px", color: "green" }
            },
            {
                text: "هذا هو الفقرة الثانية من المعلومة الثانية.",
                style: { fontSize: "16px", color: "purple" }
            }
        ],
        details: "هذه تفاصيل إضافية عن المعلومة الثانية."
    },
    {
        number: 5,
        main: [
            {
                text: "هذا هو الفقرة الأولى من المعلومة الثانية.",
                style: { fontSize: "20px", color: "green" }
            },
            {
                text: "هذا هو الفقرة الثانية من المعلومة الثانية.",
                style: { fontSize: "16px", color: "purple" }
            }
        ],
        details: "هذه تفاصيل إضافية عن المعلومة الثانية."
    },
    {
        number: 6,
        main: [
            {
                text: "هذا هو الفقرة الأولى من المعلومة الثانية.",
                style: { fontSize: "20px", color: "green" }
            },
            {
                text: "هذا هو الفقرة الثانية من المعلومة الثانية.",
                style: { fontSize: "16px", color: "purple" }
            }
        ],
        details: "هذه تفاصيل إضافية عن المعلومة الثانية."
    },
    {
        number: 7,
        main: [
            {
                text: "هذا هو الفقرة الأولى من المعلومة الثانية.",
                style: { fontSize: "20px", color: "green" }
            },
            {
                text: "هذا هو الفقرة الثانية من المعلومة الثانية.",
                style: { fontSize: "16px", color: "purple" }
            }
        ],
        details: "هذه تفاصيل إضافية عن المعلومة الثانية."
    },
    {
        number: 8,
        main: [
            {
                text: "هذا هو الفقرة الأولى من المعلومة الثانية.",
                style: { fontSize: "20px", color: "green" }
            },
            {
                text: "هذا هو الفقرة الثانية من المعلومة الثانية.",
                style: { fontSize: "16px", color: "purple" }
            }
        ],
        details: "هذه تفاصيل إضافية عن المعلومة الثانية."
    },
    {
        number: 9,
        main: [
            {
                text: "هذا هو الفقرة الأولى من المعلومة الثانية.",
                style: { fontSize: "20px", color: "green" }
            },
            {
                text: "هذا هو الفقرة الثانية من المعلومة الثانية.",
                style: { fontSize: "16px", color: "purple" }
            }
        ],
        details: "هذه تفاصيل إضافية عن المعلومة الثانية."
    },
    {
        number: 10,
        main: [
            {
                text: "هذا هو الفقرة الأولى من المعلومة الثانية.",
                style: { fontSize: "20px", color: "green" }
            },
            {
                text: "هذا هو الفقرة الثانية من المعلومة الثانية.",
                style: { fontSize: "16px", color: "purple" }
            }
        ],
        details: "هذه تفاصيل إضافية عن المعلومة الثانية."
    },
    {
        number: 11,
        main: [
            {
                text: "هذا هو الفقرة الأولى من المعلومة الثانية.",
                style: { fontSize: "20px", color: "green" }
            },
            {
                text: "هذا هو الفقرة الثانية من المعلومة الثانية.",
                style: { fontSize: "16px", color: "purple" }
            }
        ],
        details: "هذه تفاصيل إضافية عن المعلومة الثانية."
    },
    {
        number: 12,
        main: [
            {
                text: "هذا هو الفقرة الأولى من المعلومة الثانية.",
                style: { fontSize: "20px", color: "green" }
            },
            {
                text: "هذا هو الفقرة الثانية من المعلومة الثانية.",
                style: { fontSize: "16px", color: "purple" }
            }
        ],
        details: "هذه تفاصيل إضافية عن المعلومة الثانية."
    },
    {
        number: 13,
        main: [
            {
                text: "هذا هو الفقرة الأولى من المعلومة الثانية.",
                style: { fontSize: "20px", color: "green" }
            },
            {
                text: "هذا هو الفقرة الثانية من المعلومة الثانية.",
                style: { fontSize: "16px", color: "purple" }
            }
        ],
        details: "هذه تفاصيل إضافية عن المعلومة الثانية."
    }
    
];
