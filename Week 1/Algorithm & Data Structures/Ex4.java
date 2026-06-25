class Employee {
    int employeeId;
    String name;
    String position;
    double salary;

    Employee(int employeeId, String name, String position, double salary) {
        this.employeeId = employeeId;
        this.name = name;
        this.position = position;
        this.salary = salary;
    }

    void display() {
        System.out.println("ID: " + employeeId +
                ", Name: " + name +
                ", Position: " + position +
                ", Salary: " + salary);
    }
}

public class Ex4 {

    static Employee[] employees = new Employee[10];
    static int count = 0;

    // Add Employee
    public static void addEmployee(Employee e) {
        if (count < employees.length) {
            employees[count] = e;
            count++;
            System.out.println("Employee added successfully.");
        } else {
            System.out.println("Array is full.");
        }
    }

    // Search Employee
    public static int searchEmployee(int id) {
        for (int i = 0; i < count; i++) {
            if (employees[i].employeeId == id) {
                return i;
            }
        }
        return -1;
    }

    // Traverse Employees
    public static void traverseEmployees() {
        if (count == 0) {
            System.out.println("No employee records found.");
            return;
        }

        for (int i = 0; i < count; i++) {
            employees[i].display();
        }
    }

    // Delete Employee
    public static void deleteEmployee(int id) {
        int index = searchEmployee(id);

        if (index == -1) {
            System.out.println("Employee not found.");
            return;
        }

        for (int i = index; i < count - 1; i++) {
            employees[i] = employees[i + 1];
        }

        employees[count - 1] = null;
        count--;

        System.out.println("Employee deleted successfully.");
    }

    public static void main(String[] args) {

        addEmployee(new Employee(101, "Arun", "Manager", 60000));
        addEmployee(new Employee(102, "Priya", "Developer", 50000));
        addEmployee(new Employee(103, "Rahul", "Tester", 45000));
        addEmployee(new Employee(104, "Meena", "HR", 55000));

        System.out.println("\nEmployee Records:");
        traverseEmployees();

        System.out.println("\nSearching for Employee ID 102:");
        int index = searchEmployee(102);

        if (index != -1)
            employees[index].display();
        else
            System.out.println("Employee not found.");

        System.out.println("\nDeleting Employee ID 103:");
        deleteEmployee(103);

        System.out.println("\nEmployee Records After Deletion:");
        traverseEmployees();

        System.out.println("\nTime Complexity Analysis:");
        System.out.println("Add Operation      : O(1)");
        System.out.println("Search Operation   : O(n)");
        System.out.println("Traverse Operation : O(n)");
        System.out.println("Delete Operation   : O(n)");

        System.out.println("\nLimitations of Arrays:");
        System.out.println("1. Fixed size.");
        System.out.println("2. Insertion and deletion are costly.");
        System.out.println("3. Memory may be wasted if array is not fully used.");
        System.out.println("4. Searching is slower for large unsorted arrays.");
    }
}