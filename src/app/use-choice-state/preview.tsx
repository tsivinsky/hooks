"use client";
import { useState } from "react";
import { useChoiceState } from "@/hooks/useChoiceState";
import { Task } from "./page";
import clsx from "clsx";

export const Preview = () => {
  const [tasks, setTasks] = useState<Task[]>(DEFAULT_TASKS);
  const [newTask, setNewTask] = useState("");

  const choice = useChoiceState(tasks, {
    select: (task) => task.id,
    getId: (taskId) => taskId,
    shouldSelect: (task) => !task.disabled,
  });

  const handleAddTask = () => {
    setTasks((prev) => [
      ...prev,
      { id: prev.length + 1, title: newTask, disabled: Math.random() < 0.5 },
    ]);
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
          <div
            key={task.id}
            className={clsx("flex gap-2 py-2 px-1", {
              "opacity-50": task.disabled,
            })}
          >
            <input
              type="checkbox"
              id={`${task.id}-checkbox`}
              disabled={task.disabled}
              checked={choice.getIsItemSelected(task.id)}
              onChange={(e) => choice.selectById(task, e.target.checked)}
            />
            <label
              htmlFor={`${task.id}-checkbox`}
              className={clsx("font-medium select-none", {
                "cursor-pointer": !task.disabled,
              })}
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
    disabled: true,
  },
  {
    id: 1,
    title: "Task 2",
    disabled: false,
  },
  {
    id: 2,
    title: "Task 3",
    disabled: false,
  },
  {
    id: 3,
    title: "Task 4",
    disabled: true,
  },
  {
    id: 4,
    title: "Task 5",
    disabled: true,
  },
  {
    id: 5,
    title: "Task 6",
    disabled: false,
  },
];
