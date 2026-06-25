class Order {
    int orderId;
    String customerName;
    double totalPrice;

    Order(int orderId, String customerName, double totalPrice) {
        this.orderId = orderId;
        this.customerName = customerName;
        this.totalPrice = totalPrice;
    }

    void display() {
        System.out.println("Order ID: " + orderId +
                ", Customer: " + customerName +
                ", Total Price: " + totalPrice);
    }
}

public class Ex3 {

    // Bubble Sort
    public static void bubbleSort(Order[] orders) {
        int n = orders.length;

        for (int i = 0; i < n - 1; i++) {
            for (int j = 0; j < n - i - 1; j++) {
                if (orders[j].totalPrice > orders[j + 1].totalPrice) {
                    Order temp = orders[j];
                    orders[j] = orders[j + 1];
                    orders[j + 1] = temp;
                }
            }
        }
    }

    // Quick Sort
    public static void quickSort(Order[] orders, int low, int high) {
        if (low < high) {
            int pi = partition(orders, low, high);

            quickSort(orders, low, pi - 1);
            quickSort(orders, pi + 1, high);
        }
    }

    public static int partition(Order[] orders, int low, int high) {
        double pivot = orders[high].totalPrice;
        int i = low - 1;

        for (int j = low; j < high; j++) {
            if (orders[j].totalPrice < pivot) {
                i++;

                Order temp = orders[i];
                orders[i] = orders[j];
                orders[j] = temp;
            }
        }

        Order temp = orders[i + 1];
        orders[i + 1] = orders[high];
        orders[high] = temp;

        return i + 1;
    }

    public static void displayOrders(Order[] orders) {
        for (Order o : orders) {
            o.display();
        }
    }

    public static void main(String[] args) {

        Order[] orders = {
                new Order(101, "Arun", 2500.50),
                new Order(102, "Priya", 1200.75),
                new Order(103, "Rahul", 5000.00),
                new Order(104, "Meena", 3000.25),
                new Order(105, "Kavin", 1800.00)
        };

        // Bubble Sort
        Order[] bubbleOrders = orders.clone();
        bubbleSort(bubbleOrders);

        System.out.println("Orders after Bubble Sort:");
        displayOrders(bubbleOrders);

        // Quick Sort
        Order[] quickOrders = orders.clone();
        quickSort(quickOrders, 0, quickOrders.length - 1);

        System.out.println("\nOrders after Quick Sort:");
        displayOrders(quickOrders);

        // Complexity Analysis
        System.out.println("\nTime Complexity Analysis:");
        System.out.println("Bubble Sort:");
        System.out.println("Best Case    : O(n)");
        System.out.println("Average Case : O(n^2)");
        System.out.println("Worst Case   : O(n^2)");

        System.out.println("\nQuick Sort:");
        System.out.println("Best Case    : O(n log n)");
        System.out.println("Average Case : O(n log n)");
        System.out.println("Worst Case   : O(n^2)");

        System.out.println("\nConclusion:");
        System.out.println("Quick Sort is generally preferred because it");
        System.out.println("has an average time complexity of O(n log n),");
        System.out.println("making it much faster than Bubble Sort for large datasets.");
    }
}