const questions = [
    {
        question: "Which of the following sets of vectors is linearly independent?",
        options: [
            "v1 = (1, 0), v2 = (0, 1)",
            "v1 = (1, 2), v2 = (2, 4)",
            "v1 = (1, 1), v2 = (1, -1), v3 = (0, 0)",
            "v1 = (1, 2), v2 = (3, 6)"
        ],
        answer: "v1 = (1, 0), v2 = (0, 1)"
    },
    {
        question: "If a set of vectors contains the zero vector, what can be said about their linear independence?",
        options: [
            "They are linearly independent.",
            "They are linearly dependent.",
            "It cannot be determined.",
            "They are independent if the zero vector is not included."
        ],
        answer: "They are linearly dependent."
    },
    {
        question: "Which of the following statements is true?",
        options: [
            "Two vectors are linearly independent if they are not scalar multiples of each other.",
            "Three vectors in R^2 are always linearly independent.",
            "A set of vectors is independent if their determinant is zero.",
            "All vectors in R^3 are linearly independent."
        ],
        answer: "Two vectors are linearly independent if they are not scalar multiples of each other."
    },
    {
        question: "What is the maximum number of linearly independent vectors in R^3?",
        options: [
            "1",
            "2",
            "3",
            "4"
        ],
        answer: "3"
    },
    {
        question: "If the equation c1*v1 + c2*v2 + ... + cn*vn = 0 has only the trivial solution, what can be said about the vectors?",
        options: [
            "They are linearly dependent.",
            "They are linearly independent.",
            "They are orthogonal.",
            "They span R^n."
        ],
        answer: "They are linearly independent."
    },
    {
        question: "Which of the following sets of vectors is dependent?",
        options: [
            "v1 = (1, 2), v2 = (2, 4)",
            "v1 = (1, 0), v2 = (0, 1), v3 = (1, 1)",
            "v1 = (1, 1), v2 = (2, 2), v3 = (3, 3)",
            "v1 = (1, 2), v2 = (3, 4), v3 = (5, 6)"
        ],
        answer: "v1 = (1, 2), v2 = (2, 4)"
    },
    {
        question: "In a vector space, what does it mean for a set of vectors to span the space?",
        options: [
            "The vectors are linearly independent.",
            "The vectors can be expressed as linear combinations of each other.",
            "Any vector in the space can be expressed as a linear combination of the vectors.",
            "The vectors are orthogonal."
        ],
        answer: "Any vector in the space can be expressed as a linear combination of the vectors."
    },
    {
        question: "What is the rank of a matrix?",
        options: [
            "The number of rows.",
            "The number of columns.",
            "The maximum number of linearly independent column vectors.",
            "The maximum number of linearly dependent column vectors."
        ],
        answer: "The maximum number of linearly independent column vectors."
    },
    {
        question: "If a set of vectors in R^n is linearly independent, what can be said about the dimension of the span of these vectors?",
        options: [
            "It is less than n.",
            "It is equal to n.",
            "It is greater than n.",
            "It is equal to the number of vectors."
        ],
        answer: "It is equal to the number of vectors."
    },
    {
        question: "Which of the following is a necessary condition for a set of vectors to be linearly independent?",
        options: [
            "They must all be non-zero vectors.",
            "They must all be in the same plane.",
            "They must all be orthogonal.",
            "They must all be in R^3."
        ],
        answer: "They must all be non-zero vectors."
    }
];

export default questions;