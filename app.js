// Всі дії виконувати зa допомогою модулів (вручну нічого не створюємо)
// Створити основну папку (main), в яку покласти дві інші папки: перша - online, друга - inPerson
// Потім створити в вашому головному файлі (для прикладу app.js) два масиви з обєктами user ({. name: "Andrii", age: 22, city: "Lviv" }),
// відповідно перший - onlineUsers, другий - inPersonUsers;
// і створити файли txt в папках (online, inPerson) в яких як дату покласти юзерів з ваших масивів, але щоб ваш файл виглядав як NAME: ім'я з обєкту і т.д і всі пункти з нового рядка.
//
// Коли ви це виконаєте напишіть функцію яка буде міняти місцями юзерів з одного файлу і папки в іншу. (ті, що були в папці inPerson будуть в папці online)

const fs = require('fs');
const path = require('path');

// fs.mkdir(path.join(__dirname, 'main', 'online'), {recursive: true}, (err) => {
//     if (err) throw err;
// });
// fs.mkdir(path.join(__dirname, 'main', 'inPerson'), (err) => {
//     if (err) throw err;
// });

const onlineUsers = [
    {
        name: 'Oli',
        age: 26,
        city: 'Kyiv'
    },
    {
        name: 'Katya',
        age: 27,
        city: ' Kyiv'
    }
];
const inPersonUsers = [
    {
        name: 'Andrew',
        age: 32,
        city: 'Kyiv'
    },
    {
        name: 'Max',
        age: 18,
        city: 'Odessa'
    }
];

// onlineUsers.forEach(user => {
//     fs.writeFileSync(path.join(__dirname, 'main', 'online', `${user.name}.txt`),
//         `Name: ${user.name}\n
//         Age: ${user.age}\n
//         City: ${user.city}`,
//         (err => {
//             if (err) throw err;
//         }));
// });

// inPersonUsers.forEach(user => {
//     fs.writeFileSync(path.join(__dirname, 'main', 'inPerson', `${user.name}.txt`),
//         `Name: ${user.name}\n
//         Age: ${user.age}\n
//         City: ${user.city}`,
//         (err => {
//             if (err) throw err;
//         }));
// });

const swapFiles = (from, to) => {
    fs.readdir(path.join(__dirname, 'main', from), (err, users) => {
        if (err) throw err;

        users.forEach(user => {
            fs.rename(path.join(__dirname, 'main', from, `${user}`),
                path.join(__dirname, 'main', to, `${user}`),
                (err => {
                    if (err) throw err;
                }));
        });
    });

    fs.readdir(path.join(__dirname, 'main', to), (err, users) => {
        if (err) throw err;

        users.forEach(user => {
            fs.rename(path.join(__dirname, 'main', to, `${user}`),
                path.join(__dirname, 'main', from, `${user}`),
                (err => {
                    if (err) throw err;
                }));
        });
    });
};

swapFiles('online', 'inPerson');