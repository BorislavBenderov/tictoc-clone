import { footerList1, footerList2, footerList3 } from "@/utils/constants";

const List = ({ items, mt }: { items: string[]; mt: boolean }) => (
  <div className={`flex flex-wrap gap-2 ${mt && "mt-5"}`}>
    {items.map((item) => (
      <p
        key={item}
        className="text-gray-400 text-sm hover:undeline cursor-pointer"
      >
        {item}
      </p>
    ))}
  </div>
);

export const Footer = () => {
  return (
    <div className="mt-6 hidden xl:block">
      <List items={footerList1} mt={false} />
      <List items={footerList2} mt={true} />
      <List items={footerList3} mt={true} />
      <p className="text-gray-400 text-sm mt-5">2023 TikTok Clone</p>
    </div>
  );
};