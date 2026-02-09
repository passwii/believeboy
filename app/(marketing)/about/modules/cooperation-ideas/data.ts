import { 
  Clock,
  Users,
  Target,
  type LucideIcon 
} from "lucide-react";

export interface CooperationIdea {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const cooperationIdeas: CooperationIdea[] = [
  {
    icon: Clock,
    title: "长期主义合作",
    description: "我们拒绝短视的'一次性交易'，追求与客户建立深度互信的战略伙伴关系。通过SharePoint与Notion构建的数字化运营资产体系，将方法论、流程与知识沉淀为可复用的核心资产。",
  },
  {
    icon: Users,
    title: "共同成长",
    description: "我们相信，客户的成功就是我们的成功。每一次合作都是双向奔赴，我们投入的不只是专业能力和时间，更是对客户业务的深度思考与情感投入。",
  },
  {
    icon: Target,
    title: "可持续未来",
    description: "我们致力于帮助客户构建长期竞争力，而非追求短期爆单。从品牌建设到用户运营，从供应链优化到合规风控，为企业的全球化之路奠定坚实基础。",
  },
];
