type UICategories = "공통" | "인풋" | "폼" | "작업";

export type UIKinds =
  | "ui-design"
  | "text"
  | "button"
  | "avatar"
  | "social-proof"
  | "sponsor"
  | "navigation"
  | "footer"
  | "text-input"
  | "number-input"
  | "picker"
  | "date-picker"
  | "time-picker"
  | "range"
  | "stepper"
  | "login-form"
  | "lead-form"
  | "commerce-form"
  | "payment-form"
  | "convey-builder"
  | "template-builder"
  | "website-builder"
  | "docs"
  | "spreadsheet"
  | "drawing-canvas";

type CategoryLists = {
  id: UICategories;
  label: string;
};

type UILink = {
  id: UICategories;
  href: UIKinds;
  label: string;
};

export const UI_CATEGORIES: CategoryLists[] = [
  { id: "공통", label: "일반(공통) Common" },
  { id: "인풋", label: "사용자 인풋 Input" },
  { id: "폼", label: "서식 & 폼 Form" },
  { id: "작업", label: "작업 Action" },
];

export const COMMON_UI: UILink[] = [
  { id: "공통", href: "text", label: "텍스트 Text" },
  { id: "공통", href: "button", label: "버튼 Button" },
  { id: "공통", href: "avatar", label: "아바타 Avatar" },
  { id: "공통", href: "social-proof", label: "리뷰 & 후기 SocialProof" },
  { id: "공통", href: "sponsor", label: "협력사 & 스폰서 Sponsor" },
  { id: "공통", href: "navigation", label: "네비게이션 Navbar" },
  { id: "공통", href: "footer", label: "푸터 Footer" },
  { id: "인풋", href: "text-input", label: "텍스트 인풋 TextInput" },
  { id: "인풋", href: "number-input", label: "숫자 인풋 NumberInput" },
  { id: "인풋", href: "picker", label: "픽커 Picker" },
  { id: "인풋", href: "date-picker", label: "날짜 선택 DatePicker" },
  { id: "인풋", href: "time-picker", label: "시간 선택 TimePicker" },
  { id: "인풋", href: "range", label: "범위 선택 Range" },
  { id: "인풋", href: "stepper", label: "단계 선택 Stepper" },
  { id: "폼", href: "login-form", label: "로그인 폼 Login Form" },
  { id: "폼", href: "lead-form", label: "리드 생성 폼 Lead Generation" },
  { id: "폼", href: "commerce-form", label: "상품 구매 양식 Commerce Form" },
  { id: "폼", href: "payment-form", label: "결제 폼 Payment Form" },
  {
    id: "작업",
    href: "convey-builder",
    label: "설문조사 빌더 ConveyFormBuilder",
  },
  {
    id: "작업",
    href: "template-builder",
    label: "템플릿 빌더 TemplateBuilder",
  },
  {
    id: "작업",
    href: "website-builder",
    label: "웹 사이트 빌더 WebsiteBuilder",
  },
  {
    id: "작업",
    href: "docs",
    label: "문서 작성 DocumentEditor",
  },
  {
    id: "작업",
    href: "spreadsheet",
    label: "스프레드시트 SpreadSheet",
  },
  {
    id: "작업",
    href: "drawing-canvas",
    label: "드로잉 캔버스 DrawingCanvas",
  },
];

export const UIs = COMMON_UI.map((item) => item.href);

export const Labels = COMMON_UI.map((item) => item.label);
