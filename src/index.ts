interface PriceParams {
  price: number;
  discount?: number;
  isInstallment?: boolean;
  months?: number;
}

//Проверяем на входе - если в объекте пришли все параметры, то выполняем полный расчет с рассрочкой помесячно, иначе - только с теми параметрами, которые пришли. Функция протестирована в работе с несколькими вариантами входных данных.
//На вход подается типизированный объект в формате интерфейса с несколькими необяхательными свойствами.
//(на разработку потрачено 15 минут)

const totalPrice = ({
  price,
  discount,
  isInstallment,
  months,
}: PriceParams) => {
  let fullPrice = price;

  if (discount) {
    fullPrice = price * (1 - discount / 100);
  }
  if (isInstallment && months) {
    return fullPrice / months;
  }

  return fullPrice;
};

const price1 = totalPrice({
  price: 100000,
  discount: 25,
  isInstallment: true,
  months: 12,
});

const price2 = totalPrice({
  price: 100000,
});

const price3 = totalPrice({
  price: 100000,
  discount: 25,
});

const price4 = totalPrice({
  price: 100000,
  discount: 40,
  isInstallment: true,
  months: 6,
});

console.log(price1); // 6250
console.log(price2); //100000
console.log(price3); //75000
console.log(price4); //10000
