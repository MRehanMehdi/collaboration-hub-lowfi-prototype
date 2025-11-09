interface ProjectCardProps {
  name: string;
  dueDate: string;
  assignedTo: string;
}

export function ProjectCard({ name, dueDate, assignedTo }: ProjectCardProps) {
  return (
    <div className="border-2 border-gray-400 bg-white p-6 cursor-pointer hover:bg-gray-50">
      <div className="mb-4">
        <div className="text-gray-800 mb-2">{name}</div>
      </div>
      
      <div className="mb-4">
        <div className="text-gray-600 text-sm mb-2">Progress Bar placeholder</div>
        <div className="border-2 border-gray-400 bg-gray-200 h-6"></div>
      </div>
      
      <div className="space-y-2">
        <div className="text-gray-600 text-sm">
          <span className="text-gray-800">Due Date:</span> {dueDate}
        </div>
        <div className="text-gray-600 text-sm">
          <span className="text-gray-800">Assigned To:</span> {assignedTo}
        </div>
      </div>
    </div>
  );
}
