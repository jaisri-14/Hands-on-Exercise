class Computer {
    private String cpu;
    private String ram;
    private String storage;

    private Computer(Builder b) {
        cpu = b.cpu;
        ram = b.ram;
        storage = b.storage;
    }

    public void display() {
        System.out.println("CPU: " + cpu);
        System.out.println("RAM: " + ram);
        System.out.println("Storage: " + storage);
        System.out.println();
    }

    static class Builder {
        private String cpu;
        private String ram;
        private String storage;

        Builder setCPU(String cpu) {
            this.cpu = cpu;
            return this;
        }

        Builder setRAM(String ram) {
            this.ram = ram;
            return this;
        }

        Builder setStorage(String storage) {
            this.storage = storage;
            return this;
        }

        Computer build() {
            return new Computer(this);
        }
    }
}

public class Ex3 {
    public static void main(String[] args) {

        Computer c1 = new Computer.Builder()
                .setCPU("Intel i5")
                .setRAM("8 GB")
                .setStorage("512 GB SSD")
                .build();

        Computer c2 = new Computer.Builder()
                .setCPU("Intel i7")
                .setRAM("16 GB")
                .setStorage("1 TB SSD")
                .build();

        c1.display();
        c2.display();
    }
}