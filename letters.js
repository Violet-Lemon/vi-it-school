/*
  Напишите функцию, которая возвращает массив уникальных первых букв слов
  переданной строки, отсортированный по возрастанию.
*/

// Первый способ
function getUniqueLetters(str) {
  // переводим строку в нижний регистр, делим на массив слов, оставляем первую букву каждого слова
  const firstLettersArr = str.toLowerCase().split(' ').map(item => item[0]); 
  let uniqueLettersArr = []; // массив для уникальных букв
  
  for (let letter of firstLettersArr) {
    
    if (!uniqueLettersArr.includes(letter)) { 
      uniqueLettersArr.push(letter);
    }

  }
  
  uniqueLettersArr = uniqueLettersArr.sort(); // сортируем уникальные буквы по возрастанию

  return uniqueLettersArr;
}

// Второй способ
function getUniqueLetters(str) {
  // переводим строку в нижний регистр, делим на массив слов, оставляем первую букву каждого слова
  const firstLettersArr = str.toLowerCase().split(' ').map(item => item[0]); 
  const uniqueLetters = new Set(firstLettersArr); // сет для уникальных букв
  const sortedLettersArray = Array.from(uniqueLetters).sort(); // переводим сет обратно в массив и сортируем по возрастанию
  
  return sortedLettersArray;
}
