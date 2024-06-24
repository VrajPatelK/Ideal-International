import { personalData } from "@/utils/data";

const CName = () => {
  return (
    <span className="text-blue-600 font-semibold">
      {personalData.COMPANY_NAME}
    </span>
  );
};

export default CName;
