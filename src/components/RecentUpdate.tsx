interface RecentUpdateProps {
  message: string;
}

export function RecentUpdate({ message }: RecentUpdateProps) {
  return (
    <div className="border-2 border-gray-400 bg-white px-4 py-3 mb-2">
      <span className="text-gray-700">{message}</span>
    </div>
  );
}
