-- Customers
INSERT INTO Customers
VALUES (1, 'John Doe',
        TO_DATE('1985-05-15', 'YYYY-MM-DD'),
        1000,
        SYSDATE);

INSERT INTO Customers
VALUES (2, 'Jane Smith',
        TO_DATE('1990-07-20', 'YYYY-MM-DD'),
        1500,
        SYSDATE);

INSERT INTO Customers
VALUES (3, 'Robert Wilson',
        TO_DATE('1960-03-10', 'YYYY-MM-DD'),
        20000,
        SYSDATE);

INSERT INTO Customers
VALUES (4, 'Emily Davis',
        TO_DATE('1975-12-05', 'YYYY-MM-DD'),
        12000,
        SYSDATE);

--------------------------------------------------

-- Accounts
INSERT INTO Accounts
VALUES (1, 1, 'Savings', 1000, SYSDATE);

INSERT INTO Accounts
VALUES (2, 2, 'Checking', 1500, SYSDATE);

INSERT INTO Accounts
VALUES (3, 3, 'Savings', 20000, SYSDATE);

INSERT INTO Accounts
VALUES (4, 4, 'Savings', 12000, SYSDATE);

--------------------------------------------------

-- Transactions
INSERT INTO Transactions
VALUES (1, 1, SYSDATE, 200, 'Deposit');

INSERT INTO Transactions
VALUES (2, 2, SYSDATE, 300, 'Withdrawal');

INSERT INTO Transactions
VALUES (3, 3, SYSDATE, 500, 'Deposit');

INSERT INTO Transactions
VALUES (4, 4, SYSDATE, 1000, 'Withdrawal');

--------------------------------------------------

-- Loans
INSERT INTO Loans
VALUES (1, 1, 5000, 5,
        SYSDATE,
        ADD_MONTHS(SYSDATE, 60));

INSERT INTO Loans
VALUES (2, 3, 10000, 6,
        SYSDATE,
        ADD_MONTHS(SYSDATE, 36));

INSERT INTO Loans
VALUES (3, 4, 15000, 7,
        SYSDATE,
        ADD_MONTHS(SYSDATE, 48));

--------------------------------------------------

-- Employees
INSERT INTO Employees
VALUES (1, 'Alice Johnson',
        'Manager',
        70000,
        'HR',
        TO_DATE('2015-06-15', 'YYYY-MM-DD'));

INSERT INTO Employees
VALUES (2, 'Bob Brown',
        'Developer',
        60000,
        'IT',
        TO_DATE('2017-03-20', 'YYYY-MM-DD'));

INSERT INTO Employees
VALUES (3, 'David Miller',
        'Analyst',
        55000,
        'Finance',
        TO_DATE('2018-08-10', 'YYYY-MM-DD'));

INSERT INTO Employees
VALUES (4, 'Sophia Taylor',
        'Tester',
        50000,
        'IT',
        TO_DATE('2020-01-12', 'YYYY-MM-DD'));

COMMIT;