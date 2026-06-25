class Task {
    int taskId;
    String taskName;
    String status;
    Task next;

    public Task(int taskId, String taskName, String status) {
        this.taskId = taskId;
        this.taskName = taskName;
        this.status = status;
        this.next = null;
    }
}

class TaskLinkedList {
    private Task head;

    // Add a task
    public void addTask(int taskId, String taskName, String status) {
        Task newTask = new Task(taskId, taskName, status);

        if (head == null) {
            head = newTask;
        } else {
            Task temp = head;
            while (temp.next != null) {
                temp = temp.next;
            }
            temp.next = newTask;
        }

        System.out.println("Task added: " + taskName);
    }

    // Search for a task by ID
    public void searchTask(int taskId) {
        Task temp = head;

        while (temp != null) {
            if (temp.taskId == taskId) {
                System.out.println("\nTask Found:");
                System.out.println("Task ID: " + temp.taskId);
                System.out.println("Task Name: " + temp.taskName);
                System.out.println("Status: " + temp.status);
                return;
            }
            temp = temp.next;
        }

        System.out.println("\nTask with ID " + taskId + " not found.");
    }

    // Traverse all tasks
    public void traverseTasks() {
        if (head == null) {
            System.out.println("No tasks available.");
            return;
        }

        System.out.println("\nTask List:");
        Task temp = head;

        while (temp != null) {
            System.out.println(
                    "Task ID: " + temp.taskId +
                    ", Task Name: " + temp.taskName +
                    ", Status: " + temp.status);
            temp = temp.next;
        }
    }

    // Delete task by ID
    public void deleteTask(int taskId) {
        if (head == null) {
            System.out.println("List is empty.");
            return;
        }

        if (head.taskId == taskId) {
            head = head.next;
            System.out.println("Task deleted successfully.");
            return;
        }

        Task current = head;
        Task previous = null;

        while (current != null && current.taskId != taskId) {
            previous = current;
            current = current.next;
        }

        if (current == null) {
            System.out.println("Task not found.");
            return;
        }

        previous.next = current.next;
        System.out.println("Task deleted successfully.");
    }
}

public class Ex5 {
    public static void main(String[] args) {

        TaskLinkedList taskList = new TaskLinkedList();

        // Adding tasks
        taskList.addTask(101, "Design Database", "Pending");
        taskList.addTask(102, "Develop Backend", "In Progress");
        taskList.addTask(103, "Testing", "Pending");

        // Traversing tasks
        taskList.traverseTasks();

        // Searching a task
        taskList.searchTask(102);

        // Deleting a task
        taskList.deleteTask(102);

        // Traversing after deletion
        taskList.traverseTasks();
    }
}