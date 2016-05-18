import numeral from 'numeral';

numeral.language('pt-br', {
    delimiters: {
        thousands: '.',
        decimal: ','
    },
    abbreviations: {
        thousand: 'mil',
        million: 'milhões',
        billion: 'b',
        trillion: 't'
    },
    ordinal: function (number) {
        return 'º';
    },
    currency: {
        symbol: 'R$'
    }
});

numeral.language('pt-br');

export const formatMoney = (value) => numeral(value).format('$0,0.00');
export const discount = (value, value2) => {
  const diff = ((value - value2) / value);
  return numeral(diff).format('0%');
}
