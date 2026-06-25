import java.util.ArrayList;
import java.util.List;

// Observer Interface
interface Observer {
    void update(double price);
}

// Subject Interface
interface Stock {
    void registerObserver(Observer o);
    void removeObserver(Observer o);
    void notifyObservers();
}

// Concrete Subject
class StockMarket implements Stock {
    private List<Observer> observers = new ArrayList<>();
    private double price;

    public void setPrice(double price) {
        this.price = price;
        notifyObservers();
    }

    public void registerObserver(Observer o) {
        observers.add(o);
    }

    public void removeObserver(Observer o) {
        observers.remove(o);
    }

    public void notifyObservers() {
        for (Observer o : observers) {
            o.update(price);
        }
    }
}

// Concrete Observer 1
class MobileApp implements Observer {
    public void update(double price) {
        System.out.println("Mobile App: Stock price updated to " + price);
    }
}

// Concrete Observer 2
class WebApp implements Observer {
    public void update(double price) {
        System.out.println("Web App: Stock price updated to " + price);
    }
}

// Test Class
public class Ex7 {
    public static void main(String[] args) {

        StockMarket market = new StockMarket();

        Observer mobile = new MobileApp();
        Observer web = new WebApp();

        market.registerObserver(mobile);
        market.registerObserver(web);

        market.setPrice(250.75);
        System.out.println();

        market.setPrice(260.50);
    }
}