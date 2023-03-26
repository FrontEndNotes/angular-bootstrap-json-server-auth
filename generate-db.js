const { faker } = require('@faker-js/faker');
const bcryptjs = require('bcryptjs');

const userCount = 4;
const postsPerUserCount = 4;

// users
const users = [...Array(userCount)].map((_, i) => {
    const passwordPlainText = faker.internet.password();
    const passwordHash = bcryptjs.hashSync(passwordPlainText, 10);

    return {
        id: i + 1,
        fullName: faker.name.fullName(),
        username: faker.internet.userName(),
        birthDate: faker.date.birthdate({ min: 18, max: 65, mode: 'age' }),
        avatar: faker.image.avatar(),
        email: faker.internet.email(),
        password: passwordHash,
        passwordPlainText: passwordPlainText,
        bio: faker.lorem.sentences(1),
    }
});

// posts
const posts = users.reduce((acc, user) => {

    const imageCategories = [
        "abstract",
        "animals",
        "business",
        "cats",
        "city",
        "food",
        "nightlife",
        "fashion",
        "people",
        "nature",
        "sports",
        "technics",
        "transport",
    ];

    const userPosts = [...Array(postsPerUserCount)].map((_, i) => {
        const imageCategory = imageCategories[Math.floor(Math.random() * imageCategories.length)];

        return {
            id: i + 1 + (user.id - 1) * userCount,
            userId: user.id,
            title: faker.lorem.sentence(),
            body: faker.lorem.paragraph(2),
            category: imageCategory,
            publicationDate: faker.date.past(),
            images: [...Array(Math.floor(Math.random() * 5) + 1)].map(
                () => faker.image[imageCategory](800, 600, true)
            )
        };
    });
    return [...acc, ...userPosts];
}, []);

// db
const db = { users, posts };

// console.log is required to write its content to a file later on
// 4 - spaces indent
console.log(JSON.stringify(db, null, 4));