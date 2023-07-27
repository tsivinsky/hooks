"use client";
import { useState } from "react";
import { useChoiceState } from "@/hooks/useChoiceState";
import { Task } from "./page";

export const Preview = () => {
  const [tasks, setTasks] = useState<Task[]>(DEFAULT_TASKS);
  const [newTask, setNewTask] = useState("");

  const choice = useChoiceState(
    tasks,
    (task) => task.id,
    (taskId) => taskId
  );

  const handleAddTask = () => {
    setTasks((prev) => [...prev, { id: prev.length + 1, title: newTask }]);
    setNewTask("");
  };

  return (
    <div className="my-4">
      <h2 className="text-3xl font-semibold">Preview</h2>
      <pre className="my-2 bg-neutral-900 rounded-md p-2">
        {JSON.stringify({ selectedItems: choice.selectedItems })}
      </pre>
      <div className="flex gap-2 py-2 px-1 border-b-2">
        <input
          type="checkbox"
          id="tasks-select-all"
          checked={choice.areAllItemsSelected}
          onChange={(e) => choice.selectAll(e.target.checked)}
        />
        <label
          htmlFor="tasks-select-all"
          className="font-medium cursor-pointer select-none"
        >
          Select all
        </label>
      </div>
      <div>
        {tasks.map((task) => (
          <div key={task.id} className="flex gap-2 py-2 px-1">
            <input
              type="checkbox"
              id={`${task.id}-checkbox`}
              checked={choice.getIsItemSelected(task.id)}
              onChange={(e) => choice.selectById(task.id, e.target.checked)}
            />
            <label
              htmlFor={`${task.id}-checkbox`}
              className="font-medium cursor-pointer select-none"
            >
              {task.title}
            </label>
          </div>
        ))}
      </div>
      <input
        type="text"
        className="border rounded py-1 px-2"
        placeholder="Press Enter to create task"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleAddTask()}
      />
    </div>
  );
};

const DEFAULT_TASKS: Task[] = [
  {
    id: 0,
    title: "Task 1",
  },
  {
    id: 1,
    title: "Task 2",
  },
  {
    id: 2,
    title: "Task 3",
  },
  {
    id: 3,
    title: "Task 4",
  },
  {
    id: 4,
    title: "Task 5",
  },
  {
    id: 5,
    title: "Task 6",
  },
];
