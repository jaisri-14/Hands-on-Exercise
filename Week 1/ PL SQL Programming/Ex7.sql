-- Scenario 1: Customer Management Package

CREATE OR REPLACE PACKAGE CustomerManagement AS
    PROCEDURE AddCustomer(p_id NUMBER, p_name VARCHAR2, p_balance NUMBER);
    PROCEDURE UpdateCustomer(p_id NUMBER, p_name VARCHAR2);
    FUNCTION GetCustomerBalance(p_id NUMBER) RETURN NUMBER;
END CustomerManagement;
/

CREATE OR REPLACE PACKAGE BODY CustomerManagement AS

    PROCEDURE AddCustomer(p_id NUMBER, p_name VARCHAR2, p_balance NUMBER) AS
    BEGIN
        INSERT INTO customers(customer_id, customer_name, balance)
        VALUES (p_id, p_name, p_balance);
    END;

    PROCEDURE UpdateCustomer(p_id NUMBER, p_name VARCHAR2) AS
    BEGIN
        UPDATE customers
        SET customer_name = p_name
        WHERE customer_id = p_id;
    END;

    FUNCTION GetCustomerBalance(p_id NUMBER) RETURN NUMBER AS
        v_balance NUMBER;
    BEGIN
        SELECT balance INTO v_balance
        FROM customers
        WHERE customer_id = p_id;

        RETURN v_balance;
    END;

END CustomerManagement;
/

-- Scenario 2: Employee Management Package

CREATE OR REPLACE PACKAGE EmployeeManagement AS
    PROCEDURE HireEmployee(p_id NUMBER, p_name VARCHAR2, p_salary NUMBER);
    PROCEDURE UpdateEmployee(p_id NUMBER, p_name VARCHAR2, p_salary NUMBER);
    FUNCTION CalculateAnnualSalary(p_salary NUMBER) RETURN NUMBER;
END EmployeeManagement;
/

CREATE OR REPLACE PACKAGE BODY EmployeeManagement AS

    PROCEDURE HireEmployee(p_id NUMBER, p_name VARCHAR2, p_salary NUMBER) AS
    BEGIN
        INSERT INTO employees(employee_id, employee_name, salary)
        VALUES (p_id, p_name, p_salary);
    END;

    PROCEDURE UpdateEmployee(p_id NUMBER, p_name VARCHAR2, p_salary NUMBER) AS
    BEGIN
        UPDATE employees
        SET employee_name = p_name,
            salary = p_salary
        WHERE employee_id = p_id;
    END;

    FUNCTION CalculateAnnualSalary(p_salary NUMBER) RETURN NUMBER AS
    BEGIN
        RETURN p_salary * 12;
    END;

END EmployeeManagement;
/

-- Scenario 3: Account Operations Package

CREATE OR REPLACE PACKAGE AccountOperations AS
    PROCEDURE OpenAccount(p_id NUMBER, p_customer_id NUMBER, p_balance NUMBER);
    PROCEDURE CloseAccount(p_id NUMBER);
    FUNCTION GetTotalBalance(p_customer_id NUMBER) RETURN NUMBER;
END AccountOperations;
/

CREATE OR REPLACE PACKAGE BODY AccountOperations AS

    PROCEDURE OpenAccount(p_id NUMBER, p_customer_id NUMBER, p_balance NUMBER) AS
    BEGIN
        INSERT INTO accounts(account_id, customer_id, balance)
        VALUES (p_id, p_customer_id, p_balance);
    END;

    PROCEDURE CloseAccount(p_id NUMBER) AS
    BEGIN
        DELETE FROM accounts
        WHERE account_id = p_id;
    END;

    FUNCTION GetTotalBalance(p_customer_id NUMBER) RETURN NUMBER AS
        v_total NUMBER;
    BEGIN
        SELECT SUM(balance) INTO v_total
        FROM accounts
        WHERE customer_id = p_customer_id;

        RETURN NVL(v_total, 0);
    END;

END AccountOperations;
/