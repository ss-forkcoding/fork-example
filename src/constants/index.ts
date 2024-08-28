type UICategories = "공통" | "인풋" | "인터렉션";

type CategoryLists = {
  id: UICategories;
  label: string;
};

type UILink = {
  id: UICategories;
  href: string;
  label: string;
};

export const UI_CATEGORIES: CategoryLists[] = [
  { id: "공통", label: "일반(공통) common" },
  { id: "인풋", label: "사용자 인풋 input" },
  { id: "인터렉션", label: "상호작용 interaction" },
];

export const COMMON_UI: UILink[] = [
  { id: "공통", href: "/button", label: "버튼 Button" },
  { id: "공통", href: "/text", label: "텍스트 Text" },
  { id: "인풋", href: "/text-input", label: "텍스트 인풋 TextInput" },
  { id: "인풋", href: "/number-input", label: "숫자 인풋 NumberInput" },
  {
    id: "인터렉션",
    href: "/drawing-canvas",
    label: "드로잉 캔버스 DrawingCanvas",
  },
];
