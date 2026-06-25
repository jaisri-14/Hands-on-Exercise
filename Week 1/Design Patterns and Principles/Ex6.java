interface Image {
    void display();
}

// Real Subject
class RealImage implements Image {
    private String fileName;

    public RealImage(String fileName) {
        this.fileName = fileName;
        loadFromServer();
    }

    private void loadFromServer() {
        System.out.println("Loading " + fileName + " from remote server");
    }

    public void display() {
        System.out.println("Displaying " + fileName);
    }
}

// Proxy
class ProxyImage implements Image {
    private String fileName;
    private RealImage realImage;

    public ProxyImage(String fileName) {
        this.fileName = fileName;
    }

    public void display() {
        if (realImage == null) {
            realImage = new RealImage(fileName); // Lazy loading
        }
        realImage.display(); // Cached object reused
    }
}

// Test Class
public class Ex6 {
    public static void main(String[] args) {
        Image img = new ProxyImage("Photo.jpg");

        img.display(); // Loads and displays
        System.out.println();

        img.display(); // Uses cached image
    }
}