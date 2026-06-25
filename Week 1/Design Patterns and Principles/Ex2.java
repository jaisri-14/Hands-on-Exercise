
abstract class Document {
    abstract void open();
}

class WordDocument extends Document {
    void open() {
        System.out.println("Word Document created");
    }
}

class PdfDocument extends Document {
    void open() {
        System.out.println("PDF Document created");
    }
}

class ExcelDocument extends Document {
    void open() {
        System.out.println("Excel Document created");
    }
}

abstract class DocumentFactory {
    abstract Document createDocument();
}

class WordFactory extends DocumentFactory {
    Document createDocument() {
        return new WordDocument();
    }
}

class PdfFactory extends DocumentFactory {
    Document createDocument() {
        return new PdfDocument();
    }
}

class ExcelFactory extends DocumentFactory {
    Document createDocument() {
        return new ExcelDocument();
    }
}

public class Ex2 {
    public static void main(String[] args) {
        DocumentFactory f1 = new WordFactory();
        Document d1 = f1.createDocument();
        d1.open();

        DocumentFactory f2 = new PdfFactory();
        Document d2 = f2.createDocument();
        d2.open();

        DocumentFactory f3 = new ExcelFactory();
        Document d3 = f3.createDocument();
        d3.open();
    }
}