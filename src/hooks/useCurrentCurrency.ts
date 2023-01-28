import { useAppSelector } from './useReduxHooks'

interface IProps {
  price: number
}

export const useCurrentCurrency = () => {
  const { currency } = useAppSelector((state) => state.currencySlice)

  const showPrice = ({ price }: IProps) => {
    if (currency === 'UAH') {
      return `₴ ${price * 41}`
    }
    if (currency === 'USD') {
      return `$ ${price}`
    }
  }

  return {
    showPrice,
  }
}
