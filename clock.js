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

