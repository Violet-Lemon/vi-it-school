'use strict'
/* 
  Напишите функцию, которая возвращает массив ['часы', 'минуты', 'секунды'] 
  и принимает число, отражающее положение часовой стрелки в градусах.
*/
function getTime(grad) {
  if (grad >= 360) { // если количество градусов больше 360, то не учитываем число оборотов часовой стрелки
    grad = grad - Math.floor(grad / 360) * 360;
  }

  const timeInSeconds = grad * 120; // 1 секунде соответствует величина, равная 1/120 градуса
  const hours = Math.floor(timeInSeconds / 3600); // вычисляем целое число часов
  const restSeconds = timeInSeconds - hours * 3600; 
  const minutes = Math.floor(restSeconds / 60); // вычисляем целое число минут
  const seconds = Math.floor(restSeconds - minutes * 60); // вычисляем целое число секунд
  
  return [hours, minutes, seconds];
}

console.log(getTime(96.999));

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
