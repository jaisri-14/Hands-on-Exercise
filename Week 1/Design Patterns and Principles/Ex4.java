interface PaymentProcessor {
    void processPayment(double amount);
}

// Adaptee Classes
class PayPalGateway {
    void makePayment(double amount) {
        System.out.println("Paid Rs." + amount + " using PayPal");
    }
}

class StripeGateway {
    void pay(double amount) {
        System.out.println("Paid Rs." + amount + " using Stripe");
    }
}

// Adapter Classes
class PayPalAdapter implements PaymentProcessor {
    private PayPalGateway gateway = new PayPalGateway();

    public void processPayment(double amount) {
        gateway.makePayment(amount);
    }
}

class StripeAdapter implements PaymentProcessor {
    private StripeGateway gateway = new StripeGateway();

    public void processPayment(double amount) {
        gateway.pay(amount);
    }
}

// Test Class
public class Ex4 {
    public static void main(String[] args) {
        PaymentProcessor p1 = new PayPalAdapter();
        p1.processPayment(1000);

        PaymentProcessor p2 = new StripeAdapter();
        p2.processPayment(2000);
    }
}