module.exports = ({matric_no, phone_no}) => {
    return {
    matric_no,
    phone_no,
    first_semester_results: [{
            '3.45': [`CSE 401  79  A\n `, `CSE 405  79  B\n `, `CSE 421  79  C\n `, `CSE 445  79  A\n `, `CSE 423 79  A\n `]
        }
    ],
    second_semester_results: [
        {
            '3.45': [`CSE 402  79  A\n `, `CSE 406  79  C\n `, `CSE 422  79  D\n `, `CSE 446 79  D\n `, `CSE 424  79  A\n `]
        }
    ],
    first_semester:[`CSE 401  79  A\n `, `CSE 405  79  B\n `, `CSE 421  79  C\n `, `CSE 445  79  A\n `, `CSE 423 79  A\n `],
    second_semester: [`CSE 402  79  A\n `, `CSE 406  79  C\n `, `CSE 422  79  D\n `, `CSE 446 79  D\n `, `CSE 424  79  A\n `],
    cgpa: `3.45`
}}