type UICategories = "공통" | "인풋" | "인터렉션";

type CatetoryLists = {
  id: UICategories;
  label: string;
};
export const UI_CATEGORIES: CatetoryLists[] = [
  { id: "공통", label: "일반(공통) common" },
  { id: "인풋", label: "사용자 인풋 input" },
  { id: "인터렉션", label: "상호작용 interaction" },
];
