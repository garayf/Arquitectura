export const coursesTypeDef = `
type Course {
    username: String!
    password: String!
    code: Int!
    }

input CourseInput {
    username: String!
    password: String!
    }`;

export const coursesQueries = `
    allCourses: [Course]!
    courseByCode(code: Int!): Course!
`;

export const coursesMutations = `
    createCourse(course: CourseInput!): Course!
    deleteCourse(code: Int!): Int
    updateCourse(code: Int!, course: CourseInput!): Course!
`;
