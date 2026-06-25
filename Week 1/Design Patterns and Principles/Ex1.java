class Logger {
    private static Logger instance;

    private Logger() {
        System.out.println("Logger object created");
    }

    public static Logger getInstance() {
        if (instance == null) {
            instance = new Logger();
        }
        return instance;
    }
}

public class Ex1 {
    public static void main(String[] args) {
        Logger l1 = Logger.getInstance();
        Logger l2 = Logger.getInstance();

        if (l1 == l2) {
            System.out.println("Only one Logger instance exists.");
        } else {
            System.out.println("Different instances created.");
        }
    }
}