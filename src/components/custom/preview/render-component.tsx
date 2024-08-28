import Trial from "@/lib/trial";

export const renderComponent = ({ ui }: { ui: string }) => {
  switch (ui) {
    case "trial":
      return <Trial />;
    default:
      return <>default</>;
  }
};
