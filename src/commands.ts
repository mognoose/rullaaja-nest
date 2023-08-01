export const commands = [
    {
        name: 'roll',
        type: 1,
        description: 'Rolls a dice.',
        options: [
            {
                name: "dice",
                description: "Dice to roll",
                type: 3,
                choices: [
                    {
                        name: "D20",
                        value: "20",
                    },
                    {
                        name: "D6",
                        value: "6",
                    },
                    {
                        name: "D100",
                        value: "100",
                    },
                ]
  
            }
        ]
    },
];