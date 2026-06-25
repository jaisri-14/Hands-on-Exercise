import java.util.Arrays;
import java.util.Comparator;

class Product {
    int productId;
    String productName;
    String category;

    Product(int productId, String productName, String category) {
        this.productId = productId;
        this.productName = productName;
        this.category = category;
    }

    void display() {
        System.out.println("Product ID: " + productId +
                ", Name: " + productName +
                ", Category: " + category);
    }
}

public class Ex2 {

    // Linear Search
    public static Product linearSearch(Product[] products, int key) {
        for (Product p : products) {
            if (p.productId == key) {
                return p;
            }
        }
        return null;
    }

    // Binary Search
    public static Product binarySearch(Product[] products, int key) {
        int low = 0;
        int high = products.length - 1;

        while (low <= high) {
            int mid = (low + high) / 2;

            if (products[mid].productId == key) {
                return products[mid];
            } else if (products[mid].productId < key) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }
        return null;
    }

    public static void main(String[] args) {

        Product[] products = {
                new Product(105, "Laptop", "Electronics"),
                new Product(101, "Phone", "Electronics"),
                new Product(108, "Shoes", "Fashion"),
                new Product(103, "Book", "Education"),
                new Product(110, "Watch", "Accessories")
        };

        int searchId = 103;

        // Linear Search
        System.out.println("Linear Search:");
        Product result1 = linearSearch(products, searchId);

        if (result1 != null)
            result1.display();
        else
            System.out.println("Product not found.");

        // Sort array for Binary Search
        Product[] sortedProducts = products.clone();
        Arrays.sort(sortedProducts, Comparator.comparingInt(p -> p.productId));

        // Binary Search
        System.out.println("\nBinary Search:");
        Product result2 = binarySearch(sortedProducts, searchId);

        if (result2 != null)
            result2.display();
        else
            System.out.println("Product not found.");

        // Complexity Analysis
        System.out.println("\nTime Complexity Analysis:");
        System.out.println("Linear Search:");
        System.out.println("Best Case    : O(1)");
        System.out.println("Average Case : O(n)");
        System.out.println("Worst Case   : O(n)");

        System.out.println("\nBinary Search:");
        System.out.println("Best Case    : O(1)");
        System.out.println("Average Case : O(log n)");
        System.out.println("Worst Case   : O(log n)");

        System.out.println("\nConclusion:");
        System.out.println("Binary Search is more suitable for an e-commerce platform");
        System.out.println("because it provides faster searching on sorted data.");
    }
}
