// Завдання на практику
// 1. Спробуйте створити якийсь файл txt, прочитайте з нього дані і одразу, дані які ви отримали запишіть їх в інший файл, в вас вийде невеликий callback hell, пізніше я вам покажу
// як можна це обійти, але поки зробіть так
//
// 2. Створіть файл ( можете вручну ) заповніть його якимись даними
// Прочитайте його, скопіюйте всі дані з нього і перенесіть їх в нову папку та файл в ній, старий файл видаліть після того як все завершиться. Також вийде callback hell
//
// 3. Створіть папку (можете вручну) напишіть скріпт який створить в ній якись дані (можуть бути нові папки і файли(в файли запишіть якусь дату) )
// і напишіть функцію яка буде зчитувати папку і перевіряти якщо дані які в ній лежать - це файли тоді вам потрібно їх очистити, але не видаляти, якщо дані - це папки,
// вам потрібно їх перейменувати і додати до назви префікс _new

const fs = require('fs');
const path = require('path');

// fs.mkdir(path.join(__dirname, 'task1'), (err => {
//     if (err) throw err;
//
//     fs.writeFile(path.join(__dirname, 'task1', 'callback.hell.txt'), 'some very interesting info here to create a callback hell', (err) => {
//         if (err) throw err;
//
//         fs.readFile(path.join(__dirname, 'task1', 'callback.hell.txt'), 'utf8', ((err2, data) => {
//             if (err2) throw err2;
//
//             fs.writeFile(path.join(__dirname, 'task1', 'callback.hell2.txt'), data, (err3) => {
//                 if (err3) throw err3;
//             });
//         }));
//     });
// }));

// fs.readFile(path.join(__dirname, 'task1', 'callback.hell.txt'), 'utf8', ((err, data) => {
//     if (err) throw err;
//
//     fs.mkdir(path.join(__dirname, 'task2'), (err2 => {
//         if (err2) throw err2;
//
//         fs.writeFile(path.join(__dirname, 'task2', 'another.hell.txt'), data, (err3) => {
//             if (err3) throw err3;
//
//             fs.unlink(path.join(__dirname, 'task1', 'callback.hell.txt'), (err4 => {
//                 if (err4) throw err4;
//             }));
//         });
//     }));
// }));

// fs.mkdir(path.join(__dirname, 'task3', 'folder'), {recursive: true}, err => {
//     if (err) throw err;
// });
//
// fs.writeFile(path.join(__dirname, 'task3', 'text.txt'), 'this text must be deleted', err => {
//     if (err) throw err;
// });

fs.readdir(path.join(__dirname, 'task3'), 'utf8', (err, data) => {
    if (err) throw err;

    data.forEach(obj => {
        if (obj.includes('.txt')) {
            fs.truncate(path.join(__dirname, 'task3', obj), err1 => {
                if (err1) throw err1;
            });
        } else {
            fs.rename(path.join(__dirname, 'task3', obj), path.join(__dirname, 'task3', `${obj}_new`), err3 => {
                if (err3) throw err3;
            });
        }
    });
});