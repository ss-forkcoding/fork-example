"use client";
import Text from "@/app/[ui]/_mdx/Text.mdx";
import Button from "@/app/[ui]/_mdx/Button.mdx";
import Avatar from "@/app/[ui]/_mdx/Avatar.mdx";
import SocialProof from "@/app/[ui]/_mdx/Social-proof.mdx";
import Sponsor from "@/app/[ui]/_mdx/Sponsor.mdx";
import Navigation from "@/app/[ui]/_mdx/Navigation.mdx";
import Footer from "@/app/[ui]/_mdx/Footer.mdx";
import Textinput from "@/app/[ui]/_mdx/Text-input.mdx";
import Numberinput from "@/app/[ui]/_mdx/Number-input.mdx";
import Picker from "@/app/[ui]/_mdx/Picker.mdx";
import DatePicker from "@/app/[ui]/_mdx/Date-picker.mdx";
import TimePicker from "@/app/[ui]/_mdx/Time-picker.mdx";
import Range from "@/app/[ui]/_mdx/Range.mdx";
import Stepper from "@/app/[ui]/_mdx/Stepper.mdx";
import LoginForm from "@/app/[ui]/_mdx/Login-form.mdx";
import LeadForm from "@/app/[ui]/_mdx/Lead-form.mdx";
import CommerceForm from "@/app/[ui]/_mdx/Commerce-form.mdx";
import PaymentForm from "@/app/[ui]/_mdx/Payment-form.mdx";
import ConveyBuilder from "@/app/[ui]/_mdx/Convey-builder.mdx";
import TemplateBuilder from "@/app/[ui]/_mdx/Template-builder.mdx";
import WebsiteBuilder from "@/app/[ui]/_mdx/Website-builder.mdx";
import Docs from "@/app/[ui]/_mdx/Docs.mdx";
import Spreadsheet from "@/app/[ui]/_mdx/Spreadsheet.mdx";
import DrawingCanvas from "@/app/[ui]/_mdx/Drawing-canvas.mdx";
import { UIKinds } from "@/constants";

const UIViewPages = ({
  params,
}: {
  params: {
    ui: string;
  };
}) => {
  return <div className="h-full w-full">{rednerMDX(params.ui as UIKinds)}</div>;
};

const rednerMDX = (ui: UIKinds) => {
  switch (ui) {
    case "text":
      return <Text />;
    case "button":
      return <Button />;
    case "avatar":
      return <Avatar />;
    case "social-proof":
      return <SocialProof />;
    case "sponsor":
      return <Sponsor />;
    case "navigation":
      return <Navigation />;
    case "footer":
      return <Footer />;
    case "text-input":
      return <Textinput />;
    case "number-input":
      return <Numberinput />;
    case "picker":
      return <Picker />;
    case "date-picker":
      return <DatePicker />;
    case "time-picker":
      return <TimePicker />;
    case "range":
      return <Range />;
    case "stepper":
      return <Stepper />;
    case "login-form":
      return <LoginForm />;
    case "lead-form":
      return <LeadForm />;
    case "commerce-form":
      return <CommerceForm />;
    case "payment-form":
      return <PaymentForm />;
    case "convey-builder":
      return <ConveyBuilder />;
    case "template-builder":
      return <TemplateBuilder />;
    case "website-builder":
      return <WebsiteBuilder />;
    case "docs":
      return <Docs />;
    case "spreadsheet":
      return <Spreadsheet />;
    case "drawing-canvas":
      return <DrawingCanvas />;
    default:
      return null;
  }
};

export default UIViewPages;
