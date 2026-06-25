interface CustomerRepository {
    String findCustomerById(int id);
}

// Concrete Repository
class CustomerRepositoryImpl implements CustomerRepository {
    public String findCustomerById(int id) {
        return "Customer " + id + " found";
    }
}

// Service Class (Dependency Injection via Constructor)
class CustomerService {
    private CustomerRepository repository;

    public CustomerService(CustomerRepository repository) {
        this.repository = repository;
    }

    public void getCustomer(int id) {
        String result = repository.findCustomerById(id);
        System.out.println(result);
    }
}

// Main Class
public class Ex11 {
    public static void main(String[] args) {

        CustomerRepository repository = new CustomerRepositoryImpl();

        CustomerService service = new CustomerService(repository);

        service.getCustomer(101);
        service.getCustomer(202);
    }
}