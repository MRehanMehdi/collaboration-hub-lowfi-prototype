interface SummaryCardProps {
  title: string;
  value: string;
}

export function SummaryCard({ title, value }: SummaryCardProps) {
  return (
    <div className="border-2 border-gray-400 bg-white p-6">
      <div className="text-gray-600 text-sm mb-2">{title}</div>
      <div className="text-gray-800">{value}</div>
    </div>
  );
}
