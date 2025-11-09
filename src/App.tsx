import { useState } from "react";
import { WireframeLogin } from "./components/WireframeLogin";
import { WireframeDashboard } from "./components/WireframeDashboard";
import { WireframeProjects } from "./components/WireframeProjects";
import { WireframeTaskList } from "./components/WireframeTaskList";
import { WireframeTaskDetails } from "./components/WireframeTaskDetails";
import { WireframeNotifications } from "./components/WireframeNotifications";
import { WireframeChat } from "./components/WireframeChat";
import { WireframeTeam } from "./components/WireframeTeam";
import { WireframeSettings } from "./components/WireframeSettings";

type Screen =
  | "login"
  | "home"
  | "projects"
  | "taskList"
  | "taskDetails"
  | "notifications"
  | "chat"
  | "team"
  | "settings";

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>("login");
  const [selectedProjectId, setSelectedProjectId] = useState<number>(1);
  const [selectedTaskId, setSelectedTaskId] = useState<number>(1);

  const handleLogin = () => {
    setCurrentScreen("home");
  };

  const handleLogout = () => {
    setCurrentScreen("login");
  };

  const handleNavigate = (page: string) => {
    setCurrentScreen(page as Screen);
  };

  const handleSelectProject = (projectId: number) => {
    setSelectedProjectId(projectId);
    setCurrentScreen("taskList");
  };

  const handleSelectTask = (taskId: number) => {
    setSelectedTaskId(taskId);
    setCurrentScreen("taskDetails");
  };

  const handleBackToProjects = () => {
    setCurrentScreen("projects");
  };

  const handleBackToTaskList = () => {
    setCurrentScreen("taskList");
  };

  const handleSelectNotification = (type: string, relatedId: number) => {
    // Navigate based on notification type
    if (type === "task") {
      setSelectedTaskId(relatedId);
      setCurrentScreen("taskDetails");
    } else if (type === "project") {
      setSelectedProjectId(relatedId);
      setCurrentScreen("projects");
    } else if (type === "chat") {
      setCurrentScreen("chat");
    } else if (type === "team") {
      setCurrentScreen("team");
    }
  };

  const handleSelectMember = (memberId: number) => {
    // Could navigate to member profile or show member details
    console.log("Selected member:", memberId);
  };

  return (
    <>
      {currentScreen === "login" && <WireframeLogin onLogin={handleLogin} />}

      {currentScreen === "home" && (
        <WireframeDashboard
          onNavigate={handleNavigate}
          onLogout={handleLogout}
        />
      )}

      {currentScreen === "projects" && (
        <WireframeProjects
          onNavigate={handleNavigate}
          onLogout={handleLogout}
          onSelectProject={handleSelectProject}
        />
      )}

      {currentScreen === "taskList" && (
        <WireframeTaskList
          projectId={selectedProjectId}
          onNavigate={handleNavigate}
          onLogout={handleLogout}
          onBack={handleBackToProjects}
          onSelectTask={handleSelectTask}
        />
      )}

      {currentScreen === "taskDetails" && (
        <WireframeTaskDetails
          taskId={selectedTaskId}
          onNavigate={handleNavigate}
          onLogout={handleLogout}
          onBack={handleBackToTaskList}
        />
      )}

      {currentScreen === "notifications" && (
        <WireframeNotifications
          onNavigate={handleNavigate}
          onLogout={handleLogout}
          onSelectNotification={handleSelectNotification}
        />
      )}

      {currentScreen === "chat" && (
        <WireframeChat onNavigate={handleNavigate} onLogout={handleLogout} />
      )}

      {currentScreen === "team" && (
        <WireframeTeam
          onNavigate={handleNavigate}
          onLogout={handleLogout}
          onSelectMember={handleSelectMember}
        />
      )}

      {currentScreen === "settings" && (
        <WireframeSettings
          onNavigate={handleNavigate}
          onLogout={handleLogout}
        />
      )}
    </>
  );
}
