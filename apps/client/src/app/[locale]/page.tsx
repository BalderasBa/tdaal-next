import { useTranslations } from "next-intl";

export default function Index() {
  const t = useTranslations('Index');
  return (
    <div className="text-center">
      <h1>
        <span> Hello there, {t('tdaal')}</span>
        Welcome client 👋
      </h1>
    </div>
  );
}
