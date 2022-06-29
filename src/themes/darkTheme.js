export const darkTheme = {
    font: {
        family: "Pangoline, cursive",

        size: {
            header: "6em",
            menu: {
                header: "6em",
                item: "6em",
            },
        },

        colors: {
            header: {
                begin: "#0e3742",
                end: "#e4acf8",
            },

            menu: {
                header: "#fff",
                item: "#fff"
            },

            cells: {
                empty: "#fff",
                fill: {
                    X: "#fff",
                    O: "#fff",
                },
            },
        },

        shadows: {
            header: `
                0 0 10px #e4acf8,
                0 0 20px #e4acf8,
                0 0 40px #e4acf8,
                0 0 80px #e4acf8,
                0 0 160px #e4acf8
            `,

            menu: {
                header: `
                    0 0 10px #00b3ff,
                    0 0 20px #00b3ff,
                    0 0 40px #00b3ff,
                    0 0 80px #00b3ff,
                    0 0 120px #00b3ff
                `,
                item: `
                    0 0 10px #00b3ff,
                    0 0 20px #00b3ff,
                    0 0 40px #00b3ff,
                    0 0 80px #00b3ff,
                    0 0 120px #00b3ff
                `,
                status: `
                    0 0 10px #ff2972, 
                    0 0 20px #ff2972, 
                    0 0 40px #ff2972,
                    0 0 80px #ff2972,
                    0 0 120px #ff2972
                `,
            },

            cells: {
                empty: `
                    0 0 10px #fee800,
                    0 0 20px #fee800,
                    0 0 40px #fee800,
                    0 0 80px #fee800,
                    0 0 120px #fee800;
                `,

                fill: {
                    X: `
                        0 0 10px #ff2972, 
                        0 0 20px #ff2972, 
                        0 0 40px #ff2972,
                        0 0 80px #ff2972,
                        0 0 120px #ff2972
                    `, 
                    O: `
                        0 0 10px #24ecff,
                        0 0 20px #24ecff,
                        0 0 40px #24ecff,
                        0 0 80px #24ecff,
                        0 0 120px #24ecff;
                    `,
                }
            },

        },
    },

    cells: {
        border: {
            empty: {
                nonhover: "5px solid #93ff2d",
                hover: "5px solid #fee800",
            },      
            X: "5px solid #ff2972",
            O: "5px solid #24ecff",
        },

        shadows: {
            empty: {
                nonhover: `
                    0 0 0 5px #93ff2d33,
                    0 0 0 10px #93ff2d22,
                    0 0 0 20px #93ff2d11,
                    0 0 20px #93ff2d,
                    0 0 30px #93ff2d
                `,
                hover: `
                    0 0 0 5px #fee80033,
                    0 0 0 10px #fee80022,
                    0 0 0 20px #fee80011,
                    0 0 20px #fee800,
                    0 0 30px #fee800
                `,
            },

            X: `
                0 0 0 5px #ff297233,
                0 0 0 10px #ff297222,
                0 0 0 20px #ff297211,
                0 0 20px #ff2972,
                0 0 30px #ff2972
            `,

            O: `
                0 0 0 5px #24ecff33,
                0 0 0 10px #24ecff22,
                0 0 0 20px #24ecff11,
                0 0 20px #24ecff,
                0 0 30px #24ecff
            `
        },
    },

    colors: {
        bg: "#07252d",
    },

}