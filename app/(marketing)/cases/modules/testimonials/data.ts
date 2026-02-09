// 客户评价数据类型
export interface Testimonial {
  id: number;
  content: string;
  author: string;
  title: string;
  rating: number;
}

// 客户评价数据
export const testimonials: Testimonial[] = [
  {
    id: 1,
    content: "合作6个月，我们的亚马逊店铺从濒临关停到类目TOP3。彼励扶团队的专业度和执行力令人印象深刻。",
    author: "张总",
    title: "户外用品品牌创始人",
    rating: 5,
  },
  {
    id: 2,
    content: "从0到月销10万美金，彼励扶帮我们完成了从工厂到品牌的转型。现在我们有底气对低价竞争说不。",
    author: "李经理",
    title: "玻璃制品工厂负责人",
    rating: 5,
  },
  {
    id: 3,
    content: "AI赋能的数据分析能力让我们在选品和广告投放上少走了许多弯路，ROI提升非常明显。",
    author: "王总监",
    title: "家居品牌运营总监",
    rating: 5,
  },
  {
    id: 4,
    content: "彼励扶团队对亚马逊算法的理解非常深入，帮助我们避开了很多政策风险，稳健增长。",
    author: "陈总",
    title: "3C电子产品卖家",
    rating: 5,
  },
];
