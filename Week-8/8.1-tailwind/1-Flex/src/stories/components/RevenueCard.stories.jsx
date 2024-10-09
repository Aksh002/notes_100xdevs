// Here you write story logic for a perticual component
// We import our real component here and export a bunch of storries
import { RevenueCard } from '../../components/RevenueCard';

export default {
  component: RevenueCard,
};

export const BigAmount = {
  args: {
    title: 'Button',
    amount: "62,73,627",
    orderCount: "12"
  },
};

export const SmallAmount = {
    args: {
      title: 'Button',
      amount: "73,627",
      orderCount: "12"
    },
  };
// we can create various varients and demonstrate how ui will appear under various conditions 