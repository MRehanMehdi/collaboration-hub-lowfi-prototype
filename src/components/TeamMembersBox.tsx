interface TeamMember {
  name: string;
  role: string;
  status: string;
}

export function TeamMembersBox() {
  const teamMembers: TeamMember[] = [
    { name: 'Ahmed Khan', role: 'Frontend Developer', status: 'Online' },
    { name: 'Hassan Ali', role: 'Backend Developer', status: 'Online' },
    { name: 'Bilal Ahmed', role: 'UI/UX Designer', status: 'Offline' },
    { name: 'Usman Malik', role: 'Project Manager', status: 'Online' },
    { name: 'Omar Farooq', role: 'QA Tester', status: 'Offline' },
    { name: 'Faisal Sheikh', role: 'Frontend Developer', status: 'Online' },
    { name: 'Hamza Ibrahim', role: 'Designer', status: 'Online' },
    { name: 'Zain Abbas', role: 'Developer', status: 'Offline' },
  ];

  return (
    <div className="border-2 border-gray-400 bg-white p-6">
      <h3 className="text-gray-800 mb-4">Team Members</h3>
      
      <div className="space-y-2">
        {teamMembers.map((member, index) => (
          <div 
            key={index}
            className="border-2 border-gray-400 bg-gray-50 p-3"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-800 text-sm">{member.name}</span>
              <div className="flex items-center gap-2">
                <div className={`w-2 h-2 ${member.status === 'Online' ? 'bg-gray-800' : 'bg-gray-300'}`}></div>
                <span className="text-gray-600 text-xs">{member.status}</span>
              </div>
            </div>
            <div className="text-gray-600 text-xs">{member.role}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
