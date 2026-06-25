import java.util.HashMap;

class InventoryProduct {
    int productId;
    String productName;
    int quantity;
    double price;

    public InventoryProduct(int productId, String productName, int quantity, double price) {
        this.productId = productId;
        this.productName = productName;
        this.quantity = quantity;
        this.price = price;
    }

    public void display() {
        System.out.println("ID: " + productId +
                ", Name: " + productName +
                ", Quantity: " + quantity +
                ", Price: Rs." + price);
    }
}

public class Ex1 {

    private HashMap<Integer, InventoryProduct> inventory = new HashMap<>();

    // Add Product
    public void addProduct(InventoryProduct p) {
        inventory.put(p.productId, p);
        System.out.println("Product Added Successfully");
    }

    // Update Product
    public void updateProduct(int id, int quantity, double price) {
        if (inventory.containsKey(id)) {
            InventoryProduct p = inventory.get(id);
            p.quantity = quantity;
            p.price = price;
            System.out.println("Product Updated Successfully");
        } else {
            System.out.println("Product Not Found");
        }
    }

    // Delete Product
    public void deleteProduct(int id) {
        if (inventory.remove(id) != null) {
            System.out.println("Product Deleted Successfully");
        } else {
            System.out.println("Product Not Found");
        }
    }

    // Display Products
    public void displayProducts() {
        System.out.println("\nInventory Details:");

        if (inventory.isEmpty()) {
            System.out.println("Inventory is Empty");
            return;
        }

        for (InventoryProduct p : inventory.values()) {
            p.display();
        }
    }

    public static void main(String[] args) {

        Ex1 ims = new Ex1();

        // Add Products
        ims.addProduct(new InventoryProduct(101, "Laptop", 20, 50000));
        ims.addProduct(new InventoryProduct(102, "Mouse", 50, 500));
        ims.addProduct(new InventoryProduct(103, "Keyboard", 30, 1500));

        // Display Inventory
        ims.displayProducts();

        // Update Product
        ims.updateProduct(102, 60, 550);

        // Delete Product
        ims.deleteProduct(103);

        // Display Updated Inventory
        ims.displayProducts();
    }
}