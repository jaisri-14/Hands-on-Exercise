class Book {
    int bookId;
    String title;
    String author;

    public Book(int bookId, String title, String author) {
        this.bookId = bookId;
        this.title = title;
        this.author = author;
    }
}

public class Ex6 {

    // Linear Search
    public static int linearSearch(Book[] books, String title) {
        for (int i = 0; i < books.length; i++) {
            if (books[i].title.equalsIgnoreCase(title)) {
                return i;
            }
        }
        return -1;
    }

    // Binary Search (Array must be sorted by title)
    public static int binarySearch(Book[] books, String title) {
        int low = 0;
        int high = books.length - 1;

        while (low <= high) {
            int mid = (low + high) / 2;

            int result = books[mid].title.compareToIgnoreCase(title);

            if (result == 0) {
                return mid;
            } else if (result < 0) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }

        return -1;
    }

    public static void main(String[] args) {

        // Sorted list of books by title
        Book[] books = {
                new Book(101, "C Programming", "Dennis Ritchie"),
                new Book(102, "Data Structures", "Mark Allen"),
                new Book(103, "Java Programming", "James Gosling"),
                new Book(104, "Python Basics", "Guido van Rossum"),
                new Book(105, "Software Engineering", "Ian Sommerville")
        };

        String searchTitle = "Java Programming";

        // Linear Search
        int linearResult = linearSearch(books, searchTitle);

        if (linearResult != -1) {
            System.out.println("Linear Search:");
            System.out.println("Book Found: "
                    + books[linearResult].title
                    + " by "
                    + books[linearResult].author);
        } else {
            System.out.println("Book not found using Linear Search.");
        }

        // Binary Search
        int binaryResult = binarySearch(books, searchTitle);

        if (binaryResult != -1) {
            System.out.println("\nBinary Search:");
            System.out.println("Book Found: "
                    + books[binaryResult].title
                    + " by "
                    + books[binaryResult].author);
        } else {
            System.out.println("Book not found using Binary Search.");
        }
    }
}