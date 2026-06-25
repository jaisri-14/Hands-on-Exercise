public class Ex7 {

    // Recursive method to calculate future value
    public static double futureValue(double currentValue, double growthRate, int years) {

        // Base case
        if (years == 0) {
            return currentValue;
        }

        // Recursive case
        return futureValue(currentValue * (1 + growthRate), growthRate, years - 1);
    }

    public static void main(String[] args) {

        double presentValue = 10000; // Initial investment
        double growthRate = 0.10;    // 10% annual growth
        int years = 5;

        double result = futureValue(presentValue, growthRate, years);

        System.out.println("Present Value = Rs." + presentValue);
        System.out.println("Growth Rate = " + (growthRate * 100) + "%");
        System.out.println("Years = " + years);
        System.out.printf("Future Value = Rs. %.2f%n", result);
    }
}