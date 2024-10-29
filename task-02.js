const tasks = [
  {
    task: "clean apartment",
    priority: 5,
  },
  {
    task: "learn objects",
    priority: 2,
  },
  {
    task: "practice JavaScript",
    priority: 1,
  },
];

const finishTask = (tasks) => {
  const updatedTasks = tasks.slice(0, -1);
  return updatedTasks;
};

const updatedTasks = finishTask(tasks);

console.log(finishTask(updatedTasks));
console.log(tasks);
