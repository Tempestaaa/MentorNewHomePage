import retroPC from "../assets/images/image-retro-pcs.jpg";
import topLaptop from "../assets/images/image-top-laptops.jpg";
import gamingGrowth from "../assets/images/image-gaming-growth.jpg";

type factType = {
  id: number;
  image: string;
  title: string;
  desc: string;
}[];

const factDatas: factType = [
  {
    id: 1,
    image: retroPC,
    title: "Reviving Retro PCs",
    desc: "What happens when old PCs are given modern upgrades?",
  },
  {
    id: 2,
    image: topLaptop,
    title: "Top 10 Laptops of 2022",
    desc: "Our best picks for various needs and budgets.",
  },
  {
    id: 3,
    image: gamingGrowth,
    title: "The Growth of Gaming",
    desc: "How the pandemic has sparked fresh opportunities.",
  },
];

export default factDatas;
