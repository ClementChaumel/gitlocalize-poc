import type { MetaFunction } from "@remix-run/node";
import { useTranslation } from "react-i18next";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  const { t } = useTranslation();
  return (
    <div className="font-sans p-4">
      <h1 className="text-3xl">{t("test")}</h1>
      <button className="text-lg">{t("cta")}</button>
    </div>
  );
}
