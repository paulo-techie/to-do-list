function task(taskdate, title, description, completedStatus) {
  this.taskdate = taskdate;
  this.title = title;
  this.description = description;
  this.completedStatus = completedStatus;
}

task.prototype.toggleRead = function toggleRead() {
  this.completedStatus = !this.completedStatus;
};

export default task;